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
