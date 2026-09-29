document.addEventListener('DOMContentLoaded', () => {
    // 1. Toggle Mobile Navigation Menu
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('show');
        });
    }

    // 2. Handle Contact Form Submission
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('شكرًا لتواصلك مع Alpha Robot! تم استلام رسالتك وسنرد عليك قريباً.');
            form.reset();
        });
    }
});