// Seleccionar el botón de toggle y el menú de navegación
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('header nav');

// Agregar un evento al botón de toggle
menuToggle.addEventListener('click', () => {
    // Alternar la clase "show" en el menú de navegación
    navMenu.classList.toggle('show');
});


// Slider banner - pagina principal ========================================================================================

// Seleccionar elementos necesarios
const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.slider img');
const prevButton = document.querySelector('.slider-controls .prev');
const nextButton = document.querySelector('.slider-controls .next');

let currentIndex = 0;
const totalImages = images.length;

// Función para actualizar la posición del slider
function updateSliderPosition() {
    const offset = -currentIndex * 104; // Cada imagen ocupa el 100% del ancho
    slider.style.transform = `translateX(${offset}%)`;
}

// Función para mover al siguiente slide
function showNextSlide() {
    currentIndex = (currentIndex + 1) % totalImages; // Volver al inicio si es el último
    updateSliderPosition();
}

// Función para mover al slide anterior
function showPrevSlide() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages; // Volver al final si es el primero
    updateSliderPosition();
}

// Event Listeners para botones
nextButton.addEventListener('click', showNextSlide);
prevButton.addEventListener('click', showPrevSlide);

// Slider automático cada 5 segundos
setInterval(showNextSlide, 2000);


document.addEventListener('DOMContentLoaded', function () {
    const testimonios = document.querySelectorAll('.testimonios .galeria-testimonios article');

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