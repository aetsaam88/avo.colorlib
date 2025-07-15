document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.dot');

    let currentSlideIndex = 0;

    const autoSlideDelay = 5000;
    let autoSlideInterval;

 
    function showSlide(index) {
        slides.forEach(slide => {
        dots.forEach(dot => {
            dot.classList.remove('active'); 

        currentSlideIndex = (index + slides.length) % slides.length;

        slides[currentSlideIndex].classList.add('active'); 
        dots[currentSlideIndex].classList.add('active'); 
    }

   
    function startAutoSlide() {
        
        clearInterval(autoSlideInterval);
        autoSlideInterval = setInterval(() => {
            const nextIndex = (currentSlideIndex + 1) % slides.length;
            showSlide(nextIndex); // Show the next slide
        }, autoSlideDelay);
    }

   
    function stopAutoSlide() {
        clearInterval(autoSlideInterval); // Clear the interval to stop auto-sliding
    }

    dots.forEach(dot => {
        dot.addEventListener('click', (event) => {
            
            const slideTo = parseInt(event.target.dataset.slideTo) - 1;
            showSlide(slideTo); // Show the clicked slide
            stopAutoSlide();
            startAutoSlide(); 
        });
    });

    const sliderContainer = document.querySelector('.hero-slider-container');
    if (sliderContainer) {
        sliderContainer.addEventListener('mouseenter', stopAutoSlide);
        sliderContainer.addEventListener('mouseleave', startAutoSlide);
    }

    showSlide(currentSlideIndex);
    // Start auto-sliding immediately when the page loads
    startAutoSlide();
});




    document.addEventListener('DOMContentLoaded', function() {
        const menuToggle = document.getElementById('menuToggle');
        const naviBar = document.querySelector('.navi-bar'); // Select the navi-bar class

        if (menuToggle && naviBar) {
            menuToggle.addEventListener('click', function() {
                naviBar.classList.toggle('active'); // Toggle the 'active' class
            });
        }
    });


