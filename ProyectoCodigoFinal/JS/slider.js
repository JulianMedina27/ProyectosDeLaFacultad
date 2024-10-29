// Se crea un array con las imagenes y los links 
let imagenes = [
    {
        "url": "img/java.jpg",
        "link": "Paginas/CursoJava.html"
    },
    {
        "url": "img/curso-python-imagen.png",
        "link": "Paginas/CursoPhyton.html"
    },
    {
        "url": "img/cursohtmlycss.jpg",
        "link": "Paginas/CursoHTMLyCSS.html"
    },
];

//Selecciona a las flechas de atras y adelante, los puntos y al contenedor de imagenes
let atras = document.getElementById('atras');
let adelante = document.getElementById('adelante');
let contenedorImagenes = document.getElementById('imagenes');
let puntos = document.getElementById('puntos');
let actual = 0;         // Variable para almacenar la imagen actual mostrada

// Mostrar la primera imagen al cargar la pagina
actualizarImagen();
posicionCarrusel();

// Cambia la imagen por la anterior
atras.addEventListener('click', function(){
    actual -= 1;
    if (actual == -1) {
        actual = imagenes.length - 1;
    }
    actualizarImagen();
    posicionCarrusel();
});

// Cambia la imagen por la siguiente
adelante.addEventListener('click', function(){
    actual += 1;
    if (actual == imagenes.length) {
        actual = 0;
    }
    actualizarImagen();
    posicionCarrusel();
});

// Muestra la imagen actual
function actualizarImagen() {
    contenedorImagenes.innerHTML = `
        <a href="${imagenes[actual].link}" target="_blank">
            <img class="img" src="${imagenes[actual].url}" alt="imagen ${actual + 1}" loading="lazy">
        </a>`;
}

// Marca al usuario en que posicion se encuentra haciendo que uno de los puntos pase a tener estilo bold
function posicionCarrusel() {
    puntos.innerHTML = "";
    for (let i = 0; i < imagenes.length; i++) {
        if (i === actual) {
            puntos.innerHTML += '<p class="bold">.</p>';
        } else {
            puntos.innerHTML += '<p>.</p>';
        }
    }
}