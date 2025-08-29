// Simple script for navbar background change on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.custom-navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// You can add more cafe-specific interactivity here later
// e.g., menu filtering for the JavaScript demo page, an order form, etc.
console.log("Welcome to Aurora Brews! Website loaded successfully.");