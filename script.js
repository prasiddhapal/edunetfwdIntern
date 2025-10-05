// Smooth scrolling for navbar links
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Optional: Add subtle glow animation to home section
const homeContent = document.querySelector('.home-content');
setInterval(() => {
    homeContent.style.textShadow = `0 0 10px #00FF00, 0 0 20px #FF00FF`;
    setTimeout(() => {
        homeContent.style.textShadow = 'none';
    }, 1000);
}, 3000);
