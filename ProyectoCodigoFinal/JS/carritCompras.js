function agregarCurso(curso) {
    let contador = parseInt(localStorage.getItem(`contenedor_${curso}`) || "0");
    localStorage.setItem(`contenedor_${curso}`, contador + 1);
    agregarCursos(); // Actualizar visualización
}

function eliminarCurso(curso) {
    let contador = parseInt(localStorage.getItem(`contenedor_${curso}`) || "0");
    if (contador > 0) {
        localStorage.setItem(`contenedor_${curso}`, contador - 1);
    }
    agregarCursos(); // Actualizar visualización
}

document.querySelectorAll(".botonmenos").forEach((button, index) => {
    const curso = ["java", "python", "HYC"][Math.floor(index / 2)];
    button.onclick = () => {
        if (button.textContent.includes("Eliminar")) {
            eliminarCurso(curso);
        } else {
            agregarCurso(curso);
        }
    };
});

// Función modificada para actualizar el total, incluyendo las giftcards
function agregarCursos(){
    const java = document.getElementById("cursos_java");
    const python = document.getElementById("cursos_python");
    const hyc = document.getElementById("cursos_HYC");
    const total = document.getElementById("total_cursos");
    const total_precio = document.getElementById("total_precio");

    let totalCursos = 0;
    let totalPrecio = 0;

    // Sumar los cursos
    ["java", "python", "HYC"].forEach(curso => {
        const contador = parseInt(localStorage.getItem(`contenedor_${curso}`) || "0");
        document.getElementById(`cursos_${curso}`).innerHTML = `Cantidad: ${contador}`;
        document.getElementById(`precio_total_${curso}`).innerHTML = `Precio Total: $${contador * 1000}`;
        
        totalCursos += contador;
        totalPrecio += contador * 1000;
    });

    // Sumar el total de las giftcards
    let totalGiftcards = 0;
    const giftcardsEnCarrito = JSON.parse(localStorage.getItem("giftcardsEnCarrito")) || [];
    giftcardsEnCarrito.forEach(giftcard => {
        totalGiftcards += parseInt(giftcard.monto, 10);
    });

    // Mostrar el total de las giftcards
    const giftcardsTotalElement = document.getElementById("total_giftcards");
    if (giftcardsTotalElement) {
        giftcardsTotalElement.innerHTML = `Total Giftcards: $${totalGiftcards}`;
    }

    // Actualizar el precio total sumando el monto de las giftcards
    totalPrecio += totalGiftcards;

    // Mostrar los totales en el DOM
    total.innerHTML = totalCursos;
    total_precio.innerHTML = `$${totalPrecio}`;
}

agregarCursos();
