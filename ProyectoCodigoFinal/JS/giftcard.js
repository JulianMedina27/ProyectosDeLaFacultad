// Seleccion de los elementos de la giftcard
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
        // Obtiene el color por data-color
        const selectedColor = opcion.getAttribute('data-color');
        
        // Cambia el color
        destinatarioTexto.style.color = selectedColor;
    });
});

// Cambio del nombre del destinario
destinatarioInput.addEventListener('input', () => {
    destinatarioTexto.textContent = destinatarioInput.value;
});


// Cambio del tamaño de la fuente, mismo argumento que con el color
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


// Cambia de posicion el fondo negro segun el input que se elija 
ubicacionInput.forEach(input => {
    input.addEventListener('change', (event) => {
        // Primero se reestablece la posicion del fondo negro
        fondoNegro.style.top = '';
        fondoNegro.style.right = '';
        fondoNegro.style.left = '';
        fondoNegro.style.bottom = '';

        // Switch que segun el id del input cambia la ubicacion del fondo
        switch (event.target.id) {
            case 'ubicacion1': // Ubicacion abajo izquierda
                fondoNegro.style.bottom = '0'; // Abajo
                fondoNegro.style.left = '0'; // Izquierda
                break;
            case 'ubicacion2': // Ubicacion abajo derecha
                fondoNegro.style.bottom = '0'; // Abajo
                fondoNegro.style.right = '0'; // Derecha
                break;
            case 'ubicacion3': // Ubicacion arriba izquierda
                fondoNegro.style.top = '0'; // Arriba
                fondoNegro.style.left = '0'; // Izquierda
                break;
            case 'ubicacion4': // Ubicacion arriba derecha
                fondoNegro.style.top = '0'; // Arriba
                fondoNegro.style.right = '0'; // Derecha
                break;
        }

        // Esto centra el texto del monto
        textoSpan.style.top = '50%';
        textoSpan.style.transform = 'translateY(-50%)';
 
    });
});
fondos.forEach(fondo => {
    fondo.addEventListener('change', cambiarFondos);
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

function cambiarFondos()
{
    let opcionSeleccionada = "";

    for (let fondo of fondos) {
        if (fondo.checked) {
            opcionSeleccionada = fondo.id;
            break;
        }
    }

    if(opcionSeleccionada == "fondo1")
        {
            frame.style.backgroundColor = "gray"

        } else if(opcionSeleccionada == "fondo2")
            {
                frame.style.backgroundColor = "red"

            } else if(opcionSeleccionada == "fondo3")
                {
                    frame.style.backgroundColor = "blue"

                } else if(opcionSeleccionada == "fondo4")
                    {
                        frame.style.backgroundColor = "green"
                    } else if(opcionSeleccionada == "fondo5")
                        {
                            frame.style.backgroundColor = "violet"
                        }
}


