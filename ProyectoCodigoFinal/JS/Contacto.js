document.getElementById("consulta").addEventListener("input", function () {
    const consulta = document.getElementById("consulta");
    const caracteresRestantes = 1000 - consulta.value.length;
    document.getElementById("caracteresRestantes").textContent = caracteresRestantes;
  });

  
  document.getElementById("menu-hamburguesa").addEventListener("click", function() {
    var menu = document.getElementById("menu-horizontal");
    menu.classList.toggle("menu-abierto");
});

  const boton = document.getElementById("boton");

  function verificarTelefono()
  {
    let esValido;
  const telefono = document.getElementById("Telefono").value.trim();
  const telefonoRegex = /^\d{4}-?\d{4}$/;
  if (telefono.length < 8) {
    alert("el campo de Telefono debe contener almenos 8 digitos");
    esValido = false;
  } else if (telefono.length >= 8) {
    esValido = true;
  }

  return esValido;
  }


  function mostrarPopUp()
  {
    const popup = document.getElementById('popup');
    popup.style.display = "flex";
  }

  document.getElementById("formulario").addEventListener("submit", function(event) {
    // Llama a la función de validación y previene el envío si hay errores
    if (!verificarTelefono()) {
      event.preventDefault(); // Evita el envío si hay errores
    } else {
      event.preventDefault();
      mostrarPopUp();
    }
  });