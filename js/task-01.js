const itemElm = document.querySelectorAll(".item");
console.log(`Number of categories: ${itemElm.length}`);
itemElm.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});
