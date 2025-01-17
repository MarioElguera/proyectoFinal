document.addEventListener("DOMContentLoaded", () => {
  const bandas = document.querySelectorAll(".seccion-musica__lista li");
  const body = document.body;

  bandas.forEach((banda) => {
    banda.addEventListener("mouseenter", () => {
      const imagenFondo = banda.getAttribute("data-bg");
      body.style.background = `url('${imagenFondo}') center/cover no-repeat fixed`;
    });

    banda.addEventListener("mouseleave", () => {
      body.style.background = "#f5f5f5"; // Vuelve al fondo original
    });
  });
});
