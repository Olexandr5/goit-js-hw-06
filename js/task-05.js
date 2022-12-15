// const nameInput = document.querySelector("#name-input");
// nameInput.addEventListener("input", onInput);
// const nameOutput = document.querySelector("#name-output");

// function onInput(event) {
//   nameOutput.textContent = event.currentTarget.value;
//   if (event.currentTarget.value === "") {
//     nameOutput.textContent = "Anonymous";
//   }
// }

const refs = {
  input: document.querySelector('#name-input'),
  span: document.querySelector('#name-input'),
};
refs.input.addEventListener('input', onChange);
function onChange(event) {
  refs.span.textContent = event.target.value;
}
