const input = document.querySelector('#name-input');
const span = document.querySelector('#name-output');

input.addEventListener('input', () => {
  input.value
    ? (span.textContent = input.value)
    : (span.textContent = 'Anonymous');
});
