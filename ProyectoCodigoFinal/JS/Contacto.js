document.getElementById("consulta").addEventListener("input", function () {
    const consulta = document.getElementById("consulta");
    const caracteresRestantes = 1000 - consulta.value.length;
    document.getElementById("caracteresRestantes").textContent = caracteresRestantes;
  });

  
  document.getElementById("menu-hamburguesa").addEventListener("click", function() {
    var menu = document.getElementById("menu-horizontal");
    menu.classList.toggle("menu-abierto");
});