const nameInput = document.querySelector("#name-input");
nameInput.addEventListener("input", onInput);
const nameOutput = document.querySelector("#name-output");

function onInput(event) {
  nameOutput.textContent = event.currentTarget.value;
  if (event.currentTarget.value === "") {
    nameOutput.textContent = "Anonymous";
  }
}
