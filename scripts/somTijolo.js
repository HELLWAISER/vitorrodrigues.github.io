// código referente aos blocos da seção tecnologia
 function playSoundTijoloBaiano() {
  var tijoloMarron = this;
  var blocoQuebrando = tijoloMarron.nextElementSibling; /* som bloco quebrando*/

  tijoloMarron.style.display = "none"; // Esconde a imagem
  blocoQuebrando.play(); // Toca o som
}

// Seleciona todos os elementos com a classe "overlay"
var overlays = document.querySelectorAll(".overlay");

// Adiciona o evento de clique a cada elemento "overlay"
overlays.forEach(function (overlay) {
  overlay.addEventListener("click", playSoundTijoloBaiano);
});
