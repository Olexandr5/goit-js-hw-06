let countValues = 0;
const valueElm = document.querySelector("#value");
const plusElm = document.querySelector('button[data-action="increment"]');
const minusElm = document.querySelector('button[data-action="decrement"]');

plusElm.addEventListener("click", () => {
  countValues++;
  valueElm.textContent = countValues;
});
minusElm.addEventListener("click", () => {
  countValues--;
  valueElm.textContent = countValues;
});
