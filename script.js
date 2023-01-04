const playButton = document.getElementById('play');
const availableVoices = [
  {
    apiName: "UK English Female",
    accent: 'UK',
    flag: 'https://flagcdn.com/gb.svg',
    gender: 'Female',
    id: 1
  },
  {
    apiName: "UK English Male",
    accent: 'UK',
    flag: 'https://flagcdn.com/gb.svg',
    gender: 'Male',
    id: 1
  },
  {
    apiName: "US English Female",
    accent: 'US',
    flag: 'https://flagcdn.com/us.svg',
    gender: 'Female',
    id: 2
  },
  {
    apiName: "US English Male",
    accent: 'US',
    flag: 'https://flagcdn.com/us.svg',
    gender: 'Male',
    id: 2
  },
  {
    apiName: "Arabic Male",
    accent: 'Arabic',
    flag: 'https://flagcdn.com/sa.svg',
    gender: 'Male',
    id: 3
  },
  {
    apiName: "Arabic Female",
    accent: 'Arabic',
    flag: 'https://flagcdn.com/sa.svg',
    gender: 'Female',
    id: 3
  },
  {
    apiName: "Armenian Male",
    accent: 'Armenian',
    flag: 'https://flagcdn.com/am.svg',
    gender: 'Male',
    id: 4
  },
  {
    apiName: "Australian Female",
    accent: 'Australian',
    flag: 'https://flagcdn.com/au.svg',
    gender: 'Female',
    id: 5
  },
  {
    apiName: "Australian Male",
    accent: 'Australian',
    flag: 'https://flagcdn.com/au.svg',
    gender: 'Male',
    id: 5
  },
  {
    apiName: "Bangla Bangladesh Female",
    accent: 'Bangladesh',
    flag: 'https://flagcdn.com/bd.svg',
    gender: 'Female',
    id: 6
  },
  {
    apiName: "Bangla Bangladesh Male",
    accent: 'Bangladesh',
    flag: 'https://flagcdn.com/bd.svg',
    gender: 'Male',
    id: 6
  },
  {
    apiName: "Brazilian Portuguese Female",
    accent: 'Portuguese',
    flag: 'https://flagcdn.com/br.svg',
    gender: 'Female',
    id: 7
  },
  {
    apiName: "Chinese Female",
    accent: 'Chinese',
    flag: 'https://flagcdn.com/cn.svg',
    gender: 'Female',
    id: 8
  },
  {
    apiName: "Chinese Male",
    accent: 'Chinese',
    flag: 'https://flagcdn.com/cn.svg',
    gender: 'Male',
    id: 8
  },
  {
    apiName: "Chinese (Hong Kong) Female",
    accent: 'Hong Kong',
    flag: 'https://flagcdn.com/hk.svg',
    gender: 'Female',
    id: 9
  },
  {
    apiName: "Chinese (Hong Kong) Male",
    accent: 'Hong Kong',
    flag: 'https://flagcdn.com/hk.svg',
    gender: 'Male',
    id: 9
  },
  {
    apiName: "Chinese Taiwan Female",
    accent: 'Taiwan',
    flag: 'https://flagcdn.com/tw.svg',
    gender: 'Female',
    id: 10
  },
  {
    apiName: "Chinese Taiwan Male",
    accent: 'Taiwan',
    flag: 'https://flagcdn.com/tw.svg',
    gender: 'Male',
    id: 10
  },
  {
    apiName: "Czech Female",
    accent: 'Czech',
    flag: 'https://flagcdn.com/cz.svg',
    gender: 'Female',
    id: 11
  },
  {
    apiName: "Danish Female",
    accent: 'Danish',
    flag: 'https://flagcdn.com/dk.svg',
    gender: 'Female',
    id: 12
  },
  {
    apiName: "Deutsch Female",
    accent: 'Deutsch',
    flag: 'https://flagcdn.com/de.svg',
    gender: 'Female',
    id: 13
  },
  {
    apiName: "Deutsch Male",
    accent: 'Deutsch',
    flag: 'https://flagcdn.com/de.svg',
    gender: 'Male',
    id: 13
  },
  {
    apiName: "Dutch Female",
    accent: 'Dutch',
    flag: 'https://flagcdn.com/nl.svg',
    gender: 'Female',
    id: 14
  },
  {
    apiName: "Dutch Male",
    accent: 'Dutch',
    flag: 'https://flagcdn.com/nl.svg',
    gender: 'Male',
    id: 14
  },
  {
    apiName: "Estonian Male",
    accent: 'Estonian',
    flag: 'https://flagcdn.com/ee.svg',
    gender: 'Male',
    id: 15
  },
  {
    apiName: "Filipino Female",
    accent: 'Filipino',
    flag: 'https://flagcdn.com/ph.svg',
    gender: 'Female',
    id: 16
  },
  {
    apiName: "Finnish Female",
    accent: 'Finnish',
    flag: 'https://flagcdn.com/fi.svg',
    gender: 'Female',
    id: 17
  },
  {
    apiName: "French Female",
    accent: 'French',
    flag: 'https://flagcdn.com/fr.svg',
    gender: 'Female',
    id: 18
  },
  {
    apiName: "French Male",
    accent: 'French',
    flag: 'https://flagcdn.com/fr.svg',
    gender: 'Male',
    id: 18
  },
  {
    apiName: "French Canadian Female",
    accent: 'French Canadian',
    flag: 'https://flagcdn.com/ca.svg',
    gender: 'Female',
    id: 19
  },
  {
    apiName: "French Canadian Male",
    accent: 'French Canadian',
    flag: 'https://flagcdn.com/ca.svg',
    gender: 'Male',
    id: 19
  },
  {
    apiName: "Greek Female",
    accent: 'Greek',
    flag: 'https://flagcdn.com/gr.svg',
    gender: 'Female',
    id: 20
  },
  {
    apiName: "Hindi Female",
    accent: 'Hindi',
    flag: 'https://flagcdn.com/in.svg',
    gender: 'Female',
    id: 21
  },
  {
    apiName: "Hindi Male",
    accent: 'Hindi',
    flag: 'https://flagcdn.com/in.svg',
    gender: 'Male',
    id: 21
  },
  {
    apiName: "Hungarian Female",
    accent: 'Hungarian',
    flag: 'https://flagcdn.com/hu.svg',
    gender: 'Female',
    id: 22
  },
  {
    apiName: "Indonesian Female",
    accent: 'Indonesian',
    flag: 'https://flagcdn.com/id.svg',
    gender: 'Female',
    id: 23
  },
  {
    apiName: "Indonesian Male",
    accent: 'Indonesian',
    flag: 'https://flagcdn.com/id.svg',
    gender: 'Male',
    id: 23
  },
  {
    apiName: "Italian Female",
    accent: 'Italian',
    flag: 'https://flagcdn.com/it.svg',
    gender: 'Female',
    id: 24
  },
  {
    apiName: "Italian Male",
    accent: 'Italian',
    flag: 'https://flagcdn.com/it.svg',
    gender: 'Male',
    id: 24
  },
  {
    apiName: "Japanese Female",
    accent: 'Japanese',
    flag: 'https://flagcdn.com/jp.svg',
    gender: 'Female',
    id: 25
  },
  {
    apiName: "Japanese Male",
    accent: 'Japanese',
    flag: 'https://flagcdn.com/jp.svg',
    gender: 'Male',
    id: 25
  },
  {
    apiName: "Korean Female",
    accent: 'Korean',
    flag: 'https://flagcdn.com/kr.svg',
    gender: 'Female',
    id: 26
  },
  {
    apiName: "Korean Male",
    accent: 'Korean',
    flag: 'https://flagcdn.com/kr.svg',
    gender: 'Male',
    id: 26
  },
  {
    apiName: "Nepali",
    accent: 'Nepali',
    flag: 'https://flagcdn.com/np.svg',
    gender: 'Male',
    id: 27
  },
  {
    apiName: "Norwegian Female",
    accent: 'Norwegian',
    flag: 'https://flagcdn.com/no.svg',
    gender: 'Female',
    id: 28
  },
  {
    apiName: "Norwegian Male",
    accent: 'Norwegian',
    flag: 'https://flagcdn.com/no.svg',
    gender: 'Male',
    id: 28
  },
  {
    apiName: "Polish Female",
    accent: 'Polish',
    flag: 'https://flagcdn.com/pl.svg',
    gender: 'Female',
    id: 29
  },
  {
    apiName: "Polish Male",
    accent: 'Polish',
    flag: 'https://flagcdn.com/pl.svg',
    gender: 'Male',
    id: 29
  },
  {
    apiName: "Portuguese Female",
    accent: 'Portuguese',
    flag: 'https://flagcdn.com/pt.svg',
    gender: 'Female',
    id: 30
  },
  {
    apiName: "Portuguese Male",
    accent: 'Portuguese',
    flag: 'https://flagcdn.com/pt.svg',
    gender: 'Male',
    id: 30
  },
  {
    apiName: "Romanian Female",
    accent: 'Romanian',
    flag: 'https://flagcdn.com/ro.svg',
    gender: 'Female',
    id: 31
  },
  {
    apiName: "Russian Female",
    accent: 'Russian',
    flag: 'https://flagcdn.com/ru.svg',
    gender: 'Female',
    id: 32
  },
  {
    apiName: "Slovak Female",
    accent: 'Slovak',
    flag: 'https://flagcdn.com/sk.svg',
    gender: 'Female',
    id: 33
  },
  {
    apiName: "Spanish Female",
    accent: 'Spanish',
    flag: 'https://flagcdn.com/es.svg',
    gender: 'Female',
    id: 34
  },
  {
    apiName: "Spanish Latin American Female",
    accent: 'Spanish Latin American',
    flag: 'https://flagcdn.com/mx.svg',
    gender: 'Female',
    id: 35
  },
  {
    apiName: "Spanish Latin American Male",
    accent: 'Spanish Latin American',
    flag: 'https://flagcdn.com/mx.svg',
    gender: 'Male',
    id: 35
  },
  {
    apiName: "Swedish Female",
    accent: 'Swedish',
    flag: 'https://flagcdn.com/se.svg',
    gender: 'Female',
    id: 36
  },
  {
    apiName: "Swedish Male",
    accent: 'Swedish',
    flag: 'https://flagcdn.com/se.svg',
    gender: 'Male',
    id: 36
  },
  {
    apiName: "Turkish Female",
    accent: 'Turkish',
    flag: 'https://flagcdn.com/tr.svg',
    gender: 'Female',
    id: 37
  },
  {
    apiName: "Turkish Male",
    accent: 'Turkish',
    flag: 'https://flagcdn.com/tr.svg',
    gender: 'Male',
    id: 37
  },
  {
    apiName: "Ukrainian Female",
    accent: 'Ukrainian',
    flag: 'https://flagcdn.com/ua.svg',
    gender: 'Female',
    id: 38
  },
  {
    apiName: "Vietnamese Female",
    accent: 'Vietnamese',
    flag: 'https://flagcdn.com/vn.svg',
    gender: 'Female',
    id: 39
  },
  {
    apiName: "Vietnamese Male",
    accent: 'Vietnamese',
    flag: 'https://flagcdn.com/vn.svg',
    gender: 'Male',
    id: 39
  }
];

