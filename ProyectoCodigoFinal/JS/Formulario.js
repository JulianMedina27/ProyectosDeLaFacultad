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
    let alumnoCount = 1; 
    let precioBase = 1000; 

    function mostrarMenu() {
        menu_seleccionar.style.display = menu_seleccionar.style.display === "flex" ? "none" : "flex";
    }

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

    function eliminarAlumno() {
        if (alumnoCount > 1) {
            alumnosContainer.removeChild(alumnosContainer.lastChild);
            alumnoCount--;
            actualizarPrecio();
        }
    }

    function actualizarPrecio() {
        const nuevoPrecio = alumnoCount * precioBase;
        precioElement.textContent = `$${nuevoPrecio}`;
        alumnoContenedor.textContent = `${alumnoCount}`;
        localStorage.setItem("contenedorAlumnos", alumnoCount);
    }

    botonMas.addEventListener('click', () => agregarAlumno("0"));
    botonMenos.addEventListener('click', eliminarAlumno);

    function informacionIntegrantes() {
        datosPersonas = []; 
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
    }

    function mostrarInformacion() {
        informacionIntegrantes();
        resultados.classList.add('modal');
        resultados.innerHTML = ""; 

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

    function cerrarModal() {
        resultados.innerHTML = "";
        resultados.classList.remove('modal');
    }

    resultados.addEventListener('click', function(event) {
        if (event.target === resultados) {
            cerrarModal();
        }
    });

    function obtenerCursosComprados() {

       
        
        let cursos_comprados = localStorage.getItem("contador_java");
        let cursos_comprados2 = localStorage.getItem("contenedor_python");
        let cursos_comprados3 = localStorage.getItem("contenedor_HYC");



        if(cursos_comprados != null) {
             document.getElementById('curso1').value = "Java"
             if(cursos_comprados > 1)
             
                    for(let i = 2; i <= cursos_comprados; i++) {
               
                        agregarAlumno("Java");
                    }
                
           
        }

       
        if(cursos_comprados2 != null) {
            for(let i = 1; i <= cursos_comprados2; i++) {
                agregarAlumno("Python");
            }
        }

       
        if(cursos_comprados3 != null) {
            for(let i = 1; i <= cursos_comprados3; i++) {
                agregarAlumno("HTML y CSS");
            }
        }
        
    }

    obtenerCursosComprados();
});
