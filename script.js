// Alpha Robot - Interactivity Script

document.addEventListener('DOMContentLoaded', () => {
    // 1. Highlight Active Nav Link
    const currentLocation = location.pathname.split('/').pop();
    const menuItems = document.querySelectorAll('.nav-links a');
    
    menuItems.forEach(item => {
        if(item.getAttribute('href') === currentLocation) {
            item.classList.add('active');
        }
    });

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