// Flags
const selectFlag = document.getElementById('flags');
const onlyFlagsUnique = new Set(availableVoices.map(f => f.flag));
let countFlags = 0;

onlyFlagsUnique.forEach(flag => {
  countFlags++;
  const optionElement = document.createElement("li");
  optionElement.setAttribute("class", "flagList");
  optionElement.setAttribute("onclick", `handleClick("${countFlags}")`);
  const imgElment = document.createElement("img");
  imgElment.setAttribute("class", "imgList");
  imgElment.src = flag;
  optionElement.appendChild(imgElment);  
  selectFlag.appendChild(optionElement);
});

const handleClick = (fi) => { // fi = Flag ID
  console.log(fi);
};

// Scroll Flags
const arrowTop = document.getElementById('top');
const arrowDown = document.getElementById('down');
const scrollList = document.getElementById('divFlags');

arrowTop.addEventListener('click', () => {
  scrollList.scrollTop -= 410
})

arrowDown.addEventListener('click', () => {
  scrollList.scrollTop += 410
})

// Play
const genderList = document.getElementById('gender');

playButton.addEventListener('click', () => {
  const textArea = document.getElementById('inputText');
  const selectedFlag = selectFlag.value;
  const selectedGender = genderList.value;

  const option = availableVoices.filter(fl => fl.flag === selectedFlag).filter(fl => fl.gender === selectedGender);

  responsiveVoice.speak(textArea.value, option[0].apiName);
});

const selectFlags = document.getElementById('flags');
