const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

text.style.fontSize = `${input.value}px`;

input.addEventListener('input', e => {
  text.style.fontSize = `${e.target.value}px`;
});
