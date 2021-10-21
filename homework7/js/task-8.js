const inputRef = document.querySelector('input');
const createBtnRef = document.querySelector('button[data-action="render"]');
const deleteBtnRef = document.querySelector('button[data-action="destroy"]');
const boxesRef = document.querySelector('#boxes');

createBtnRef.addEventListener('click', createBoxes);
deleteBtnRef.addEventListener('click', deleteBoxes);

const inputChange = event => {
  inputRef.setAttribute('count', Number(event.target.value));
};
inputRef.addEventListener('input', inputChange);

function randomBgColor() {
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  let bgColor = 'rgb(' + x + ',' + y + ',' + z + ')';
  return bgColor;
}
randomBgColor();

let baseBoxSize = 20;

function createBoxes() {
  let amount = Number(inputRef.getAttribute('count'));
  for (let i = 0; i < amount; i++) {
    const createdDiv = document.createElement('div');
    createdDiv.classList.add('new-box');
    baseBoxSize += 10;
    createdDiv.style.height = baseBoxSize + 'px';
    createdDiv.style.width = baseBoxSize + 'px';
    createdDiv.style.backgroundColor = randomBgColor();
    boxesRef.appendChild(createdDiv);
  }
}

function deleteBoxes() {
  const newBoxes = document.querySelectorAll('.new-box');
  for (let box of newBoxes) {
    boxesRef.removeChild(box);
  }
  baseBoxSize = 20;
}
