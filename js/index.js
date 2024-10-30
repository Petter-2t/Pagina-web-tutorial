// Función para alternar el menú en móviles
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('open');
    document.querySelector('.burger').classList.toggle('toggle');
}

// Cambiar estilo al hacer scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 50);
});

// Efecto de fade-in en las secciones al hacer scroll
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0.5, // La sección aparece cuando el 50% de su contenido es visible
    rootMargin: '0px 0px -50px 0px'
};

const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('visible');
            appearOnScroll.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});
