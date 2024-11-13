document.getElementById("paymentForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const cardName = document.getElementById("cardName").value;
    const cardNumber = document.getElementById("cardNumber").value;
    const expiryDate = document.getElementById("expiryDate").value;
    const cvv = document.getElementById("cvv").value;

    // Validación simple
    if (cardName && cardNumber.length === 16 && cvv.length === 3 && expiryDate) {
      alert("Pago procesado con éxito. Gracias por su compra!");
      document.getElementById("paymentForm").reset();
    } else {
      alert("Por favor, complete todos los campos correctamente.");
    }
  });

