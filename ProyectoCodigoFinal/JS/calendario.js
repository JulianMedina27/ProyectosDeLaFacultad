

// Selecciona el elementos del popup
let titulo_texto = document.getElementById('titulo-popup');
const modal_container = document.getElementById('modal-container');
const close = document.getElementById('close');
const vinculo = document.getElementById('vinculo');

// Selecciona todos los botones del calendario
const botones = document.getElementsByName('boton-accion');

// A todos los botones se les agrega el evento click
botones.forEach(boton => {
    boton.addEventListener('click', () => {
        // Verifica el texto del botón y ajusta el título del popup
        if (boton.innerText === "Inscripcion Cursos HTML y CSS" || boton.innerText === "Insc. Cursos HTML y CSS") {
            titulo_texto.innerText = "Cursos HTML y CSS";
            vinculo.href = "./CursoHTMLyCSS.html";
        } else if (boton.innerText === "Inscripcion Cursos Java" || boton.innerText === "Insc. Cursos Java") {
            titulo_texto.innerText = "Cursos JAVA";
            vinculo.href = "./CursoJava.html";
        } else if (boton.innerText === "Inscripcion Cursos Python" || boton.innerText === "Insc. Cursos Python") {
            titulo_texto.innerText = "Cursos PYTHON";
            vinculo.href = "./CursoPhyton.html";
        }
        
        // Muestra el modal
        modal_container.classList.add('show');
    });
});
// Cierra el modal cuando se hace clic en el botón de cerrar
close.addEventListener('click', () => {
    modal_container.classList.remove('show');
});

//Menu hamburguesa despliegue
 document.getElementById("menu-hamburguesa").addEventListener("click", function() {
    var menu = document.getElementById("menu-horizontal");
    menu.classList.toggle("menu-abierto");
});

