// Seleccionar el botón de toggle y el menú de navegación
const menuToggle = document.querySelector(".encabezado__menu-toggle");
const navMenu = document.querySelector(".encabezado__navegacion");

// Agregar un evento al botón de toggle
menuToggle.addEventListener("click", () => {
  // Alternar la clase "show" en el menú de navegación
  navMenu.classList.toggle("show");
});

// Slider banner - página principal ========================================================================================
// Seleccionar elementos necesarios
const slider = document.querySelector(".banner__deslizador");
const images = document.querySelectorAll(".banner__imagen");
const prevButton = document.querySelector(".banner__control--anterior");
const nextButton = document.querySelector(".banner__control--siguiente");
const banner = document.querySelector(".banner");

let currentIndex = 0;
const totalImages = images.length;
let intervaloSlider;
let timeoutReinicio;

// Mostrar solo cuando las imágenes estén listas
function esperarCargaDeImagenes() {
  let imagenesCargadas = 0;

  images.forEach((img) => {
    img.onload = () => {
      imagenesCargadas++;
      img.classList.add("cargada");

      if (imagenesCargadas === totalImages) {
        banner.style.minHeight = "auto";
        iniciarAutoSlider();
        actualizarPosicionSlider();
        ajustarAlturaSlider();
      }
    };

    if (img.complete) {
      img.onload();
    }
  });
}

// Función para actualizar la posición del slider
function actualizarPosicionSlider() {
  const offset = -currentIndex * 100;
  slider.style.transform = `translateX(${offset}%)`;
}

// Función para mover al siguiente slide
function mostrarSiguienteSlide() {
  currentIndex = (currentIndex + 1) % totalImages;
  actualizarPosicionSlider();
  reiniciarAutoSlider();
}

// Función para mover al slide anterior
function mostrarSlideAnterior() {
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  actualizarPosicionSlider();
  reiniciarAutoSlider();
}

// Función para iniciar el slider automático
function iniciarAutoSlider() {
  clearInterval(intervaloSlider); // Evita múltiples intervalos
  intervaloSlider = setInterval(mostrarSiguienteSlide, 2000);
}

// Función para reiniciar el slider automático después de interacción
function reiniciarAutoSlider() {
  clearInterval(intervaloSlider); // Detiene el slider temporalmente
  clearTimeout(timeoutReinicio); // Elimina cualquier reinicio anterior
  timeoutReinicio = setTimeout(iniciarAutoSlider, 3000); // Reinicia después de 5s
}

// Ajustar altura en PC y móviles correctamente
function ajustarAlturaSlider() {
  const banner = document.querySelector(".banner");
  const images = document.querySelectorAll(".banner__imagen");

  if (window.innerWidth > 768) {
    banner.style.maxHeight = "500px"; // En PC, máximo 500px
  } else {
    banner.style.maxHeight = "70vh"; // En móviles, ajusta al 70% de la pantalla
  }

  images.forEach((img) => {
    img.style.height = banner.clientHeight + "px";
  });
}

// Ajustar altura al cargar y al cambiar el tamaño

// Event Listeners para botones
nextButton.addEventListener("click", mostrarSiguienteSlide);
prevButton.addEventListener("click", mostrarSlideAnterior);
window.addEventListener("resize", ajustarAlturaSlider);
document.addEventListener("DOMContentLoaded", ajustarAlturaSlider);

// Iniciar la verificación de carga de imágenes
document.addEventListener("DOMContentLoaded", () => {
  esperarCargaDeImagenes();
});

// Testimonios - página principal ========================================================================================
document.addEventListener("DOMContentLoaded", function () {
  const testimonios = document.querySelectorAll(".testimonios__item");

  function mostrarTestimonios() {
    const windowHeight = window.innerHeight; // Altura de la ventana
    const scrollTop = window.scrollY; // Posición actual del scroll

    testimonios.forEach(function (testimonio) {
      const testimonioTop = testimonio.getBoundingClientRect().top + scrollTop; // Distancia desde el top del documento
      const testimonioBottom = testimonioTop + testimonio.offsetHeight; // La parte inferior del testimonio

      // Si el testimonio está visible en la pantalla
      if (
        testimonioBottom > scrollTop &&
        testimonioTop < scrollTop + windowHeight
      ) {
        testimonio.classList.add("visible");
      } else {
        testimonio.classList.remove("visible");
      }
    });
  }

  // Llamar a la función cada vez que se haga scroll
  window.addEventListener("scroll", mostrarTestimonios);

  // También llamar la función al cargar la página para que los testimonios visibles al principio ya se animen
  mostrarTestimonios();
});
