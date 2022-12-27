const playButton = document.getElementById('play');
const availableVoices = [
  {
    apiName: "UK English Female",
    flag: '🇬🇧',
    gender: 'Female'
  },
  {
    apiName: "UK English Male",
    flag: '🇬🇧',
    gender: 'Male'
  },
  {
    apiName: "US English Female",
    flag: '🇺🇲',
    gender: 'Female'
  },
  {
    apiName: "US English Male",
    flag: '🇺🇲',
    gender: 'Male'
  },
  {
    apiName: "Arabic Male",
    flag: '🇸🇦',
    gender: 'Male'
  },
  {
    apiName: "Arabic Female",
    flag: '🇸🇦',
    gender: 'Female'
  },
  {
    apiName: "Armenian Male",
    flag: '🇦🇲',
    gender: 'Male'
  },
  {
    apiName: "Australian Female",
    flag: '🇦🇺',
    gender: 'Female'
  },
  {
    apiName: "Australian Male",
    flag: '🇦🇺',
    gender: 'Male'
  },
  {
    apiName: "Bangla Bangladesh Female",
    flag: '🇧🇩',
    gender: 'Female'
  },
  {
    apiName: "Bangla Bangladesh Male",
    flag: '🇧🇩',
    gender: 'Male'
  },
  {
    apiName: "Bangla India Female",
    flag: '🇮🇳',
    gender: 'Female'
  },
  {
    apiName: "Bangla India Male",
    flag: '🇮🇳',
    gender: 'Male'
  },
  {
    apiName: "Brazilian Portuguese Female",
    flag: '🇧🇷',
    gender: 'Female'
  },
  {
    apiName: "Chinese Female",
    flag: '🇨🇳',
    gender: 'Female'
  },
  {
    apiName: "Chinese Male",
    flag: '🇨🇳',
    gender: 'Male'
  },
  {
    apiName: "Chinese (Hong Kong) Female",
    flag: '🇭🇰',
    gender: 'Female'
  },
  {
    apiName: "Chinese (Hong Kong) Male",
    flag: '🇭🇰',
    gender: 'Male'
  },
  {
    apiName: "Chinese Taiwan Female",
    flag: '🇹🇼',
    gender: 'Female'
  },
  {
    apiName: "Chinese Taiwan Male",
    flag: '🇹🇼',
    gender: 'Male'
  },
  {
    apiName: "Czech Female",
    flag: '🇨🇿',
    gender: 'Female'
  },
  {
    apiName: "Danish Female",
    flag: '🇩🇰',
    gender: 'Female'
  },
  {
    apiName: "Deutsch Female",
    flag: '🇩🇪',
    gender: 'Female'
  },
  {
    apiName: "Deutsch Male",
    flag: '🇩🇪',
    gender: 'Male'
  },
  {
    apiName: "Dutch Female",
    flag: '🇳🇱',
    gender: 'Female'
  },
  {
    apiName: "Dutch Male",
    flag: '🇳🇱',
    gender: 'Male'
  },
  {
    apiName: "Estonian Male",
    flag: '🇪🇪',
    gender: 'Male'
  },
  {
    apiName: "Filipino Female",
    flag: '🇵🇭',
    gender: 'Female'
  },
  {
    apiName: "Finnish Female",
    flag: '🇫🇮',
    gender: 'Female'
  },
  {
    apiName: "French Female",
    flag: '🇫🇷',
    gender: 'Female'
  },
  {
    apiName: "French Male",
    flag: '🇫🇷',
    gender: 'Male'
  },
  {
    apiName: "French Canadian Female",
    flag: '🇫🇷🇨🇦',
    gender: 'Female'
  },
  {
    apiName: "French Canadian Male",
    flag: '🇫🇷🇨🇦',
    gender: 'Male'
  },
  {
    apiName: "Greek Female",
    flag: '🇬🇷',
    gender: 'Female'
  },
  {
    apiName: "Hindi Female",
    flag: '🇮🇳',
    gender: 'Female'
  },
  {
    apiName: "Hindi Male",
    flag: '🇮🇳',
    gender: 'Male'
  },
  {
    apiName: "Hungarian Female",
    flag: '🇭🇺',
    gender: 'Female'
  },
  {
    apiName: "Indonesian Female",
    flag: '🇮🇩',
    gender: 'Female'
  },
  {
    apiName: "Indonesian Male",
    flag: '🇮🇩',
    gender: 'Male'
  },
  {
    apiName: "Italian Female",
    flag: '🇮🇹',
    gender: 'Female'
  },
  {
    apiName: "Italian Male",
    flag: '🇮🇹',
    gender: 'Male'
  },
  {
    apiName: "Japanese Female",
    flag: '🇯🇵',
    gender: 'Female'
  },
  {
    apiName: "Japanese Male",
    flag: '🇯🇵',
    gender: 'Male'
  },
  {
    apiName: "Korean Female",
    flag: '🇰🇷',
    gender: 'Female'
  },
  {
    apiName: "Korean Male",
    flag: '🇰🇷',
    gender: 'Male'
  },
  {
    apiName: "Nepali",
    flag: '🇳🇵',
    gender: 'Male'
  },
  {
    apiName: "Norwegian Female",
    flag: '🇳🇴',
    gender: 'Female'
  },
  {
    apiName: "Norwegian Male",
    flag: '🇳🇴',
    gender: 'Male'
  },
  {
    apiName: "Polish Female",
    flag: '🇵🇱',
    gender: 'Female'
  },
  {
    apiName: "Polish Male",
    flag: '🇵🇱',
    gender: 'Male'
  },
  {
    apiName: "Portuguese Female",
    flag: '🇵🇹',
    gender: 'Female'
  },
  {
    apiName: "Portuguese Male",
    flag: '🇵🇹',
    gender: 'Male'
  },
  {
    apiName: "Romanian Female",
    flag: '🇷🇴',
    gender: 'Female'
  },
  {
    apiName: "Russian Female",
    flag: '🇷🇺',
    gender: 'Female'
  },
  {
    apiName: "Slovak Female",
    flag: '🇸🇰',
    gender: 'Female'
  },
  {
    apiName: "Spanish Female",
    flag: '🇪🇸',
    gender: 'Female'
  },
  {
    apiName: "Spanish Latin American Female",
    flag: '🇲🇽',
    gender: 'Female'
  },
  {
    apiName: "Spanish Latin American Male",
    flag: '🇲🇽',
    gender: 'Male'
  },
  {
    apiName: "Swedish Female",
    flag: '🇸🇪',
    gender: 'Female'
  },
  {
    apiName: "Swedish Male",
    flag: '🇸🇪',
    gender: 'Male'
  },
  {
    apiName: "Turkish Female",
    flag: '🇹🇷',
    gender: 'Female'
  },
  {
    apiName: "Turkish Male",
    flag: '🇹🇷',
    gender: 'Male'
  },
  {
    apiName: "Ukrainian Female",
    flag: '🇺🇦',
    gender: 'Female'
  },
  {
    apiName: "Vietnamese Female",
    flag: '🇻🇳',
    gender: 'Female'
  },
  {
    apiName: "Vietnamese Male",
    flag: '🇻🇳',
    gender: 'Male'
  }
];

// options
const selectFlag = document.getElementById('flags');
const genderList = document.getElementById('gender');

const onlyFlagsUnique = new Set(availableVoices.map(pl => pl.flag));

onlyFlagsUnique.forEach(flag => {
  const optionElement = document.createElement("option");
  optionElement.text = flag;
  optionElement.value = flag;
  selectFlag.appendChild(optionElement);
});

playButton.addEventListener('click', () => {
  const textArea = document.getElementById('inputText');
  const selectedFlag = selectFlag.value;
  const selectedGender = genderList.value;

  const option = availableVoices.filter(fl => fl.flag === selectedFlag).filter(fl => fl.gender === selectedGender);

  responsiveVoice.speak(textArea.value, option[0].apiName);
});

const selectFlags = document.getElementById('flags');
