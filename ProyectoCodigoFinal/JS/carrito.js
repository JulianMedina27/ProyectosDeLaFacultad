document.addEventListener('DOMContentLoaded', function() {
    const cartIcon = document.getElementById('cart-icon');
    const cartSidebar = document.getElementById('cart-sidebar');
    const closeSidebarButton = document.getElementById('close-sidebar');
    const contadorElement = document.getElementById('contador');
    const contadorSidebarElement = document.getElementById('contador-sidebar');
    const cartItems = document.getElementById('cart-items');

    let cursosEnCarrito = JSON.parse(localStorage.getItem("cursosEnCarrito")) || [];
    let giftcardsEnCarrito = JSON.parse(localStorage.getItem("giftcardsEnCarrito")) || [];  // Recuperamos las giftcards
    let contadorInscripcion = cursosEnCarrito.length + giftcardsEnCarrito.length;  // Contamos cursos + giftcards

    // Cargar los items del carrito en el sidebar (incluyendo cursos y giftcards)
    function loadCartItems() {
        cartItems.innerHTML = '';  // Limpiar los elementos previos del carrito
    
        if (cursosEnCarrito.length === 0 && giftcardsEnCarrito.length === 0) {
            cartItems.innerHTML = '<p>No hay cursos o giftcards en el carrito.</p>';
        } else {
            // Mostrar cursos del carrito
            ["java", "python", "HYC"].forEach(curso => {
                let contador = parseInt(localStorage.getItem(`contenedor_${curso}`) || "0");
    
                if (contador > 0) {
                    const item = document.createElement('div');
                    item.classList.add('cart-item');
                    item.innerHTML = `<h3>${curso.charAt(0).toUpperCase() + curso.slice(1)} (Cantidad: ${contador})</h3><p>Precio Total: $${contador * 1000}</p>`;
                    cartItems.appendChild(item);
                }
            });
    
            // Mostrar las giftcards en el carrito
            giftcardsEnCarrito.forEach(giftcard => {
                const item = document.createElement('div');
                item.classList.add('cart-item');
                item.innerHTML = `<h3>Giftcard para: ${giftcard.destinatario}</h3><p>Monto: $${giftcard.monto}</p>`;
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

  // Función para actualizar el contador total de cursos y giftcards en el carrito
function setContador() {
    // Sumar la cantidad total de cursos
    let totalCursos = 0;
    ["java", "python", "HYC"].forEach(curso => {
        totalCursos += parseInt(localStorage.getItem(`contenedor_${curso}`) || "0");
    });

    // Obtener la cantidad total de giftcards
    let totalGiftcards = giftcardsEnCarrito.length;

    // Sumar los totales de cursos y giftcards
    let totalItems = totalCursos + totalGiftcards;

    // Actualizar los contadores en el HTML
    contadorElement.textContent = `Cursos y Giftcards en Carrito: ${totalItems}`;
    contadorSidebarElement.textContent = `Cursos y Giftcards en Carrito: ${totalItems}`;
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
