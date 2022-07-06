const getCurrentTime = () => {
  const time = new Date();
  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');
  const seconds = time.getSeconds().toString().padStart(2, '0');
  return `${hours}${minutes}${seconds}`;
};

const getDigitalTime = () => {
  const digitalTime = getCurrentTime();
  for (let i = 0; i < digitalTime.length; i++) {
    const digitalIcon = document.getElementsByClassName('digital-icon')[i];
    digitalIcon.innerHTML = digitalTime[i];
  }
};

const convertTimeToBinary = () => {
  const currentTime = getCurrentTime();
  return currentTime
    .split('')
    .map((digit) => parseInt(digit).toString(2).padStart(4, '0'));
};

const getBinaryTime = () => {
  const binaryTimeArray = convertTimeToBinary();
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

setInterval(() => {
  getBinaryTime();
  getDigitalTime();
}, 1000);
