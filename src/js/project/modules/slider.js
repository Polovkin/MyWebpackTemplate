const slides = document.querySelectorAll('.slider .slider__item');
let currentSlide = 1;
let slideInterval = setInterval(slideSwap, 5000);
const nextButton = document.querySelector('.slider__next')
const prevButton = document.querySelector('.slider__prev')

function slideSwap(direction = 'next') {
  slides[currentSlide].className = 'slider__item';
  if (direction === 'prev') {

    currentSlide = currentSlide === 0 ? (slides.length-1) : (currentSlide - 1) % slides.length;
  } else if (direction === 'next') {
    currentSlide = (currentSlide + 1) % slides.length;
  }
  slides[currentSlide].className = 'slider__item show';

}

nextButton.addEventListener('click', function () {
  slideSwap('next');
})
prevButton.addEventListener('click', function () {
  slideSwap('prev');
})
