const getCurrentTime = () => {
  const time = new Date();
  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');
  const seconds = time.getSeconds().toString().padStart(2, '0');
  return `${hours}${minutes}${seconds}`;
};

const getDigitalTime = (digitalTime) => {
  for (let i = 0; i < digitalTime.length; i++) {
    const digitalIcon = document.getElementsByClassName('digital-icon')[i];
    digitalIcon.innerHTML = digitalTime[i];
  }
};

const convertTimeToBinary = (currentTime) => {
  getCurrentTime();
  return currentTime
    .split('')
    .map((digit) => parseInt(digit).toString(2).padStart(4, '0'));
};

const getBinaryTime = (currentTime) => {
  const binaryTimeArray = convertTimeToBinary(currentTime);
  for (let i = 0; i < binaryTimeArray.length; i++) {
    for (let j = 0; j < binaryTimeArray[i].length; j++) {
      if (binaryTimeArray[i][j] === '1') {
        document
          .getElementsByClassName('binary-unit')
          [i].getElementsByClassName('binary-icon')
          [j].classList.add('light-on');
      } else {
        document
          .getElementsByClassName('binary-unit')
          [i].getElementsByClassName('binary-icon')
          [j].classList.remove('light-on');
      }
    }
  }
};
const changeColorBinaryIcon = () => {
  let colorChange = document.getElementById('color-type').value;
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 4; j++) {
      if (
        document
          .getElementsByClassName('binary-unit')
          [i].getElementsByClassName('binary-icon')
          [j].matches('.light-on')
      ) {
        document
          .getElementsByClassName('binary-unit')
          [i].getElementsByClassName('binary-icon')[j].style[
          'background-color'
        ] = colorChange;
      } else {
        document
          .getElementsByClassName('binary-unit')
          [i].getElementsByClassName('binary-icon')[j].style[
          'background-color'
        ] = 'rgb(118, 111, 111)';
      }
    }
  }
};

const getDinosaurDom = () => {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 6; j++) {
      document
        .getElementsByClassName('binary-unit')
        [j].getElementsByClassName('binary-icon')[0]
        .remove();
    }
  }
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 4; j++) {
      document
        .getElementsByClassName('binary-unit')
        [i].appendChild(document.createElement('img'))
        .classList.add('binary-icon');
    }
  }
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 4; j++) {
      document
        .getElementsByClassName('binary-unit')
        [i].getElementsByClassName('binary-icon')[j].src =
        'https://svgsilh.com/svg/309638.svg';
    }
  }
  if (document.getElementById('display-unusable').checked) {
    displayChange();
  }
};
const getCircleDom = () => {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 6; j++) {
      document
        .getElementsByClassName('binary-unit')
        [j].getElementsByClassName('binary-icon')[0]
        .remove();
    }
  }
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 4; j++) {
      document
        .getElementsByClassName('binary-unit')
        [i].appendChild(document.createElement('div'))
        .classList.add('binary-icon');
    }
  }
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 4; j++) {
      document
        .getElementsByClassName('binary-unit')
        [i].getElementsByClassName('binary-icon')
        [j].classList.add('circle');
    }
  }
  if (document.getElementById('display-unusable').checked === true) {
    displayChange();
  }
};

const getHearthDom = () => {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 6; j++) {
      document
        .getElementsByClassName('binary-unit')
        [j].getElementsByClassName('binary-icon')[0]
        .remove();
    }
  }
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 4; j++) {
      document
        .getElementsByClassName('binary-unit')
        [i].appendChild(document.createElement('img'))
        .classList.add('binary-icon');
    }
  }
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 4; j++) {
      document
        .getElementsByClassName('binary-unit')
        [i].getElementsByClassName('binary-icon')[j].src =
        'https://upload.wikimedia.org/wikipedia/commons/4/4f/Ei-heart.svg';
    }
  }
  if (document.getElementById('display-unusable').checked === true) {
    displayChange();
  }
};
const getCrescentDom = () => {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 6; j++) {
      document
        .getElementsByClassName('binary-unit')
        [j].getElementsByClassName('binary-icon')[0]
        .remove();
    }
  }
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 4; j++) {
      document
        .getElementsByClassName('binary-unit')
        [i].appendChild(document.createElement('img'))
        .classList.add('binary-icon');
    }
  }
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 4; j++) {
      document
        .getElementsByClassName('binary-unit')
        [i].getElementsByClassName('binary-icon')[j].src =
        'https://upload.wikimedia.org/wikipedia/commons/2/2a/Moon_symbol_crescent.svg';
    }
  }
  if (document.getElementById('display-unusable').checked) {
    displayChange();
  }
};

const displayChange = () => {
  const hidingDomArr = [
    [0, 0],
    [0, 1],
    [2, 0],
    [4, 0],
  ];
  if (document.getElementById('display-unusable').checked) {
    for (let i = 0; i < hidingDomArr.length; i++) {
      document
        .getElementsByClassName('binary-unit')
        [hidingDomArr[i][0]].getElementsByClassName('binary-icon')
        [hidingDomArr[i][1]].classList.add('hiding');
    }
  } else {
    for (let i = 0; i < hidingDomArr.length; i++) {
      document
        .getElementsByClassName('binary-unit')
        [hidingDomArr[i][0]].getElementsByClassName('binary-icon')
        [hidingDomArr[i][1]].classList.remove('hiding');
    }
  }
};

setInterval(() => {
  getBinaryTime(getCurrentTime());
  getDigitalTime(getCurrentTime());
}, 1000);
