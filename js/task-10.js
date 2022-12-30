const create = document.querySelector('[data-create]');
const destroy = document.querySelector('[data-destroy]');
const count = document.querySelector('input');
const boxes = document.querySelector('#boxes');
function createBoxes(amount) {
  const boxesList = [];

  for (let i = 0; i < amount; i++) {
    const boxEl = document.createElement('div');
    boxEl.style = `
 background:${getRandomHexColor()};
 width:${30 + i * 10}px;
 height:${30 + i * 10}px;
 `;
    boxesList.push(boxEl);
  }
  boxes.append(...boxesList);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function destroyBoxes() {
  boxes.innerHTML = '';
  count.value = '';
}
create.addEventListener('click', e => {
  boxes.innerHTML = '';
  createBoxes(Number(count.value));
});
destroy.addEventListener('click', destroyBoxes);
