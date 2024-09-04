const navbar = document.querySelector(".navbar");

// sidebar open close js code
const navLinks = document.querySelector(".nav-links");
const menuOpenBtn = document.querySelector(".navbar .bx-menu");
const menuCloseBtn = document.querySelector(".nav-links .bx-x");

menuOpenBtn.onclick = function () {
  if (navLinks.style.left === "0px") {
    hideMenu();
  } else {
    showMenu();
  }
};

menuCloseBtn.onclick = function () {
  hideMenu();
};

let aboutList = document.querySelector(".about-list");
aboutList.onclick = function () {
  navLinks.classList.toggle("show-about-list");
};

let servicesList = document.querySelector(".services-list");
servicesList.onclick = function () {
  navLinks.classList.toggle("show-services-list");
};

let links = document.querySelectorAll(".links li");
links.forEach((link) => {
  const a = link.querySelector("a");
  const arrow = link.querySelector("i.arrow");
  link.addEventListener("mouseover", (event) => {
    a.classList.add("hover");
    if (arrow) {
      arrow.classList.add("hover");
    }
  });

  link.addEventListener("mouseout", (event) => {
    a.classList.remove("hover");
    if (arrow) {
      arrow.classList.remove("hover");
    }
  });
});

// Have the navbar disappear and reappear when scrolling
const nav = document.querySelector("nav");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  if (lastScrollY < window.scrollY) {
    // Going down
    nav.classList.add("navbar--hidden");
  } else {
    // Going up
    nav.classList.remove("navbar--hidden");
  }

  lastScrollY = window.scrollY;
});

function showMenu() {
  navLinks.style.left = "0px";
  navLinks.setAttribute("aria-hidden", "false");
}

function hideMenu() {
  navLinks.style.left = "-100%";
  navLinks.setAttribute("aria-hidden", "true");
}

// Show the sidemenu when focused
document.querySelectorAll(".nav-links a, .nav-links button").forEach(element => {
  element.addEventListener("focus", showMenu);
});

document.querySelector(".nav-links").addEventListener("focusout", hideMenu);