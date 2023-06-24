function showMessage(technology, message) {
    var messageElement = document.getElementById('click');
    messageElement.textContent = "Você clicou em " + technology + ": " + message;
  }

  function playSoundTijoloBaiano() {
    var audio = document.getElementById('blocoQuebrando');
    audio.play();
  }