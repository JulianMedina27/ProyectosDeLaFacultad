let sliderInner = document.querySelector(".slider-interior");

let images = sliderInner.querySelectorAll("img");

let index = 0;

// Configura el carrusel automático
function nextSlide() {
    index = (index + 1) % images.length; // Cicla a través de las imágenes
    updateSlide();
}

// Función para actualizar la diapositiva y el botón activo
function updateSlide() {
    let percentage = index * -100;
    sliderInner.style.transform = `translateX(${percentage}%)`;
    
    // Actualiza el botón activo
    document.querySelectorAll(".slider-nav button").forEach((btn, i) => {
        btn.classList.toggle("active", i === index);
    });
}

// Cambia a una diapositiva específica al hacer clic en el botón de navegación
function selectSlide(slideIndex) {
    index = slideIndex;
    updateSlide();
}

// Configura el intervalo de auto-desplazamiento
let interval = setInterval(nextSlide, 3000);