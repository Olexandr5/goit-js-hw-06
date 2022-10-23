const inputElm = document.querySelector("#validation-input");
inputElm.addEventListener("blur", outputElm);
function outputElm(event) {
  if (event.target.value.length == inputElm.getAttribute("data-length")) {
    inputElm.classList.add("valid");
    if (inputElm.classList.contains("invalid")) {
      inputElm.classList.remove("invalid");
    }
  } else {
    if (inputElm.classList.contains("valid")) {
      inputElm.classList.remove("valid");
    }
    inputElm.classList.add("invalid");
  }
}
