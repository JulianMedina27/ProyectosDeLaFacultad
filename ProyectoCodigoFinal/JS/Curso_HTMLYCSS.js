document.addEventListener('DOMContentLoaded', function () {
    // Menú hamburguesa
    const menuHamburguesa = document.getElementById("menu-hamburguesa");
    const menuHorizontal = document.getElementById("menu-horizontal");

    if (menuHamburguesa && menuHorizontal) {
        menuHamburguesa.addEventListener("click", function() {
            menuHorizontal.classList.toggle("menu-abierto");
        });
    }

    // Variables para el contador y el botón de inscribirse
    const botonInscribirse = document.getElementById('boton');
    const contenedorContador = document.getElementById('contador');

    // Obtener el contador desde localStorage
    let contadorInscripcion = parseInt(localStorage.getItem("contenedor_HYC")) || 0;

    // Función para actualizar el contador de cursos en el carrito
    function setContador() {
        contenedorContador.textContent = `Cursos en Carrito: ${contadorInscripcion}`;
    }

    // Inicializar el contador
    setContador();

    // Función para agregar un curso al carrito
    function agregarCurso() {
        contadorInscripcion++;
        localStorage.setItem("contenedor_HYC", contadorInscripcion);
        setContador();
    }

    // Agregar evento de click al botón de inscribirse
    if (botonInscribirse) {
        botonInscribirse.addEventListener('click', agregarCurso);
    }

    // Modal para mostrar información
    const modalContainer = document.getElementById('modal-container');
    const close = document.getElementById('close');
    const vinculo = document.getElementById('vinculo');
    const tituloTexto = document.getElementById('titulo-popup');

    // Mostrar el modal cuando se hace clic en el botón de inscribirse
    if (botonInscribirse && modalContainer) {
        botonInscribirse.addEventListener('click', () => {
            modalContainer.classList.add('show');
        });
    }

    // Cerrar el modal cuando se hace clic en el botón de cerrar
    if (close && modalContainer) {
        close.addEventListener('click', () => {
            modalContainer.classList.remove('show');
        });
    }
});
