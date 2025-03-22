function nextPage(currentPageId, nextPageId) {
    // Ocultar la página actual
    let currentPage = document.getElementById(currentPageId);
    currentPage.style.transform = 'rotateY(-180deg)';  // Giro para el efecto de pasar página
    
    // Esperar el final de la animación antes de mostrar la siguiente página
    setTimeout(function() {
        currentPage.style.display = 'none'; // Ocultar la página actual
        let nextPage = document.getElementById(nextPageId);
        nextPage.style.display = 'block'; // Mostrar la siguiente página
        nextPage.style.transform = 'rotateY(0deg)';  // Ajustar la página siguiente para el efecto de "página" visible
    }, 1000); // Tiempo de animación
}
