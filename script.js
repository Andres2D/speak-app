const playButton = document.getElementById('play');

playButton.addEventListener('click', () => {
  const textArea = document.getElementById('inputText');
  responsiveVoice.speak(textArea.value, "Spanish Latin American Female");
});
