const inputref = document.querySelector('#validation-input');

inputref.addEventListener('blur', event => {
  inputref.textContent = event.target.value;
  const inputAtr = inputref.getAttribute('data-length');
  inputref.classList.add(
    inputref.textContent.length == inputAtr
      ? 'valid'
      : 'invalid',
  );
});


