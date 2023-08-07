import { add, subtract, multiply, divide } from "./js/functions.js";

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

console.log(operate(firstNum, operator, secondNum));
