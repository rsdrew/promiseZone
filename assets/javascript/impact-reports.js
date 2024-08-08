const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const carouselWrapper = document.querySelector('.carousel-wrapper');
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;
let currentIndex = 0;

function updateCarousel() {
    const offset = -currentIndex * 100;
    carouselWrapper.style.transform = `translateX(${offset}%)`;
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalItems - 1;
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex < totalItems - 1) ? currentIndex + 1 : 0;
    updateCarousel();
});