document.addEventListener('DOMContentLoaded', () => {
    // Select all the slides and navigation dots from the HTML
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.dot');

    // Keep track of the current active slide, starting at the first one (index 0)
    let currentSlideIndex = 0;

    // Define the delay for auto-sliding in milliseconds (5000ms = 5 seconds)
    const autoSlideDelay = 5000;
    // Variable to hold the interval ID for auto-sliding, so we can stop it later
    let autoSlideInterval;

    /**
     * Shows a specific slide and updates the active navigation dot.
     * @param {number} index - The index of the slide to show.
     */
    function showSlide(index) {
        // First, hide all slides and deactivate all dots
        slides.forEach(slide => {
            slide.classList.remove('active'); // Remove 'active' class to hide the slide
        });
        dots.forEach(dot => {
            dot.classList.remove('active'); // Remove 'active' class from all dots
        });

        // Ensure the index loops back to the start if it goes out of bounds
        currentSlideIndex = (index + slides.length) % slides.length;

        // Show the selected slide and activate its corresponding dot
        slides[currentSlideIndex].classList.add('active'); // Add 'active' class to show the selected slide
        dots[currentSlideIndex].classList.add('active'); // Add 'active' class to the selected dot
    }

    /**
     * Starts the automatic slide show.
     */
    function startAutoSlide() {
        // Clear any existing auto-slide interval to prevent multiple intervals running simultaneously
        clearInterval(autoSlideInterval);
        // Set a new interval to change slides automatically
        autoSlideInterval = setInterval(() => {
            // Calculate the index of the next slide, looping back to 0 if it's the last slide
            const nextIndex = (currentSlideIndex + 1) % slides.length;
            showSlide(nextIndex); // Show the next slide
        }, autoSlideDelay);
    }

    /**
     * Stops the automatic slide show.
     */
    function stopAutoSlide() {
        clearInterval(autoSlideInterval); // Clear the interval to stop auto-sliding
    }

    // Add click event listeners to each navigation dot
    dots.forEach(dot => {
        dot.addEventListener('click', (event) => {
            // Get the slide number from the data-slide-to attribute (e.g., '1' for the first slide)
            // Convert it to a 0-based index for JavaScript array access
            const slideTo = parseInt(event.target.dataset.slideTo) - 1;
            showSlide(slideTo); // Show the clicked slide
            stopAutoSlide(); // Stop auto-slide when a dot is manually clicked
            startAutoSlide(); // Restart auto-slide after a short delay (optional, or remove if you want manual control after click)
            // If you want it to remain paused after manual click, remove the startAutoSlide() here
        });
    });

    // Get the main slider container element
    const sliderContainer = document.querySelector('.hero-slider-container');
    if (sliderContainer) {
        // Pause auto-sliding when the mouse enters the slider area
        sliderContainer.addEventListener('mouseenter', stopAutoSlide);
        // Resume auto-sliding when the mouse leaves the slider area
        sliderContainer.addEventListener('mouseleave', startAutoSlide);
    }

    // Initialize the slider by showing the first slide when the page loads
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


