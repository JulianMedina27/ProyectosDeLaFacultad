document.addEventListener('DOMContentLoaded', function() {
    const cartIcon = document.getElementById('cart-icon');
    const cartSidebar = document.getElementById('cart-sidebar');
    const closeSidebarButton = document.getElementById('close-sidebar');
    const cartItems = document.getElementById('cart-items');
    
    // Arreglo para almacenar las giftcards
    let giftcardsEnCarrito = JSON.parse(localStorage.getItem("giftcardsEnCarrito")) || [];

    // Función para cargar los cursos y giftcards en el sidebar
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

        // Mostrar las giftcards en el carrito
        if (giftcardsEnCarrito.length > 0) {
            giftcardsEnCarrito.forEach(giftcard => {
                const item = document.createElement('div');
                item.classList.add('cart-item');
                item.innerHTML = `<h3>Giftcard para: ${giftcard.destinatario}</h3><p>Monto: $${giftcard.monto}</p>`;
                cartItems.appendChild(item);

                totalCursos += 1;  // Contabilizamos cada giftcard como un item
                totalPrecio += parseInt(giftcard.monto, 10);  // Sumar el monto de la giftcard al total
            });
        }

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

    // Función para actualizar el contador total de cursos en el carrito
    function setContador() {
        let totalCursos = 0;

        // Contar los cursos
        ["java", "python", "HYC"].forEach(curso => {
            const contador = parseInt(localStorage.getItem(`contenedor_${curso}`) || "0", 10);
            totalCursos += contador;
        });

        // Contar las giftcards
        totalCursos += giftcardsEnCarrito.length;

        // Actualizar el contador en el DOM
        const contadorElement = document.getElementById('contador');
        if (contadorElement) {
            contadorElement.textContent = `Cursos y Giftcards en Carrito: ${totalCursos}`;
        } else {
            console.error("El elemento con ID 'contador' no existe.");
        }
    }

    setContador();  // Llamada a la función para actualizar el contador al cargar la página

    // Función para agregar un curso al carrito
    function agregarCurso(curso) {
        let contador = parseInt(localStorage.getItem(`contenedor_${curso}`) || "0");
        localStorage.setItem(`contenedor_${curso}`, contador + 1);
        loadCartItems(); // Llamar a la función para actualizar el carrito en el sidebar
    }

    // Función para eliminar un curso del carrito
    function eliminarCurso(curso) {
        let contador = parseInt(localStorage.getItem(`contenedor_${curso}`) || "0");
        if (contador > 0) {
            localStorage.setItem(`contenedor_${curso}`, contador - 1);
        }
        loadCartItems(); // Llamar a la función para actualizar el carrito en el sidebar
    }

    // Función para agregar una giftcard al carrito
    function agregarGiftcard(giftcard) {
        giftcardsEnCarrito.push(giftcard);  // Agrega la nueva giftcard al arreglo
        localStorage.setItem("giftcardsEnCarrito", JSON.stringify(giftcardsEnCarrito));  // Guarda las giftcards en localStorage

        setContador();  // Actualiza el contador de items en el carrito
        loadCartItems();  // Vuelve a cargar los items del carrito (incluyendo las giftcards)
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
});
