let carrito = [];
let totalItems = 0;

// Funci�n para agregar productos al carrito
function agregarCarrito(producto, precio) {
    carrito.push({ producto, precio });
    totalItems++;
    document.getElementById("totalItems").textContent = totalItems;
}

// Funci�n para generar la vista del carrito en una nueva pesta�a
function mostrarCarrito() {
    let carritoTexto = "<h1>Carrito de Compras</h1>";
    let totalPrecio = 0;

    carrito.forEach(item => {
        carritoTexto += <p>${item.producto} - $${item.precio}</p>;
        totalPrecio += item.precio;
    });

    carritoTexto += <p><strong>Total: $${totalPrecio}</strong></p>;

    // Abrimos una nueva pesta�a y mostramos el contenido del carrito
    let carritoVentana = window.open("", "_blank");
    carritoVentana.document.write(`
        <html>
        <head><title>Carrito de Compras</title></head>
        <body>${carritoTexto}</body>
        </html>
    `);
    carritoVentana.document.close();
}

// Evento para mostrar el carrito en una nueva pesta�a al hacer clic en el carrito
document.querySelector('a[href="#carrito"]').addEventListener('click', function(event) {
    event.preventDefault();
    mostrarCarrito();
});

// Funci�n para enviar mensaje a WhatsApp desde el formulario de contacto
function enviarWhatsApp() {
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const mensaje = document.getElementById("mensaje").value;

    const mensajeCompleto = Nombre: ${nombre}\nEmail: ${email}\nMensaje: ${mensaje};
    const numeroWhatsApp = "549123456789"; // Reemplaza con tu n�mero de WhatsApp (con c�digo de pa�s)
    const url = https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensajeCompleto)};

    // Redirige a WhatsApp
    window.open(url, "_blank");
}

// Evento para capturar el env�o del formulario de contacto
document.querySelector('form[action="/enviar_contacto"]').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el comportamiento de env�o por defecto
    enviarWhatsApp(); // Llama a la funci�n para enviar el mensaje por WhatsApp
});
