function activarMenu() {
  const menuToggle = document.querySelector(".encabezado__menu-toggle");
  const navMenu = document.querySelector(".encabezado__navegacion");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("show");
    });
  } else {
    console.error("No se encontraron los elementos del menú.");
  }
}

activarMenu();
