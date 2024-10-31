// Los nuevos usuarios se guardan en un array que almacena el mail, la contraseña y el repetir contraseña, pero este ultimo no se vuelve a usar en login

document.addEventListener("DOMContentLoaded", () => {
    const registerForm = document.getElementById("registerForm");

    registerForm.addEventListener("submit", (e) => {
        e.preventDefault(); // Se detiene el envio automatico del form

        const email = document.getElementById("correo").value;
        const password = document.getElementById("password").value;
        const repPassword = document.getElementById("rep-password").value;

        // Verificacion de las contraseñas
        if (password !== repPassword) {
            alert("Las contraseñas no coinciden.");
            return;
        }

        // Recupera usuarios guardados en LocalStorage o inicializa un array vacio
        let users = JSON.parse(localStorage.getItem("users")) || [];

        // Verifica que el correo no este registrado
        if (users.some(user => user.email === email)) {
            alert("Este correo ya está registrado.");   // En caso de que este registrado, dara un mensaje de error
            return;
        }

        // Registrar nuevo usuario
        users.push({ email, password });
        localStorage.setItem("users", JSON.stringify(users));
        alert("¡Registro exitoso! Ahora puedes iniciar sesión.");   // Mensaje de registro correcto
        window.location.href = "../index.html"; // Redirige a inicio de sesion luego de registrarse
    });
});