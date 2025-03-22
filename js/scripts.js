function nextPage(currentPageId, nextPageId) {
    // Obtener las páginas actual y siguiente
    let currentPage = document.getElementById(currentPageId);
    let nextPage = document.getElementById(nextPageId);

    // Aplicar el efecto de rotación a la página actual
    currentPage.style.transform = 'rotateY(-180deg)';

    // Esperar que termine la animación antes de cambiar la página
    setTimeout(function() {
        // Ocultar la página actual y mostrar la siguiente
        currentPage.style.display = 'none';
        nextPage.style.display = 'block';
        nextPage.style.transform = 'rotateY(0deg)';
    }, 1000); // Tiempo de la animación
}


