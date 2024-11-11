document.addEventListener('DOMContentLoaded', function() {
    // Elementos de la interfaz
    const cartIcon = document.getElementById('cart-icon');
    const cartSidebar = document.getElementById('cart-sidebar');
    const closeSidebarButton = document.getElementById('close-sidebar');
    const contadorElement = document.getElementById('contador');
    const cartItems = document.getElementById('cart-items');

    // Cargar los cursos desde localStorage
    let cursosEnCarrito = JSON.parse(localStorage.getItem("cursosEnCarrito")) || [];
    let contadorInscripcion = cursosEnCarrito.length;  // El contador será la longitud de cursosEnCarrito

    // Función para cargar los cursos del carrito en el sidebar
    function loadCartItems() {
        cartItems.innerHTML = ''; // Limpiar contenido previo

        if (cursosEnCarrito.length === 0) {
            cartItems.innerHTML = '<p>No hay cursos en el carrito.</p>';
        } else {
            cursosEnCarrito.forEach(curso => {
                const item = document.createElement('div');
                item.classList.add('cart-item');
                item.innerHTML = `
                    <h3>${curso.name}</h3>
                    <p>${curso.hours} hrs</p>
                `;
                cartItems.appendChild(item);
            });
        }
    }

    // Evento para abrir el carrito al hacer clic en el icono
    if (cartIcon) {
        cartIcon.addEventListener('click', function() {
            loadCartItems();  // Cargar los cursos al abrir el sidebar
            cartSidebar.classList.add('open');  // Añadir la clase 'open' para mostrar el sidebar
        });
    }

    // Evento para cerrar el carrito
    if (closeSidebarButton) {
        closeSidebarButton.addEventListener('click', function() {
            cartSidebar.classList.remove('open');  // Quitar la clase 'open' para ocultar el sidebar
        });
    }

    // Función para actualizar el contador de cursos al cargar la página
    function setContador() {
        contadorElement.textContent = `Cursos en Carrito: ${contadorInscripcion}`;
    }

    // Establecer el contador al cargar la página
    setContador();  // Llamar a la función para asegurarse de que el contador se muestre correctamente

    // Función para agregar un curso al carrito
    function agregarCurso(curso) {
        cursosEnCarrito.push(curso); // Agregar el curso al carrito
        localStorage.setItem("cursosEnCarrito", JSON.stringify(cursosEnCarrito));  // Guardar el carrito actualizado en localStorage

        contadorInscripcion = cursosEnCarrito.length;  // Actualizar el contador de cursos
        localStorage.setItem("contenedor_HYC", contadorInscripcion);  // Guardar el contador en localStorage

        // Actualizar el contador en el HTML
        setContador();
    }

    // Evento para agregar curso al carrito al hacer clic en "Comprar"
    const botonComprar = document.getElementById('boton-comprar');
    if (botonComprar) {
        botonComprar.addEventListener('click', () => {
            const curso = {
                name: 'Curso de HTML y CSS',
                hours: '86 horas'
            };
            agregarCurso(curso);
        });
    }

});
