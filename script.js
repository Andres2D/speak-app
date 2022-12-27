import { getFlagSvg } from 'empty-skull';

const playButton = document.getElementById('play');

playButton.addEventListener('click', () => {
  const textArea = document.getElementById('inputText');
  responsiveVoice.speak(textArea.value, "Spanish Latin American Female");
});

const selectFlags = document.getElementById('flags');

const optionChanged = () => {
  console.log('Cambiadiño');
};

// nt :(
// selectFlags.addEventListener('change', optionChanged);

// const addSelect = () => {
//   const option = document.createElement('option');
//   const valueOption = "";
//   option.value = valueOption;
//   option.text = valueOption;
//   selectFlags.appendChild(option);
//   //https://parzibyte.me/blog/2019/07/07/select-javascript-agregar-limpiar-obtener-escuchar-cambios/#:~:text=sino%20un%20elemento.-,Agregar%20option%20a%20select%20con%20JavaScript,al%20m%C3%A9todo%20appendChild%20del%20select%20.
//  //https://github.com/Andres2D/empty-skull-npm
// };
