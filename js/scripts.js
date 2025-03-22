function nextPage(currentPageId, nextPageId) {
    // Obtener la página actual y la siguiente
    let currentPage = document.getElementById(currentPageId);
    let nextPage = document.getElementById(nextPageId);

    // Aplicar la animación de giro a la página actual
    currentPage.style.transform = 'rotateY(-180deg)';

    // Después de 1 segundo (la duración de la animación), ocultamos la página actual y mostramos la siguiente
    setTimeout(function() {
        currentPage.classList.add('hidden');  // Ocultar la página actual
        nextPage.classList.remove('hidden'); // Mostrar la siguiente página
        nextPage.style.transform = 'rotateY(0deg)';  // Ajustar la página siguiente para el efecto de rotación
    }, 1000); // Tiempo de espera antes de mostrar la siguiente página
}

