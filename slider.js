let slideIndex = 0;
const sliders = document.querySelectorAll('.slider-container');

sliders.forEach((sliderContainer, i) => {
    const slides = sliderContainer.querySelectorAll('.slider img');
    const totalSlides = slides.length;

    const showSlide = (index) => {
        if (index >= totalSlides) slideIndex = 0;
        if (index < 0) slideIndex = totalSlides - 1;

        const slider = sliderContainer.querySelector('.slider');
        slider.style.transform = `translateX(-${slideIndex * 100}%)`;
    };

    const moveSlide = (n) => {
        slideIndex += n;
        showSlide(slideIndex);
    };

    // Add click event listeners for buttons
    sliderContainer.querySelector('.prev').addEventListener('click', () => moveSlide(-1));
    sliderContainer.querySelector('.next').addEventListener('click', () => moveSlide(1));

    // Initialize the slider
    showSlide(slideIndex);
});
