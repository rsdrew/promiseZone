const slideUpElements = document.querySelectorAll(".slide-up");
const slideLeftElements = document.querySelectorAll(".slide-left");
const slideRightElements = document.querySelectorAll(".slide-right");
const fadeInElements = document.querySelectorAll(".fade-in");

const allElements = [slideUpElements, slideLeftElements, slideRightElements, fadeInElements];

const windowHeight = window.innerHeight;

document.addEventListener("scroll", () => {
  allElements.forEach(elements => {
    elements.forEach(element => {addVisibleClassWhenElementIsOnScreen(element)});
  });
});

function addVisibleClassWhenElementIsOnScreen(el) {
  const elementTop = el.getBoundingClientRect().top;

  if (elementTop < windowHeight - 200) {
    el.classList.add("visible");
  }
}