document.addEventListener('DOMContentLoaded', function() {
    const cartIcon = document.getElementById('cart-icon');
    const cartSidebar = document.getElementById('cart-sidebar');
    const closeSidebarButton = document.getElementById('close-sidebar');
    const contadorElement = document.getElementById('contador');
    const contadorSidebarElement = document.getElementById('contador-sidebar');
    const cartItems = document.getElementById('cart-items');

    let cursosEnCarrito = JSON.parse(localStorage.getItem("cursosEnCarrito")) || [];
    let contadorInscripcion = cursosEnCarrito.length;

    // Cargar los items del carrito en el sidebar
    function loadCartItems() {
        cartItems.innerHTML = '';
        if (cursosEnCarrito.length === 0) {
            cartItems.innerHTML = '<p>No hay cursos en el carrito.</p>';
        } else {
            cursosEnCarrito.forEach(curso => {
                const item = document.createElement('div');
                item.classList.add('cart-item');
                item.innerHTML = `<h3>${curso.name}</h3><p>${curso.hours} hrs</p>`;
                cartItems.appendChild(item);
            });
        }
    }

    // Mostrar el carrito (añadir clase "open")
    cartIcon.addEventListener('click', function() {
        loadCartItems();
        cartSidebar.classList.add('open');  // Agregar la clase 'open' para mostrar el sidebar
    });

    // Cerrar el carrito (quitar la clase "open")
    closeSidebarButton.addEventListener('click', function() {
        cartSidebar.classList.remove('open');  // Quitar la clase 'open' para ocultar el sidebar
    });

    // Actualizar el contador total de cursos en el carrito
    function setContador() {
        contadorElement.textContent = `Cursos en Carrito: ${contadorInscripcion}`;
        contadorSidebarElement.textContent = `Cursos en Carrito: ${cursosEnCarrito.length}`;
    }

    setContador();

    // Función para agregar un curso al carrito
    function agregarCurso(curso) {
        cursosEnCarrito.push(curso);
        localStorage.setItem("cursosEnCarrito", JSON.stringify(cursosEnCarrito));

        contadorInscripcion = cursosEnCarrito.length;
        localStorage.setItem("contenedor_HYC", contadorInscripcion);

        setContador();
    }

    // Contador específico de HTML y CSS
    function actualizarContadorEspecifico() {
        const cursosHtmlCss = cursosEnCarrito.filter(curso => curso.name === 'Curso de HTML y CSS');
        const contadorHtmlCss = cursosHtmlCss.length;

        // Actualiza el contador específico del curso en el contador visible
        contadorElement.textContent = `Cursos HTML en Carrito: ${contadorHtmlCss}`;
    }

    // Evento para el botón de compra
    const botonComprar = document.getElementById('boton-comprar');
    botonComprar.addEventListener('click', () => {
        const curso = {
            name: 'Curso de HTML y CSS',
            hours: '86 horas'
        };
        agregarCurso(curso);
        actualizarContadorEspecifico();
    });
});
