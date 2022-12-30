const incrementCount = document.querySelector('[data-action="increment"]');
const decrementCount = document.querySelector('[data-action="decrement"]');
const countValue = document.querySelector('span');

let count = 0;
incrementCount.addEventListener('click', () => {
  count += 1;
  countValue.innerHTML = count;
});
decrementCount.addEventListener('click', () => {
  count -= 1;
  countValue.innerHTML = count;
});
