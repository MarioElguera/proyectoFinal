document.addEventListener("DOMContentLoaded", () => {
  const bandas = document.querySelectorAll(".seccion-musica__lista li");
  const body = document.body;

  // Detectar si el usuario está en un dispositivo táctil (móvil)
  const esMovil = "ontouchstart" in window || navigator.maxTouchPoints > 0;

  bandas.forEach((banda) => {
    if (esMovil) {
      // En móviles, cambiar fondo solo con 'click'
      banda.addEventListener("click", () => cambiarFondo(banda));
    } else {
      banda.addEventListener("mouseenter", () => cambiarFondo(banda));
      banda.addEventListener("mouseleave", resetearFondo);
    }
  });

  function cambiarFondo(banda) {
    const imagenFondo = banda.getAttribute("data-bg");
    if (imagenFondo) {
      body.style.background = `url('${imagenFondo}') center/cover no-repeat fixed`;
    }
  }

  function resetearFondo() {
    body.style.background = "#f5f5f5";
  }
});
