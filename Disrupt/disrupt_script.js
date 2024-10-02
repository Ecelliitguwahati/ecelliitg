// sidebar

const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const indicatorsContainer = document.querySelector('.indicators');

let currentIndex = 0;

// Create indicators dynamically based on number of slides
slides.forEach((_, index) => {
    const indicator = document.createElement('span');
    if (index === 0) indicator.classList.add('active');
    indicatorsContainer.appendChild(indicator);
});

const indicators = document.querySelectorAll('.indicators span');

function updateCarousel() {
    const carousel = document.querySelector('.carousel');
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Update active indicator
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentIndex);
    });
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
    updateCarousel();
    console.log("hello")
});

indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel();
    });
});

// doubts
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const toggleBtn = item.querySelector('.toggle-btn');
    const closeBtn = item.querySelector('.close-btn');
    const answer = item.querySelector('.faq-answer');

    toggleBtn.addEventListener('click', function () {
        answer.style.display = 'block';
        toggleBtn.style.display = 'none';
        closeBtn.style.display = 'inline-block'
    });

    closeBtn.addEventListener('click', function () {
        answer.style.display = 'none';
        toggleBtn.style.display = 'inline-block';
        closeBtn.style.display = 'none'
    });
});
