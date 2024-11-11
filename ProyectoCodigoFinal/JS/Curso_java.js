document.getElementById("menu-hamburguesa").addEventListener("click", function() {
    var menu = document.getElementById("menu-horizontal");
    menu.classList.toggle("menu-abierto");
});

const boton_inscribirse = document.getElementById('boton');
const contenedor_contador = document.getElementById('contador');

let contador_inscripcion = localStorage.getItem("contenedor_java");

function setContador()
{
    contenedor_contador.textContent = `Cursos en Carrito: ${contador_inscripcion}`;
}

setContador();
function agregarCurso()
{
    contador_inscripcion ++;
    localStorage.setItem("contenedor_java",contador_inscripcion);
    contenedor_contador.textContent = `Cursos en Carrito: ${contador_inscripcion}`;
}

boton_inscribirse.addEventListener('click', agregarCurso);

// Selecciona el elementos del popup
let titulo_texto = document.getElementById('titulo-popup');
const modal_container = document.getElementById('modal-container');
const close = document.getElementById('close');
const vinculo = document.getElementById('vinculo');


// A todos los botones se les agrega el evento click

    boton_inscribirse.addEventListener('click', () => {
        modal_container.classList.add('show');
    });

// Cierra el modal cuando se hace clic en el botón de cerrar
close.addEventListener('click', () => {
    modal_container.classList.remove('show');
});

