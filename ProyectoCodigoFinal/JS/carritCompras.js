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

// Función original modificada para actualizar el total
function agregarCursos(){
    const java = document.getElementById("cursos_java");
    const python = document.getElementById("cursos_python");
    const hyc = document.getElementById("cursos_HYC");
    const total = document.getElementById("total_cursos");
    const total_precio = document.getElementById("total_precio");

    let totalCursos = 0;
    let totalPrecio = 0;

    ["java", "python", "HYC"].forEach(curso => {
        const contador = parseInt(localStorage.getItem(`contenedor_${curso}`) || "0");
        document.getElementById(`cursos_${curso}`).innerHTML = `Cantidad: ${contador}`;
        document.getElementById(`precio_total_${curso}`).innerHTML = `Precio Total: ${contador * 1000}`;
        
        totalCursos += contador;
        totalPrecio += contador * 1000;
    });

    total.innerHTML = totalCursos;
    total_precio.innerHTML = totalPrecio;
}

agregarCursos();
