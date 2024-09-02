function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Error: Division by zero";
  }
  return a / b;
}

function operate(operator, num1, num2) {
  switch (operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
    default:
      return "Error: Invalid operator";
  }
}

let displayValue = "0";
let firstNumber = null;
let secondNumber = null;
let currentOperator = null;

function updateDisplay() {
  const display = document.querySelector(".display");
  display.textContent = displayValue;
}

const numberButtons = document.querySelectorAll("#number-btn");
numberButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const value = event.target.textContent;
    if (displayValue === "0") {
      displayValue = value;
    } else {
      displayValue += value;
    }
    updateDisplay();
  });
});

const operatorButtons = document.querySelectorAll("#operator-btn");
operatorButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const operator = event.target.textContent;
    if (firstNumber === null) {
      firstNumber = parseFloat(displayValue);
    } else if (currentOperator) {
      secondNumber = parseFloat(displayValue);
      firstNumber = operate(currentOperator, firstNumber, secondNumber);
      displayValue = firstNumber.toString();
      updateDisplay();
    }
    currentOperator = operator;
    displayValue = "0";
  });
});

const equalsButton = document.querySelector("#btn-submit");
equalsButton.addEventListener("click", () => {
  if (firstNumber !== null && currentOperator !== null) {
    secondNumber = parseFloat(displayValue);
    const result = operate(currentOperator, firstNumber, secondNumber);
    displayValue = result.toString();
    firstNumber = null;
    secondNumber = null;
    currentOperator = null;
    updateDisplay();
  }
});

const clearButton = document.querySelector("#btn-reset");
clearButton.addEventListener("click", () => {
  displayValue = "0";
  firstNumber = null;
  secondNumber = null;
  currentOperator = null;
  updateDisplay();
});

const deleteButton = document.querySelector("#btn-delete");
deleteButton.addEventListener("click", () => {
  if (displayValue.length > 1) {
    displayValue = displayValue.slice(0, -1);
  } else {
    displayValue = "0";
  }
  updateDisplay();
});

updateDisplay();
