document.addEventListener("DOMContentLoaded", () => {
    const categorias = document.querySelectorAll(".categoria");
    const articulosPorCategoria = document.querySelectorAll(".articulos");

    categorias.forEach((categoria) => {
        categoria.addEventListener("click", () => {
            // Ocultar todos los bloques de artículos
            articulosPorCategoria.forEach((articulos) => {
                articulos.style.display = "none";
            });

            // Mostrar los artículos de la categoría seleccionada
            const categoriaSeleccionada = categoria.getAttribute("data-categoria");
            const articulosSeleccionados = document.querySelector(`.articulos[data-categoria="${categoriaSeleccionada}"]`);
            if (articulosSeleccionados) {
                articulosSeleccionados.style.display = "flex";
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const modalTitulo = document.getElementById("modal-titulo");
    const modalDescripcion = document.getElementById("modal-descripcion");
    const closeBtn = document.querySelector(".close");
    const articulos = document.querySelectorAll(".articulo");

    // Abrir modal al hacer clic en un artículo
    articulos.forEach((articulo) => {
        articulo.addEventListener("click", () => {
            const titulo = articulo.getAttribute("data-titulo");
            const descripcionLarga = articulo.getAttribute("data-descripcion-larga");
            const imgSrc = articulo.querySelector("img").src;

            modalTitulo.textContent = titulo;
            modalDescripcion.textContent = descripcionLarga;
            modalImg.src = imgSrc;

            modal.style.display = "flex"; // Mostrar modal
        });
    });

    // Cerrar modal al hacer clic en el botón "close"
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Cerrar modal al hacer clic fuera del contenido
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});
