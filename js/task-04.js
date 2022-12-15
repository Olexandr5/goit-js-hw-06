class Counter {
  constructor(selector, step, initialValue) {
    this.counterContainer = document.querySelector(selector);
    this.incrementBtn = this.counterContainer.querySelector("[data-action='increment']");
    this.dicrementBtn = this.counterContainer.querySelector("[data-action='decrement']");
    this.spanRef = this.counterContainer.querySelector('#value');
    this.step = step;
    this.initialValue = initialValue;
    this.addListeners();
  }
  addListeners = () => {
    this.spanRef.textContent = this.initialValue;
    this.incrementBtn.textContent = `+ ${this.step}`;
    this.dicrementBtn.textContent = `- ${this.step}`;
    this.incrementBtn.addEventListener('click', this.hendelIncriment);
    this.dicrementBtn.addEventListener('click', this.hendelDecrement);
  };
  hendelIncriment = () => {
    this.initialValue += this.step;
    this.spanRef.textContent = this.initialValue;
  };
  hendelDecrement = () => {
    this.initialValue -= this.step;
    this.spanRef.textContent = this.initialValue;
  };
}
const counter1 = new Counter('#counter', 5, 0);
// counter1.addListeners();
const counter2 = new Counter('#counter2', 10, 100);
