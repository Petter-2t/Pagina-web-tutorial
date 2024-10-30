// Espera a que el documento esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
    // Selecciona todos los elementos de lista que tienen sublistas
    const nestedItems = document.querySelectorAll('.custom-nested-ul > li');

    nestedItems.forEach(item => {
        const subList = item.querySelector('ul');

        // Si hay una sublista, añade un evento de clic
        if (subList) {
            item.style.cursor = 'pointer'; // Cambia el cursor al pasar sobre el elemento
            subList.style.display = 'none'; // Oculta la sublista inicialmente

            item.addEventListener('click', function () {
                const isVisible = subList.style.display === 'block';
                subList.style.display = isVisible ? 'none' : 'block'; // Muestra o oculta la sublista
            });
        }
    });
});
