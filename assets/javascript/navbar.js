let navbar = document.querySelector(".navbar");

// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function () {
  if (navLinks.style.left === "0px") {
    navLinks.style.left = "-100%";
  } else {
    navLinks.style.left = "0px";
  }
};
menuCloseBtn.onclick = function () {
  navLinks.style.left = "-100%";
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