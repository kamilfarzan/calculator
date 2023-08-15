import { add, subtract, multiply, divide } from "./js/functions.js";

let firstNum = 0;
let operator = "+";
let secondNum = null;
let operandSwitch = false;
let displayValue = 0;

function setEventListeners() {
  const numbers = document.querySelectorAll(`#digit`);
  numbers.forEach((el) => {
    el.addEventListener(`click`, (e) => {
      e.preventDefault();
      appendDisplayValue(el.value);
    });
  });
  const operator = document.querySelectorAll(`#operator`);
  operator.forEach((el) => {
    el.addEventListener(`click`, (e) => {
      e.preventDefault();
      processOperatorEvent(el.value);
    });
  });
  const equals = document.querySelector(`#equal`);
  equals.addEventListener(`click`, handleEqualsEvent);

  const clear = document.querySelector(`#clear`);
  clear.addEventListener(`click`, clearEverything);
}
setEventListeners();

function clearEverything() {
  const screen = document.querySelector(`#numberDisplay`);
  const operatorDisplay = document.querySelector(`#operatorDisplay`);

  firstNum = 0;
  secondNum = null;
  operator = "";
  operandSwitch = false;

  screen.textContent = `0`;
  operatorDisplay.textContent = ``;
  displayValue = `0`;
}

function appendDisplayValue(val) {
  const screen = document.querySelector(`#numberDisplay`);
  if (!operandSwitch) {
    if (firstNum === 0) {
      firstNum = val;
      screen.textContent = `${firstNum}`;
    } else {
      firstNum = parseInt(firstNum.toString() + val.toString());
      screen.textContent = `${firstNum}`;
    }
  } else {
    if (secondNum === null) {
      secondNum = val;
      screen.textContent = `${secondNum}`;
    } else {
      secondNum = parseInt(secondNum.toString() + val.toString());
      screen.textContent = `${secondNum}`;
    }
  }
  displayValue = screen.textContent;
}

function processOperatorEvent(val) {
  const screen = document.querySelector(`#numberDisplay`);
  if (!operandSwitch) {
    firstNum = screen.textContent;
    operandSwitch = true;
  } else {
    secondNum = screen.textContent;
    operandSwitch = false;
  }
  operator = val;
  setOperatorDisplayValue(val);
}

function setOperatorDisplayValue(val) {
  const operatorDisplay = document.querySelector(`#operatorDisplay`);
  operatorDisplay.textContent = val;
}

function handleEqualsEvent() {
  const screen = document.querySelector(`#numberDisplay`);
  const operatorDisplay = document.querySelector(`#operatorDisplay`);

  operatorDisplay.textContent = "";

  console.log(firstNum, operator, secondNum);
  screen.textContent = operate(
    parseInt(firstNum),
    operator,
    parseInt(secondNum)
  );
  firstNum = operate(parseInt(firstNum), operator, parseInt(secondNum));
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
    case "":
      return 0;
  }
}
