function incluirHTML() {
  document.querySelectorAll("[data-include]").forEach((el) => {
    console.log(el)
    fetch(el.getAttribute("data-include"))
      .then((response) => response.text())
      .then((data) => {
        el.innerHTML = data;

        // ⚠️ Si es el header, asegurarse de ejecutar su script
        if (el.getAttribute("data-include").includes("header.html")) {
          const script = document.createElement("script");
          script.src = "js/header.js";
          script.defer = true;
          script.onload = () =>
            console.log("✅ header.js cargado correctamente.");
          document.head.appendChild(script);
        }
      })
      .catch((error) => console.error("Error cargando el archivo:", error));
  });
}

document.addEventListener("DOMContentLoaded", incluirHTML);

// Slider banner - página principal ========================================================================================
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
  clearInterval(intervaloSlider);
  intervaloSlider = setInterval(mostrarSiguienteSlide, 2000);
}

// Función para reiniciar el slider automático después de interacción
function reiniciarAutoSlider() {
  clearInterval(intervaloSlider);
  clearTimeout(timeoutReinicio);
  timeoutReinicio = setTimeout(iniciarAutoSlider, 3000);
}

// Ajustar altura en PC y móviles correctamente
function ajustarAlturaSlider() {
  const banner = document.querySelector(".banner");
  const images = document.querySelectorAll(".banner__imagen");

  if (!banner) return;

  let altura;
  if (window.innerWidth > 768) {
    altura = 350;
  } else {
    altura = window.innerHeight * 0.4;
  }

  banner.style.height = `${altura}px`;

  images.forEach((img) => {
    img.style.height = `${altura}px`;
  });
}

// Ejecutar cuando la página cargue completamente y en cambios de tamaño
window.addEventListener("load", ajustarAlturaSlider);
window.addEventListener("resize", ajustarAlturaSlider);
document.addEventListener("DOMContentLoaded", ajustarAlturaSlider);

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
    const windowHeight = window.innerHeight;
    const scrollTop = window.scrollY;

    testimonios.forEach(function (testimonio) {
      const testimonioTop = testimonio.getBoundingClientRect().top + scrollTop;
      const testimonioBottom = testimonioTop + testimonio.offsetHeight;

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
  mostrarTestimonios();
});
