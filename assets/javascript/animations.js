const slideUpElements = document.querySelectorAll(".slide-up");
const slideLeftElements = document.querySelectorAll(".slide-left");
const slideRightElements = document.querySelectorAll(".slide-right");
const fadeInElements = document.querySelectorAll(".fade-in");

const allElements = [slideUpElements, slideLeftElements, slideRightElements, fadeInElements];

const windowHeight = window.innerHeight;

const updateAnimations = () => {
  allElements.forEach(elements => {
    elements.forEach(element => {addVisibleClassWhenElementIsOnScreen(element)});
  });
};

// Animate any items showing on page load.
updateAnimations();

// Animate items as user scrolls.
document.addEventListener("scroll", () => {
  updateAnimations();
});

function addVisibleClassWhenElementIsOnScreen(el) {
  const elementTop = el.getBoundingClientRect().top;

  if (elementTop < windowHeight - 50) {
    el.classList.add("visible");
  }
}