const itemsList = document.querySelectorAll('.item');
console.log(`
Number of categories: ${itemsList.length}`);

itemsList.forEach(item => {
  const titleItem = item.querySelector('h2');
  const elementsItem = item.querySelectorAll('li');
  console.log(`
Category: ${titleItem.textContent}
Elements: ${elementsItem.length}`);
});
