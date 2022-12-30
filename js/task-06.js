const input = document.querySelector('#validation-input');
input.addEventListener('blur', e => {
  const { value, dataset } = e.target;
  if (Number(dataset.length) === value.length) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  } else {
    input.classList.remove('valid');
    input.classList.add('invalid');
  }
});
