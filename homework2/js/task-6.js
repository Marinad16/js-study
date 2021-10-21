let inputNumber;
const numbers = [];
let total = 0;

const input = document.querySelector('input[name="number"]');

const userButtonInput = document.querySelector('.input');
const userButtonTotal = document.querySelector('.total');

userButtonInput.addEventListener('click', function () {
  inputNumber = Number(input.value);

  if (!Number.isNaN(inputNumber)) {
  numbers.push(inputNumber);
  } else {
    console.log('Было введено не число, попробуйте еще раз');
  }
  input.value = '';
    console.log(numbers);
});

userButtonTotal.addEventListener('click', function () {
  for (const number of numbers) {
    total += number;
  }
console.log(total);
});
