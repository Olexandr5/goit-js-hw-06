const fontSize = document.querySelector("#font-size-control");
const valueText = document.querySelector("#text");

fontSize.addEventListener("input", sizeText);
function sizeText(event) {
  valueText.style.fontSize = `${event.target.value}px`;
}
