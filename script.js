let time = 5000
let currentImageIndex = 0
let images = document.querySelectorAll(".slider img")
const caption = document.querySelectorAll(".caption")
const nextBtn = document.querySelector(".next")
const prevBtn = document.querySelector(".prev")
const dots = document.querySelectorAll(".dot")

let max = images.length

/* automatic slide */
function nextImage() {

  images[currentImageIndex].classList.remove("selected")
  caption[currentImageIndex].classList.remove("selected")
  dots[currentImageIndex].classList.remove("selectedDot")

  currentImageIndex++
  if (currentImageIndex >= max) currentImageIndex = 0
  if (currentImageIndex < 0) currentImageIndex = 0

  images[currentImageIndex].classList.add("selected")

  caption[currentImageIndex].classList.add("selected")
  dots[currentImageIndex].classList.add("selectedDot")
}
/* show previous image button */
prevBtn.addEventListener("click", () => {
  images[currentImageIndex].classList.remove("selected")
  caption[currentImageIndex].classList.remove("selected")
  dots[currentImageIndex].classList.remove("selectedDot")

  currentImageIndex--
  if (currentImageIndex >= max) currentImageIndex = 0
  if (currentImageIndex < 0) currentImageIndex = 2

  images[currentImageIndex].classList.add("selected")
  caption[currentImageIndex].classList.add("selected")
  dots[currentImageIndex].classList.add("selectedDot")
  time = 0
})
/* show next image button */
nextBtn.addEventListener("click", () => {
  images[currentImageIndex].classList.remove("selected")
  caption[currentImageIndex].classList.remove("selected")
  dots[currentImageIndex].classList.remove("selectedDot")

  currentImageIndex++
  if (currentImageIndex >= max) currentImageIndex = 0
  if (currentImageIndex < 0) currentImageIndex = 2

  images[currentImageIndex].classList.add("selected")
  caption[currentImageIndex].classList.add("selected")
  dots[currentImageIndex].classList.add("selectedDot")
})

/* change images by clicking the dots */
for (let i = 0; i < dots.length; i++) {
  dots[i].addEventListener("click", () => {
    images[currentImageIndex].classList.remove("selected")
    caption[currentImageIndex].classList.remove("selected")
    dots[currentImageIndex].classList.remove("selectedDot")

    currentImageIndex = i
    if (currentImageIndex >= max) currentImageIndex = 0
    if (currentImageIndex < 0) currentImageIndex = 2

    images[currentImageIndex].classList.add("selected")
    caption[currentImageIndex].classList.add("selected")
    dots[currentImageIndex].classList.add("selectedDot")
  })
}
function start() {
  setInterval(() => {
    nextImage()
  }, time)
}

window.addEventListener("load", start)

/* show menu on mmobile device */

const menuBtn = document.querySelector(".menuBtn")
const closeMenuBtn = document.querySelector(".closeMenuBtn")
const mmobileNav = document.querySelector(".mobileNav")

menuBtn.addEventListener("click", () => {
  mmobileNav.style = "display: block;"
  menuBtn.style = "display: none;"
  closeMenuBtn.style = "display: inline-block"
})
closeMenuBtn.addEventListener("click", () => {
  mmobileNav.style = "display: none;"
  closeMenuBtn.style = "display: none;"
  menuBtn.style = "display: inline-block;"
})