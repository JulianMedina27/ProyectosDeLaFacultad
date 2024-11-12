document.addEventListener('DOMContentLoaded', function() {
    const cartIcon = document.getElementById('cart-icon');
    const cartSidebar = document.getElementById('cart-sidebar');
    const closeSidebarButton = document.getElementById('close-sidebar');
    const cartItems = document.getElementById('cart-items');

    // Función para cargar los cursos y mostrar en el sidebar
    function loadCartItems() {
        cartItems.innerHTML = ''; // Limpiar los elementos previos

        let totalCursos = 0;
        let totalPrecio = 0;

        // Mostrar cursos del carrito
        ["java", "python", "HYC"].forEach(curso => {
            const contador = parseInt(localStorage.getItem(`contenedor_${curso}`) || "0");

            if (contador > 0) {
                const item = document.createElement('div');
                item.classList.add('cart-item');
                item.innerHTML = `<h3>${curso.charAt(0).toUpperCase() + curso.slice(1)} (Cantidad: ${contador})</h3><p>Precio Total: $${contador * 1000}</p>`;
                cartItems.appendChild(item);

                totalCursos += contador;
                totalPrecio += contador * 1000;
            }
        });

        // Actualizar el contador y total en el sidebar
        const totalElement = document.getElementById("total_cursos");
        const totalPrecioElement = document.getElementById("total_precio");

        if (totalElement) totalElement.innerHTML = totalCursos;
        if (totalPrecioElement) totalPrecioElement.innerHTML = totalPrecio;
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

    // Llamar a la función para cargar los elementos del carrito al cargar la página
    loadCartItems();

    // Función para actualizar el contador total de cursos en el carrito
    function setContador() {
        let totalCursos = 0;

        // Contar los cursos
        ["java", "python", "HYC"].forEach(curso => {
            const contador = parseInt(localStorage.getItem(`contenedor_${curso}`) || "0", 10);
            totalCursos += contador;
        });

        // Actualizar el contador en el DOM
        const contadorElement = document.getElementById('contador');
        if (contadorElement) {
            contadorElement.textContent = `Cursos en Carrito: ${totalCursos}`;
        } else {
            console.error("El elemento con ID 'contador' no existe.");
        }
    }

    setContador();  // Llamada a la función para actualizar el contador al cargar la página
});
    

    
    

    // Mostrar el carrito (añadir clase "open")
    cartIcon.addEventListener('click', function() {
        loadCartItems();
        cartSidebar.classList.add('open');  // Agregar la clase 'open' para mostrar el sidebar
    });

    // Cerrar el carrito (quitar la clase "open")
    closeSidebarButton.addEventListener('click', function() {
        cartSidebar.classList.remove('open');  // Quitar la clase 'open' para ocultar el sidebar
    });

  // Función para actualizar el contador total de cursos y giftcards en el carrito
  function setContador() {
    let totalCursos = 0;

    // Contar los cursos
    ["java", "python", "HYC"].forEach(curso => {
        const contador = parseInt(localStorage.getItem(`contenedor_${curso}`) || "0", 10);
        totalCursos += contador;
    });

    // Actualizar el contador en el DOM
    const contadorElement = document.getElementById('contador');
    if (contadorElement) {
        contadorElement.textContent = `Cursos en Carrito: ${totalCursos}`;
    } else {
        console.error("El elemento con ID 'contador' no existe.");
    }
}

setContador();


    // Función para agregar un curso al carrito
    function agregarCurso(curso) {
        let contador = parseInt(localStorage.getItem(`contenedor_${curso}`) || "0");
        localStorage.setItem(`contenedor_${curso}`, contador + 1);
        loadCartItems(); // Llamar a la función para actualizar el carrito en el sidebar
    }
    function eliminarCurso(curso) {
        let contador = parseInt(localStorage.getItem(`contenedor_${curso}`) || "0");
        if (contador > 0) {
            localStorage.setItem(`contenedor_${curso}`, contador - 1);
        }
        loadCartItems(); // Llamar a la función para actualizar el carrito en el sidebar
    }

    // Función para agregar una giftcard al carrito
    function agregarGiftcard(giftcard) {
        giftcardsEnCarrito.push(giftcard);
        localStorage.setItem("giftcardsEnCarrito", JSON.stringify(giftcardsEnCarrito));

        contadorInscripcion = cursosEnCarrito.length + giftcardsEnCarrito.length;  // Actualiza el contador
        localStorage.setItem("contenedor_HYC", contadorInscripcion);

        setContador();
    }

    // Evento para el botón de compra HTML
    const botonComprarHtml = document.getElementById('boton-comprar-html');
    if (botonComprarHtml) {
        botonComprarHtml.addEventListener('click', () => {
            const cursoHtml = {
                name: 'Curso de HTML y CSS',
                hours: '86 horas'
            };
            agregarCurso(cursoHtml);
        });
    }
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

    // Evento para el botón de compra Java
    const botonComprarJava = document.getElementById('boton-comprar-java');
    if (botonComprarJava) {
        botonComprarJava.addEventListener('click', () => {
            const cursoJava = {
                name: 'Curso de Java',
                hours: '86 horas'
            };
            agregarCurso(cursoJava);
        });
    }

    // Evento para el botón de compra Python
    const botonComprarPhyton = document.getElementById('boton-comprar-phyton');
    if (botonComprarPhyton) {
        botonComprarPhyton.addEventListener('click', () => {
            const cursoPhyton = {
                name: 'Curso de Python',
                hours: '80 horas'
            };
            agregarCurso(cursoPhyton);
        });
    }

    // Evento para agregar la giftcard al carrito
    const agregarGiftcardBtn = document.getElementById('agregar-giftcard');
    if (agregarGiftcardBtn) {
        agregarGiftcardBtn.addEventListener('click', () => {
            const destinatario = document.querySelector('.destinario-input').value;
            const monto = document.querySelector('.monto-input').value;

            const giftcard = {
                destinatario: destinatario,
                monto: monto
            };

            agregarGiftcard(giftcard);
        });
    }
