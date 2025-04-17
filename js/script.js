// Simple form submission handler
document.getElementById('contact-form')?.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    this.reset();
});

// Newsletter subscription handler
document.querySelector('#newsletter form')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    alert(`Thank you for subscribing with ${email}!`);
    this.reset();
});

// Image gallery interaction
document.querySelectorAll('.gallery-item img')?.forEach(img => {
    img.addEventListener('click', function () {
        // In a real implementation, this would open a lightbox
        alert(`Viewing: ${this.nextElementSibling.textContent}`);
    });
});