// Seleccion de inputs de color y del destinario
const colorOpciones = document.querySelectorAll('input[name="color"]');
const destinatarioTexto = document.querySelector('.frame-destinario');
const destinatarioInput = document.querySelector('.destinario-input');
const fuenteOpciones= document.querySelectorAll('input[name="fuente"]');
const montoInput = document.querySelector('.monto-input');
const montoTexto = document.getElementById('monto-giftcard');

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



