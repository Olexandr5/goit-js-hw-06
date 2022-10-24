function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const changeButon = document.querySelector(".change-color");
const body = document.querySelector("body");
const colorChange = document.querySelector(".color");

changeButon.addEventListener("click", changeColor);
function changeColor() {
  let color = getRandomHexColor();
  body.style.background = color;
  colorChange.textContent = color;
}
