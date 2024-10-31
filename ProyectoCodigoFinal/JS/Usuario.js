document.addEventListener("DOMContentLoaded", () => {
    const usuarioActual = localStorage.getItem("currentUser");
    const botonCerrarCuenta = document.getElementById("cerrarCuenta");
    const botonBorrarCuenta = document.getElementById("borrarCuenta");
    
    // Cargar los datos del usuario actual si existe
    if (usuarioActual) {
        const usuarios = JSON.parse(localStorage.getItem("users")) || [];
        const usuario = usuarios.find(usuario => usuario.email === usuarioActual);

        // Si se encuentra el usuario, se agregan los nuevos valores
        if (usuario) {
            document.getElementById("nombre").value = usuario.nombre || "";
            document.getElementById("apellido").value = usuario.apellido || "";
            document.getElementById("dni").value = usuario.dni || "";
        }
    }

    // Evento para guardar cambios
    document.getElementById("guardarCambios").addEventListener("click", () => {
        const nombre = document.getElementById("nombre").value;
        const apellido = document.getElementById("apellido").value;
        const dni = document.getElementById("dni").value;

        // Se actualiza el usuario en localStorage
        const usuarios = JSON.parse(localStorage.getItem("users")) || [];
        const indiceUsuario = usuarios.findIndex(usuario => usuario.email === usuarioActual);

        if (indiceUsuario !== -1) { // Verifica que indiceUsuario no sea -1 ya que en javascript, si no se encuentra un elemento findIndex devuelve -1.
            usuarios[indiceUsuario].nombre = nombre; // Actualiza el nombre
            usuarios[indiceUsuario].apellido = apellido; // Actualiza el apellido
            usuarios[indiceUsuario].dni = dni; // Actualiza el DNI

            // Guarda el array de usuarios actualizado en localStorage
            localStorage.setItem("users", JSON.stringify(usuarios));
            alert("Los cambios se han guardado exitosamente.");
        }
    });

    // Evento para cerrar la cuenta
    botonCerrarCuenta.addEventListener("click", () => {
        // Confirmacion de si se quiere cerrar la cuenta
        const confirmacionCerrar = confirm("¿Estás seguro de que quieres cerrar tu cuenta?");
        if (confirmacionCerrar) {
            // Elimina usuarioActual del almacenamiento
            localStorage.removeItem("currentUser");
            
            // Devuelve al usuario a la pagina de inicio de sesion
            window.location.href = "../index.html";
        }
    });

    // Evento borrar cuenta
    botonBorrarCuenta.addEventListener("click", () => {
        // Confirmacion de si se quiere borrar la cuenta
        const confirmacionBorrar = confirm("¿Estás seguro de que quieres borrar tu cuenta?");
        if (confirmacionBorrar) {
            // Obtener la lista de usuarios
            let usuarios = JSON.parse(localStorage.getItem("users")) || [];
            
            // Filtrar la lista para eliminar al usuario actual
            usuarios = usuarios.filter(usuario => usuario.email !== usuarioActual);
            
            // Guardar la lista actualizada en localStorage
            localStorage.setItem("users", JSON.stringify(usuarios));
            
            // Tambien eliminar usuarioActual
            localStorage.removeItem("currentUser");
            
            // Devuelve al usuario a la pagina de inicio de sesion
            window.location.href = "../index.html";
        }
    });

});

// Manejar el evento del menú hamburguesa
document.getElementById("menu-hamburguesa").addEventListener("click", function() {
    var menu = document.getElementById("menu-horizontal");
    menu.classList.toggle("menu-abierto");
});