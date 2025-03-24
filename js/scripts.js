document.addEventListener("DOMContentLoaded", function () {
    // Selecciona todas las páginas
    document.querySelectorAll(".page").forEach(page => {
        // Selecciona los botones dentro de la página
        let buttons = page.querySelectorAll(".next-btn");

        if (buttons.length > 0) {
            // Crea un contenedor para los botones
            let buttonContainer = document.createElement("div");
            buttonContainer.classList.add("button-container");

            // Mueve los botones dentro del contenedor
            buttons.forEach(btn => buttonContainer.appendChild(btn));

            // Agrega el contenedor al final de la página
            page.appendChild(buttonContainer);
        }
    });
});

function nextPage(currentPageId, nextPageId) {
    let currentPage = document.getElementById(currentPageId);
    let nextPage = document.getElementById(nextPageId);

    if (!currentPage || !nextPage) {
        console.error("Error: Una de las páginas no existe.");
        return;
    }

    // Agrega la animación de salida a la página actual
    currentPage.classList.add("slide-out");

    // Espera la animación antes de ocultar la página actual y mostrar la nueva
    setTimeout(() => {
        currentPage.style.display = "none"; // Oculta la página actual
        currentPage.classList.remove("slide-out"); // Restablece animación

        // Muestra la nueva página con animación de entrada
        nextPage.style.display = "flex";
        nextPage.classList.add("slide-in");

        // Elimina la clase después de la animación para futuras transiciones
        setTimeout(() => {
            nextPage.classList.remove("slide-in");
        }, 600);
    }, 600);
}

function restartStory() {
    document.querySelectorAll(".page").forEach(page => page.style.display = "none");
    document.querySelector(".page:first-of-type").style.display = "flex";
}

function startStory(url) {
    window.location.href = url;
}




