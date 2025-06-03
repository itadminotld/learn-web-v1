document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            // Simulate a form submission
            document.getElementById('formStatus').textContent = 'Thank you for reaching out! We will contact you soon.';
            form.reset();
        });
    }
});