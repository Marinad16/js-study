const inputRef = document.querySelector('#name-input');
const spanref = document.querySelector('#name-output');

inputRef.addEventListener('input', event => {
  spanref.textContent = event.target.value;

  if (spanref.textContent === '') {
    spanref.textContent = 'незнакомец'
  }
})
