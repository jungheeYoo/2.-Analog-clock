const createDom = ($container) => {
  // 동적으로 DOM 요소 생성
  const hourHand = document.createElement('div');
  const minuteHand = document.createElement('div');
  const secondHand = document.createElement('div');

  hourHand.classList.add('hand', 'hour');
  minuteHand.classList.add('hand', 'minute');
  secondHand.classList.add('hand', 'second');

  // 눈금선 추가
  for (let i = 1; i <= 12; i++) {
    const timeLine = document.createElement('div');
    timeLine.classList.add('time', `time${i}`);
    timeLine.textContent = 'ㅣ';
    $container.append(timeLine);
  }

  $container.append(hourHand, minuteHand, secondHand);

  return { hourHand, minuteHand, secondHand };
};

// 시계 동작
const runClock = (hourHand, minuteHand, secondHand) => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const hourDeg = (hours % 12) * 30 + minutes * 0.5;
  const minuteDeg = minutes * 6;
  const secondDeg = seconds * 6;
  hourHand.style.setProperty('--deg', hourDeg);
  minuteHand.style.setProperty('--deg', minuteDeg);
  secondHand.style.setProperty('--deg', secondDeg);
};

const AnalogClock = ($container) => {
  // do something!
  const { hourHand, minuteHand, secondHand } = createDom($container);
  setInterval(() => {
    runClock(hourHand, minuteHand, secondHand);
  }, 1000);
};

export default AnalogClock;
