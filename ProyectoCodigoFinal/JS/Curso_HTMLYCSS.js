document.getElementById("menu-hamburguesa").addEventListener("click", function() {
    var menu = document.getElementById("menu-horizontal");
    menu.classList.toggle("menu-abierto");
});

// Inicialización del contador
let contador_inscripcion = parseInt(localStorage.getItem("contenedor_HYC")) || 0;
const contenedor_contador = document.getElementById('contador');

// Función para actualizar el contador en pantalla
function setContador() {
    contenedor_contador.textContent = `Cursos en Carrito: ${contador_inscripcion}`;
}

// Inicializa el contador al cargar la página
setContador();

// Función para agregar curso al carrito
function agregarCurso() {
    contador_inscripcion++; // Incrementa el contador
    localStorage.setItem("contenedor_HYC", contador_inscripcion); // Guarda el nuevo contador en localStorage
    setContador(); // Actualiza el contador en la página
}

// Botón para inscribirse y agregar curso
const boton_inscribirse = document.getElementById('boton');
boton_inscribirse.addEventListener('click', agregarCurso);

// Modal - Manejo de la ventana emergente
let modal_container = document.getElementById('modal-container');
let close = document.getElementById('close');

// Mostrar el modal al hacer clic en el botón
boton_inscribirse.addEventListener('click', () => {
    modal_container.classList.add('show');
});

// Cerrar el modal al hacer clic en el botón de cerrar
close.addEventListener('click', () => {
    modal_container.classList.remove('show');
});
