document.getElementById("menu-hamburguesa").addEventListener("click", function() {
    var menu = document.getElementById("menu-horizontal");
    menu.classList.toggle("menu-abierto");
});

let inscripciones = [];
function crearInscripcion(ID, nombre, precio) {
    let inscripcion = {
        Id_Curso: ID,
        Nombre_Curso: nombre,
        Precio_Curso: precio
    };
    inscripciones.push(inscripcion); // Añade el objeto al array
}


document.addEventListener('DOMContentLoaded', function() {
    const alumnosContainer = document.getElementById('alumnos-container');
    const botonMas = document.getElementById('boton-mas');
    const botonMenos = document.getElementById('boton-menos');
    const precioElement = document.getElementById('precio');
    const alumnoContenedor = document.getElementById('Contador-Alumnos');
    const menu_seleccionar = document.getElementById('menu-seleccionar');
    const boton_java = document.getElementById('curso-java');
    const boton_python = document.getElementById('curso-python');
    const boton_hyc = document.getElementById('curso-HYC');

    let alumnoCount = 1; // Contador de alumnos
    let precioBase = 1000; // Precio base por alumno
   


    // Función para agregar un nuevo alumno

    function mostrarMenu(){
        if( menu_seleccionar.style.display == "flex")
            {
                menu_seleccionar.style.display = "none";
            } else 
            {
                menu_seleccionar.style.display = "flex";
                menu_seleccionar.style.flexDirection = "column";
            }
   
    }
    function agregarAlumno(id,nombre,precio) {
        alumnoCount++;
     


        const nuevoAlumno = document.createElement('div');
        if(id == 1)
            {
                nuevoAlumno.classList.add('Java');
            } else if(id == 2)
                {
                    nuevoAlumno.classList.add('Pyhton');
                } else if(id == 3)
                    {
                        nuevoAlumno.classList.add('HTMLCSS');
                    }
        
        nuevoAlumno.innerHTML = `
            <h2> Curso ${nombre}</h2>
            <div class="barra_insc">
                <input class="barra_insc-input" type="text" placeholder="Nombre">
            </div>
            <div class="barra_insc">
                <input class="barra_insc-input" type="text" placeholder="Apellido">
            </div>
            <div class="barra_insc">
                <input class="barra_insc-input" type="text" placeholder="DNI">
            </div>
            <h2> Precio: ${precio} </h2>
            
        `;
        
        alumnosContainer.appendChild(nuevoAlumno);
        actualizarPrecio();
    }

    // Función para eliminar el último alumno
    function eliminarAlumno() {
        if (alumnoCount > 1) { // No eliminar el único alumno
            alumnosContainer.removeChild(alumnosContainer.lastChild);
            alumnoCount--;
            actualizarPrecio();
            
        }
    }

    // Función para actualizar el precio
    function actualizarPrecio() {
        const nuevoPrecio = alumnoCount * precioBase;
        precioElement.textContent = `$${nuevoPrecio}`;
        alumnoContenedor.textContent = `${alumnoCount}`;
        localStorage.setItem("contenedorAlumnos", alumnoCount);
        const verificacion =localStorage.getItem("contenedorAlumnos");
        console.log(verificacion);
    }

    
    function crearCursoJava()
    {
    crearInscripcion(1,'Java',1000);
    agregarAlumno(1,'Java',1000);

    }
    function crearCursoPython()
    {
    crearInscripcion(2,'Python',1000);
    agregarAlumno(2,'Python',1000);

    }

    function crearCursoHTMLYCSS()
    {
    crearInscripcion(3,'HTMLYCSS',1000);
    agregarAlumno(3,'HTMLYCSS',1000);

    }

    // Event listeners para los botones
    botonMas.addEventListener('click', mostrarMenu);
    botonMenos.addEventListener('click', eliminarAlumno);
    boton_java.addEventListener('click', crearCursoJava);
    boton_python.addEventListener('click', crearCursoPython);
    boton_hyc.addEventListener('click', crearCursoHTMLYCSS);
});