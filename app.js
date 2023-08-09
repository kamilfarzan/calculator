import { add, subtract, multiply, divide } from "./js/functions.js";

let displayValue = 0;

function setEventListeners() {
  const numbers = document.querySelectorAll(`#digit`);
  numbers.forEach((el) => {
    el.addEventListener(`click`, (e) => {
      e.preventDefault();
      appendDisplayValue(el.value);
    });
  });

  const clear = document.querySelector(`#clear`);
  clear.addEventListener(`click`, clearDisplayValue);
}
setEventListeners();

function clearDisplayValue() {
  const screen = document.querySelector(`#screen`);
  screen.textContent = `0`;
  displayValue = `0`;
}

function appendDisplayValue(val) {
  const screen = document.querySelector(`#screen`);
  if (screen.textContent == `0`) {
    screen.textContent = `${val.toString()}`;
  } else {
    screen.textContent = `${screen.textContent + val.toString()}`;
  }
  displayValue = screen.textContent;
}

function operate(a, operator, b) {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
  }
}

let firstNum = 2;
let secondNum = 2;
let operator = "+";
