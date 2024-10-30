// Menú desplegable
document.getElementById('btnmenu').addEventListener('click', () => {
    const navLinks = document.querySelector('.nav-links');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Efecto de desvanecimiento para la sección Hero
document.addEventListener('DOMContentLoaded', () => {
    const heroSection = document.querySelector('.hero');
    heroSection.classList.add('fade-in');
});