const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const startBtnRef = document.querySelector('[data-action="start"]');
const stopBtnRef = document.querySelector('[data-action="stop"]');
const bodyRef = document.querySelector('body');

let interval = null;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const setBg = () => {
  interval = setInterval(() => {
    bodyRef.style.backgroundColor =
      colors[randomIntegerFromInterval(0, colors.length - 1)];
  }, 1000);
  startBtnRef.disabled = true;
  startBtnRef.classList.add('active');
  stopBtnRef.classList.remove('active');
};

const onBtnClose = () => {
  clearInterval(interval);
  startBtnRef.disabled = false;
  stopBtnRef.classList.add('active');
  startBtnRef.classList.remove('active');
};

startBtnRef.addEventListener('click', setBg);
stopBtnRef.addEventListener('click', onBtnClose);
