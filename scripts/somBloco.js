/* animação dos sprites bloco ( ? ) sprites do bloco de interrogação */ 

function playSoundAndHideImage() {
  var bloco = document.querySelector(".slider");
  var blocoQuebrando = document.getElementById("somMoeda"); /*som moeda*/

  bloco.style.display = "none"; // Esconde a imagem
  blocoQuebrando.play(); // Toca o som
}

// Adicione o evento de clique ao elemento "slider"
var slider = document.querySelector(".slider");
slider.addEventListener("click", playSoundAndHideImage);
