document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.querySelector(".contacto__formulario");
  const modal = document.getElementById("modalConfirmacion");
  const cerrarModal = document.getElementById("cerrarModal");

  formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    modal.style.display = "flex";

    formulario.reset();
  });

  cerrarModal.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
