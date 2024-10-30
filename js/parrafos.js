// Toggle Menu Functionality
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Logo Hover Effect with JS Animation
const logo = document.querySelector('.logo img');
logo.addEventListener('mouseover', () => {
    logo.style.transform = 'rotate(360deg)';
    logo.style.transition = 'transform 1s ease-in-out';
});

logo.addEventListener('mouseout', () => {
    logo.style.transform = 'rotate(0deg)';
});

// Scroll to Top Button
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerText = '⬆️';
scrollTopBtn.style.position = 'fixed';
scrollTopBtn.style.bottom = '20px';
scrollTopBtn.style.right = '20px';
scrollTopBtn.style.backgroundColor = '#f39c12';
scrollTopBtn.style.color = '#fff';
scrollTopBtn.style.border = 'none';
scrollTopBtn.style.borderRadius = '50%';
scrollTopBtn.style.padding = '10px';
scrollTopBtn.style.fontSize = '24px';
scrollTopBtn.style.cursor = 'pointer';
scrollTopBtn.style.display = 'none';
document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.style.display = 'block';
    } else {
        scrollTopBtn.style.display = 'none';
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

