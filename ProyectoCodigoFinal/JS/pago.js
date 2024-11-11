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
  const cardNumber = document.getElementById("cardNumber").value;
  cardNumber.addEventListener("keypress", function(event) {
    const charCode = event.keyCode || event.which;

    if (charCode < 48 || charCode > 57) {
      event.preventDefault(); 
    }
  });
  
  const cvv = document.getElementById("cvv").value;
  const cvvInput = document.getElementById("cvv");

  cvv.addEventListener("keypress", function(event) {
    const charCode = event.keyCode || event.which;

    if (charCode < 48 || charCode > 57 || cvvInput.value.length > 3) {
      event.preventDefault();
  });
