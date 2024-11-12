document.getElementById("menu-hamburguesa").addEventListener("click", function() {
    var menu = document.getElementById("menu-horizontal");
    menu.classList.toggle("menu-abierto");
});

// Selección de los elementos de la giftcard
const colorOpciones = document.querySelectorAll('input[name="color"]');
const destinatarioTexto = document.querySelector('.frame-destinario');
const destinatarioInput = document.querySelector('.destinario-input');
const fuenteOpciones = document.querySelectorAll('input[name="fuente"]');
const montoInput = document.querySelector('.monto-input');
const montoTexto = document.getElementById('monto-giftcard');
const ubicacionInput = document.querySelectorAll('input[name="ubi"]');
const fondoNegro = document.querySelector('.fondo-negro');
const textoSpan = fondoNegro.querySelector('.texto');
const fondos = document.getElementsByName("fondo");
let frame = document.getElementById("frame");

// Agrega un evento de cambio por cada color que haya
colorOpciones.forEach(opcion => {
    opcion.addEventListener('change', () => {
        const selectedColor = opcion.getAttribute('data-color');
        destinatarioTexto.style.color = selectedColor;
    });
});

// Cambio del nombre del destinatario
destinatarioInput.addEventListener('input', () => {
    destinatarioTexto.textContent = destinatarioInput.value;
});

// Cambio del tamaño de la fuente
fuenteOpciones.forEach(opcion => {
    opcion.addEventListener('change', () => {
        const seleccionTamañoFuente = opcion.getAttribute('data-fuente');
        destinatarioTexto.style.fontSize = seleccionTamañoFuente;
    })
});

// Cambia el monto del fondo negro por el que se escriba en el input de monto
montoInput.addEventListener('input', () => {
    montoTexto.textContent = `$${montoInput.value}-`;
});

// Cambia de posición el fondo negro según el input que se elija
ubicacionInput.forEach(input => {
    input.addEventListener('change', (event) => {
        fondoNegro.style.top = '';
        fondoNegro.style.right = '';
        fondoNegro.style.left = '';
        fondoNegro.style.bottom = '';

        switch (event.target.id) {
            case 'ubicacion1':
                fondoNegro.style.bottom = '0';
                fondoNegro.style.left = '0';
                break;
            case 'ubicacion2':
                fondoNegro.style.bottom = '0';
                fondoNegro.style.right = '0';
                break;
            case 'ubicacion3':
                fondoNegro.style.top = '0';
                fondoNegro.style.left = '0';
                break;
            case 'ubicacion4':
                fondoNegro.style.top = '0';
                fondoNegro.style.right = '0';
                break;
        }

        textoSpan.style.top = '50%';
        textoSpan.style.transform = 'translateY(-50%)';
    });
});

fondos.forEach(fondo => {
    fondo.addEventListener('change', cambiarFondos);
});

// Función que cambia los fondos según la selección
function cambiarFondos() {
    let opcionSeleccionada = "";

    for (let fondo of fondos) {
        if (fondo.checked) {
            opcionSeleccionada = fondo.id;
            break;
        }
    }

    if(opcionSeleccionada == "fondo1") {
        frame.style.backgroundColor = "gray";
    } else if(opcionSeleccionada == "fondo2") {
        frame.style.backgroundColor = "red";
    } else if(opcionSeleccionada == "fondo3") {
        frame.style.backgroundColor = "blue";
    } else if(opcionSeleccionada == "fondo4") {
        frame.style.backgroundColor = "green";
    } else if(opcionSeleccionada == "fondo5") {
        frame.style.backgroundColor = "violet";
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const agregarAlCarritoBtn = document.getElementById('agregarcarrito');

    agregarAlCarritoBtn.addEventListener('click', () => {
        const destinatario = document.querySelector('.destinario-input').value;
        const monto = document.querySelector('.monto-input').value;
        const color = document.querySelector('input[name="color"]:checked').value;
        const fuente = document.querySelector('input[name="fuente"]:checked').value;

        const giftcard = {
            destinatario: destinatario,
            monto: monto,
            color: color,
            fuente: fuente
        };

        let giftcardsEnCarrito = JSON.parse(localStorage.getItem('giftcardsEnCarrito')) || [];
        giftcardsEnCarrito.push(giftcard);
        localStorage.setItem('giftcardsEnCarrito', JSON.stringify(giftcardsEnCarrito));

        alert("Giftcard agregada al carrito");
    });
});

