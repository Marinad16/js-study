const decrementRef = document.querySelector('button[data-action="decrement"]');
const incrementRef = document.querySelector('button[data-action="increment"]');

decrementRef.addEventListener('click', () => {
  newFunction(-1);
});

incrementRef.addEventListener('click', () => {
  newFunction(1);
});

function newFunction(v) {
  const counterValueRef = document.querySelector('#value');
  let curentValue = parseInt(counterValueRef.textContent);
  curentValue += v;
  counterValueRef.textContent = curentValue;
}
