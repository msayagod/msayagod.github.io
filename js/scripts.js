function nextPage(currentPageId, nextPageId) {
    // Obtener las páginas actual y siguiente
    let currentPage = document.getElementById(currentPageId);
    let nextPage = document.getElementById(nextPageId);

    // Ocultar la página actual y mostrar la siguiente
    currentPage.style.display = 'none';
    nextPage.style.display = 'block';
}




