
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const recuperarForm = document.getElementById("recuperar");


    // Verificacion de inicio de sesion
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
        e.preventDefault(); // Se detiene el envio automatico del form

        const email = document.getElementById("correo").value;
        const password = document.getElementById("password").value;

        // Recupera usuarios guardados en LocalStorage o inicializa un array vacio
        const users = JSON.parse(localStorage.getItem("users")) || [];

        // Verifica si existe un usuario con el correo y contraseña ingresados
        const user = users.find(user => user.email === email && user.password === password);

        if (user) {
            // Si encuentra al usuario, inicia sesion
            alert("¡Inicio de sesión exitoso!");
            window.location.href = "contenido.html";
        } else {
            // Si no se encuentra la cuenta o la contraseña es incorrecta
            alert("Correo o contraseña inválidos. Por favor, verifica tus datos.");
        }
    });
}
    // Recuperar contraseña
if (recuperarForm) {
    recuperarForm.addEventListener("submit", (e) => {
        e.preventDefault(); // Se detiene el envio automatico del form

        const email = document.getElementById("correo").value;

        // Recuperar usuarios guardados en LocalStorage
        const users = JSON.parse(localStorage.getItem("users")) || [];

        // Verifica si existe un usuario con el correo ingresado
        const userExists = users.some(user => user.email === email);

        if (userExists) {
            alert(`Se ha enviado un enlace de restablecimiento a ${email}.`); // Si existe solo muestra el mensaje de reestablecer
        } else {
            alert("Este correo no está registrado. Verifica e intenta nuevamente.");
        }
    });
}
});