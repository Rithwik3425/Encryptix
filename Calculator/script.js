document.addEventListener("DOMContentLoaded", () => {
  const display = document.getElementById("display");
  const buttons = document.querySelectorAll(".btn");
  let currentInput = "";
  let operator = "";
  let firstOperand = "";
  let secondOperand = "";
  let result = "";

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const value = button.getAttribute("data-value");
      if (value) {
        handleInput(value);
      } else if (button.id === "clear") {
        clearDisplay();
      } else if (button.id === "equals") {
        calculateResult();
      }
    });
  });

  function handleInput(value) {
    if (["+", "-", "*", "/", "%", "^", "√"].includes(value)) {
      if (currentInput && !operator) {
        firstOperand = currentInput;
        operator = value;
        currentInput = "";
        display.innerText = `${firstOperand} ${operator}`;
      }
    } else {
      currentInput += value;
      display.innerText = currentInput;
    }
  }

  function calculateResult() {
    if (firstOperand && operator && currentInput) {
      secondOperand = currentInput;
      firstOperand = parseFloat(firstOperand);
      secondOperand = parseFloat(secondOperand);
      switch (operator) {
        case "+":
          result = firstOperand + secondOperand;
          break;
        case "-":
          result = firstOperand - secondOperand;
          break;
        case "*":
          result = firstOperand * secondOperand;
          break;
        case "/":
          result = firstOperand / secondOperand;
          break;
        case "%":
          result = firstOperand % secondOperand;
          break;
        case "^":
          result = Math.pow(firstOperand, secondOperand);
          break;
        case "√":
          result = Math.sqrt(firstOperand);
          break;
      }
      display.innerText = result;
      currentInput = result.toString();
      operator = "";
      firstOperand = "";
      secondOperand = "";
    } else if (operator === "√") {
      firstOperand = parseFloat(currentInput);
      result = Math.sqrt(firstOperand);
      display.innerText = result;
      currentInput = result.toString();
      operator = "";
      firstOperand = "";
    }
  }

  function clearDisplay() {
    currentInput = "";
    operator = "";
    firstOperand = "";
    secondOperand = "";
    result = "";
    display.innerText = "";
  }
});
