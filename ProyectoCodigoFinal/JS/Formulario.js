document.getElementById("menu-hamburguesa").addEventListener("click", function() {
    var menu = document.getElementById("menu-horizontal");
    menu.classList.toggle("menu-abierto");
});

const boton_inf = document.getElementById('mostrarInformacion');
let datosPersonas = [];

document.addEventListener('DOMContentLoaded', function() {
    const alumnosContainer = document.getElementById('alumnos-container');
    const botonMas = document.getElementById('boton-mas');
    const botonMenos = document.getElementById('boton-menos');
    const precioElement = document.getElementById('precio');
    const alumnoContenedor = document.getElementById('Contador-Alumnos');
    const menu_seleccionar = document.getElementById('menu-seleccionar');
    const resultados = document.getElementById('resultado');
    let alumnoCount = 1;  // Contador de alumnos
    let precioBase = 1000; // Precio base por alumno

    // Mostrar u ocultar el menú de selección de curso
    function mostrarMenu() {
        menu_seleccionar.style.display = menu_seleccionar.style.display === "flex" ? "none" : "flex";
    }

    // Agregar un alumno al formulario
    function agregarAlumno(selected) {
        alumnoCount++;
        const nuevoAlumno = document.createElement('div');
        nuevoAlumno.id = `alumno${alumnoCount}`;
        nuevoAlumno.classList.add('alumnos-container');
        nuevoAlumno.innerHTML = `
            <div class="Java">
                <h2>Inscripción a CURSO</h2>
                <div class="barra_insc">
                    <input class="barra_insc-input" type="text" placeholder="Nombre" id="nombre${alumnoCount}">
                </div>
                <div class="barra_insc">
                    <input class="barra_insc-input" type="text" placeholder="Apellido" id="apellido${alumnoCount}">
                </div>
                <div class="barra_insc">
                    <input class="barra_insc-input" type="text" placeholder="DNI" id="dni${alumnoCount}">
                </div>
                <div class="barra_insc">
                    <input class="barra_insc-input" type="email" placeholder="ejemplo@hotmail.com" id="email${alumnoCount}">
                </div>
                <div class="barra_insc">
                    <input class="barra_insc-input" type="tel" placeholder="Teléfono" id="telefono${alumnoCount}">
                </div>
                <div>
                    <label>Curso: </label>
                    <select id="curso${alumnoCount}">
                        <option value="0">-Seleccione-</option>
                        <option value="Java">Java</option>
                        <option value="HTML y CSS">HTML y CSS</option>
                        <option value="Python">Python</option>
                    </select>
                </div>
                <h2>Precio: $1000</h2>
            </div>
        `;
        
        alumnosContainer.appendChild(nuevoAlumno);
        
        let selector = `curso${alumnoCount}`;
        document.getElementById(selector).value = selected;

        actualizarPrecio();
    }

    // Eliminar un alumno del formulario
    function eliminarAlumno() {
        if (alumnoCount > 1) {
            // Elimina el último alumno del DOM
            alumnosContainer.removeChild(alumnosContainer.lastChild);
            alumnoCount--;

            // Actualiza el precio y el contador de alumnos en la página
            actualizarPrecio();

            // Actualiza los datos en el localStorage
            localStorage.setItem("contenedorAlumnos", alumnoCount);  // Actualiza el contador total de alumnos

            // Elimina el último curso agregado del carrito de localStorage
            let cursos_comprados = JSON.parse(localStorage.getItem("cursosEnCarrito")) || [];
            cursos_comprados.pop();  // Elimina el último curso

            // Actualiza localStorage con la lista de cursos actualizada
            localStorage.setItem("cursosEnCarrito", JSON.stringify(cursos_comprados)); 

            // Actualiza los cursos específicos si es necesario (Java, Python, HTML y CSS)
            let contadorJava = localStorage.getItem("contador_java");
            let contadorPython = localStorage.getItem("contenedor_python");
            let contadorHYC = localStorage.getItem("contenedor_HYC");

            // Ejemplo de lógica para disminuir el contador específico
            if (contadorJava > 0) {
                localStorage.setItem("contador_java", contadorJava - 1);
            } else if (contadorPython > 0) {
                localStorage.setItem("contenedor_python", contadorPython - 1);
            } else if (contadorHYC > 0) {
                localStorage.setItem("contenedor_HYC", contadorHYC - 1);
            }
        }
    }

    // Actualizar el precio total
    function actualizarPrecio() {
        const nuevoPrecio = alumnoCount * precioBase;
        precioElement.textContent = `$${nuevoPrecio}`;
        alumnoContenedor.textContent = alumnoCount;
        localStorage.setItem("contenedorAlumnos", alumnoCount);
    }

    // Función para mostrar el menú de selección de cursos
    botonMas.addEventListener('click', () => agregarAlumno("0"));
    botonMenos.addEventListener('click', eliminarAlumno);

    // Recopilar información de todos los alumnos en el formulario
    function informacionIntegrantes() {
        datosPersonas = [];  // Limpiar el array de personas
        for (let i = 1; i <= alumnoCount; i++) {
            const nombre = document.getElementById(`nombre${i}`).value;
            const apellido = document.getElementById(`apellido${i}`).value;
            const dni = document.getElementById(`dni${i}`).value;
            const email = document.getElementById(`email${i}`).value;
            const telefono = document.getElementById(`telefono${i}`).value;
            const curso = document.getElementById(`curso${i}`).value;

            datosPersonas.push({
                nombre: nombre,
                apellido: apellido,
                dni: dni,
                email: email,
                telefono: telefono,
                curso: curso
            });
        }

        // Guardar la información de los alumnos en localStorage
        localStorage.setItem("datosAlumnos", JSON.stringify(datosPersonas));
    }

    // Mostrar la información de los estudiantes en una ventana modal
    function mostrarInformacion() {
        informacionIntegrantes();
        resultados.classList.add('modal');
        resultados.innerHTML = "";  // Limpiar los resultados previos

        datosPersonas.forEach((persona, index) => {
            resultados.innerHTML += `
                <p><strong>Persona ${index + 1}:</strong></p>
                <p>Nombre: ${persona.nombre}</p>
                <p>Apellido: ${persona.apellido}</p>
                <p>DNI: ${persona.dni}</p>
                <p>Email: ${persona.email}</p>
                <p>Teléfono: ${persona.telefono}</p>
                <p>Curso: ${persona.curso}</p>
                <hr>
            `;
        });

        resultados.innerHTML += `<button onclick="cerrarModal()">Cerrar</button>`;
    }

    boton_inf.addEventListener('click', mostrarInformacion);

    // Cerrar la ventana modal de información
    function cerrarModal() {
        resultados.innerHTML = "";
        resultados.classList.remove('modal');
    }

    resultados.addEventListener('click', function(event) {
        if (event.target != resultados) {
            cerrarModal();
        }
    });

    // Cargar los cursos comprados desde localStorage
    function obtenerCursosComprados() {
        let cursos_comprados_java = localStorage.getItem("contador_java");
        let cursos_comprados_python = localStorage.getItem("contenedor_python");
        let cursos_comprados_hyc = localStorage.getItem("contenedor_HYC");

        // Cargar los cursos de Java
        if (cursos_comprados_java != null && cursos_comprados_java > 0) {
            for (let i = 1; i <= cursos_comprados_java; i++) {
                agregarAlumno("Java");
            }
        }

        // Cargar los cursos de Python
        if (cursos_comprados_python != null && cursos_comprados_python > 0) {
            for (let i = 1; i <= cursos_comprados_python; i++) {
                agregarAlumno("Python");
            }
        }

        // Cargar los cursos de HTML y CSS
        if (cursos_comprados_hyc != null && cursos_comprados_hyc > 0) {
            for (let i = 1; i <= cursos_comprados_hyc; i++) {
                agregarAlumno("HTML y CSS");
            }
        }
    }

    obtenerCursosComprados(); // Llamar a la función para cargar los cursos al iniciar

});
