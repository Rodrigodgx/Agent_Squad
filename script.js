document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');

    menuToggle.addEventListener('click', function() {
        navList.classList.toggle('open');
    });

    // Fechar menu ao clicar em um link (opcional)
    const navLinks = document.querySelectorAll('.nav-list a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navList.classList.contains('open')) {
                navList.classList.remove('open');
            }
        });
    });

   // Carousel Testimonials
    const carousel = document.querySelector('.testimonial-carousel');

    if (carousel) { // Check if the element exists to avoid errors
        let scrollPosition = 0;

        function autoScroll() {
            scrollPosition += carousel.offsetWidth; // Scroll by the width of the carousel
            if (scrollPosition >= carousel.scrollWidth) {
                scrollPosition = 0; // Reset to start
            }
            carousel.scrollTo({
                left: scrollPosition,
                behavior: 'smooth' // Add smooth scrolling effect
            });
        }

        let intervalId = setInterval(autoScroll, 5000); // Scroll every 5 seconds

        // Pause on hover (optional)
        carousel.addEventListener('mouseenter', () => clearInterval(intervalId));
        carousel.addEventListener('mouseleave', () => intervalId = setInterval(autoScroll, 5000));
    }

});