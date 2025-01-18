document.addEventListener("DOMContentLoaded", () => {
  const categorias = document.querySelectorAll(".categorias__item");
  const articulosPorCategoria = document.querySelectorAll(".articulos__lista");
  const textInformativo = document.getElementById("articulos__mensaje");

  categorias.forEach((categoria) => {
    categoria.addEventListener("click", () => {
      articulosPorCategoria.forEach((articulos) => {
        articulos.style.display = "none";
        textInformativo.style.display = "none";
      });

      // Mostrar los artículos de la categoría seleccionada
      const categoriaSeleccionada = categoria.getAttribute("data-categoria");
      const articulosSeleccionados = document.querySelector(
        `.articulos__lista[data-categoria="${categoriaSeleccionada}"]`
      );
      if (articulosSeleccionados) {
        articulosSeleccionados.style.display = "flex";
      }
    });
  });

  //Modal
  const modal = document.getElementById("modal");
  const modalContent = modal.querySelector(".modal__contenido");
  const modalImg = document.getElementById("modal__imagen");
  const modalTitulo = document.getElementById("modal__titulo");
  const modalDescripcion = document.getElementById("modal__descripcion");
  const closeBtn = modal.querySelector(".modal__cerrar");
  const articulos = document.querySelectorAll(".articulos__item");

  articulos.forEach((articulo) => {
    articulo.addEventListener("click", () => {
      const titulo = articulo.getAttribute("data-titulo");
      const descripcionLarga = articulo.getAttribute("data-descripcion-larga");
      const imgSrc = articulo.querySelector("img").src;

      modalTitulo.textContent = titulo;
      modalDescripcion.textContent = descripcionLarga;
      modalImg.src = imgSrc;

      modal.style.display = "flex";

      modalContent.scrollTop = 0;
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
