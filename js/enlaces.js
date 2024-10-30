// Función para alternar el menú en dispositivos móviles
function toggleMenu() {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('active');
}

// Mostrar animación suave al hacer hover
document.querySelectorAll('.enlace-box').forEach(box => {
    box.addEventListener('mouseover', () => {
        box.style.transform = 'translateY(-10px)';
    });
    box.addEventListener('mouseleave', () => {
        box.style.transform = 'translateY(0)';
    });
});
