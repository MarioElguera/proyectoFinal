document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.querySelector(".contacto__formulario");
  const modal = document.getElementById("modalConfirmacion");
  const cerrarModal = document.getElementById("cerrarModal");

  formulario.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita la recarga de la página

    // Asegurar que el modal se muestre en pantalla
    modal.style.display = "flex";

    // Limpiar el formulario después del envío
    formulario.reset();
  });

  // Cerrar el modal cuando se hace clic en el botón "Cerrar"
  cerrarModal.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // Cerrar el modal si el usuario hace clic fuera del contenido del modal
  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
