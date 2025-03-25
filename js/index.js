document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = this.href;

        // Add wrapper animation
        document.querySelector('.wrapper').classList.add('wrapper-exit');

        // Rest of existing animations
        document.querySelector('.container').classList.add('contract-line');
        document.querySelector('.container').classList.add('mobile-width');
        document.querySelector('nav').classList.add('nav-exit');
        document.querySelector('.left-box').classList.add('left-exit');
        document.querySelector('.right-box').classList.add('right-exit');
        document.querySelector('.background').classList.add('background-exit');
        document.querySelector('.footer').classList.add('footer-exit');
        

        setTimeout(() => {
            window.location.href = target;
        }, 1000);
    });
});
// Add this JavaScript to handle toggle functionality
document.addEventListener('DOMContentLoaded', () => {
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('ul');

// Toggle menu
hamburger.addEventListener('click', () => {
hamburger.classList.toggle('active');
nav.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
    hamburger.classList.remove('active');
    nav.classList.remove('active');
}
});

// Close menu after clicking a link
document.querySelectorAll('nav a').forEach(link => {
link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    nav.classList.remove('active');
});
});
});
