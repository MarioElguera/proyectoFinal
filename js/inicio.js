// Seleccionar el botón de toggle y el menú de navegación
const menuToggle = document.querySelector('.encabezado__menu-toggle');
const navMenu = document.querySelector('.encabezado__navegacion');

// Agregar un evento al botón de toggle
menuToggle.addEventListener('click', () => {
    // Alternar la clase "show" en el menú de navegación
    navMenu.classList.toggle('show');
});


// Slider banner - página principal ========================================================================================

// Seleccionar elementos necesarios
const slider = document.querySelector('.banner__deslizador');
const images = document.querySelectorAll('.banner__imagen');
const prevButton = document.querySelector('.banner__control--anterior');
const nextButton = document.querySelector('.banner__control--siguiente');

let currentIndex = 0;
const totalImages = images.length;

// Función para actualizar la posición del slider
function actualizarPosicionSlider() {
    const offset = -currentIndex * 104; // Cada imagen ocupa el 100% del ancho
    slider.style.transform = `translateX(${offset}%)`;
}

// Función para mover al siguiente slide
function mostrarSiguienteSlide() {
    currentIndex = (currentIndex + 1) % totalImages; // Volver al inicio si es el último
    actualizarPosicionSlider();
}

// Función para mover al slide anterior
function mostrarSlideAnterior() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages; // Volver al final si es el primero
    actualizarPosicionSlider();
}

// Event Listeners para botones
nextButton.addEventListener('click', mostrarSiguienteSlide);
prevButton.addEventListener('click', mostrarSlideAnterior);

// Slider automático cada 5 segundos
setInterval(mostrarSiguienteSlide, 2000);


document.addEventListener('DOMContentLoaded', function () {
    const testimonios = document.querySelectorAll('.testimonios__item');

    function mostrarTestimonios() {
        const windowHeight = window.innerHeight; // Altura de la ventana
        const scrollTop = window.scrollY; // Posición actual del scroll

        testimonios.forEach(function (testimonio) {
            const testimonioTop = testimonio.getBoundingClientRect().top + scrollTop; // Distancia desde el top del documento
            const testimonioBottom = testimonioTop + testimonio.offsetHeight; // La parte inferior del testimonio

            // Si el testimonio está visible en la pantalla
            if (testimonioBottom > scrollTop && testimonioTop < scrollTop + windowHeight) {
                testimonio.classList.add('visible');
            } else {
                testimonio.classList.remove('visible');
            }
        });
    }

    // Llamar a la función cada vez que se haga scroll
    window.addEventListener('scroll', mostrarTestimonios);

    // También llamar la función al cargar la página para que los testimonios visibles al principio ya se animen
    mostrarTestimonios();
});
