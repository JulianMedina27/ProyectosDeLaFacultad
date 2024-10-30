// Seleccion de inputs de color y del destinario
const colorOpciones = document.querySelectorAll('input[name="color"]');
const destinatarioTexto = document.querySelector('.frame-destinario');
const destinatarioInput = document.querySelector('.destinario-input');
const fuenteOpciones= document.querySelectorAll('input[name="fuente"]');
const montoInput = document.querySelector('.monto-input');
const montoTexto = document.getElementById('monto-giftcard');
let ubicaciones = document.getElementsByName("ubi");
const ubicacion_fondo = document.getElementById('fondo-negro')

// Agrega un evento de cambio por cada color que haya
colorOpciones.forEach(opcion => {
    opcion.addEventListener('change', () => {
        // Obtiene el color por data-color
        const selectedColor = opcion.getAttribute('data-color');
        
        // Cambia el color
        destinatarioTexto.style.color = selectedColor;
    });
});

destinatarioInput.addEventListener('input', () => {
    destinatarioTexto.textContent = destinatarioInput.value;
});

fuenteOpciones.forEach(opcion => {
    opcion.addEventListener('change', () => {
        const seleccionTamañoFuente = opcion.getAttribute('data-fuente');

        destinatarioTexto.style.fontSize = seleccionTamañoFuente;
    })

});

montoInput.addEventListener('input', () => {
    montoTexto.textContent = `$${montoInput.value}-`; // Este es el texto que debería actualizarse
});

function cambiarUbicacion() {
    let opcionSeleccionada = "";

    for (let ubicacion of ubicaciones) {
        if (ubicacion.checked) {
            opcionSeleccionada = ubicacion.id;
            break;
        }
    }

    // Resetea todas las propiedades
    ubicacion_fondo.style.removeProperty("top");
    ubicacion_fondo.style.removeProperty("right");
    ubicacion_fondo.style.removeProperty("bottom");
    ubicacion_fondo.style.removeProperty("left");

    // Asigna las propiedades según la opción seleccionada
    if (opcionSeleccionada === "ubicacion1") {
        ubicacion_fondo.style.bottom = 0;
        ubicacion_fondo.style.left = 0;
    } else if (opcionSeleccionada === "ubicacion2") {
        ubicacion_fondo.style.bottom = 0;
        ubicacion_fondo.style.right = 0;
    } else if (opcionSeleccionada === "ubicacion3") {
        ubicacion_fondo.style.top = 0;
        ubicacion_fondo.style.left = 0;
    } else if (opcionSeleccionada === "ubicacion4") {
        ubicacion_fondo.style.top = 0;
        ubicacion_fondo.style.right = 0;
    }

    console.log("Opción seleccionada:", opcionSeleccionada);
}

cambiarUbicacion();
ubicaciones.forEach(ubicacion => {
    ubicacion.addEventListener('click',cambiarUbicacion);
});
