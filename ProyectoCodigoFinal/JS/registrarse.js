// Los nuevos usuarios se guardan en un array que almacena el mail, la contraseña y el repetir contraseña, pero este ultimo no se vuelve a usar en login

document.addEventListener("DOMContentLoaded", () => {
    const formularioRegistro = document.getElementById("registerForm");

    formularioRegistro.addEventListener("submit", (e) => {
        e.preventDefault(); // Se detiene el envío automático del formulario

        const correo = document.getElementById("correo").value;
        const contraseña = document.getElementById("password").value;
        const repetirContraseña = document.getElementById("rep-password").value;

        // Verificación de las contraseñas
        if (contraseña !== repetirContraseña) {
            alert("Las contraseñas no coinciden.");
            return;
        }

        // Recupera usuarios guardados en LocalStorage o inicializa un array vacío
        let usuarios = JSON.parse(localStorage.getItem("users")) || [];

        // Verifica que el correo no esté registrado
        if (usuarios.some(usuario => usuario.email === correo)) {
            alert("Este correo ya está registrado."); // En caso de que esté registrado, dará un mensaje de error
            return;
        }

        // Registrar nuevo usuario
        usuarios.push({ email: correo, password: contraseña });
        localStorage.setItem("users", JSON.stringify(usuarios));
        alert("¡Registro exitoso! Ahora puedes iniciar sesión."); // Mensaje de registro correcto
        window.location.href = "../index.html"; // Redirige a inicio de sesión luego de registrarse
    });
});