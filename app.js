/*
  ✨ Code Review & Refactor Suggestions ✨
  Great job implementing event handling for a simple calculator! 
  The suggestions below will help improve readability, efficiency, 
  and functionality while keeping everything easy to understand. 
  Keep up the great work! 🚀
*/

/*-------------------------------- Variables --------------------------------*/
// ✅ Declared variables for holding number inputs and operator.
let num1 = "";
let num2 = "";
let operator = "";

/*------------------------ Cached Element References ------------------------*/
// ✅ Correctly caching the calculator and display elements.
const calculator = document.querySelector("#calculator");
const display = document.querySelector(".display");

/*----------------------------- Event Listeners -----------------------------*/

calculator.addEventListener("click", (event) => {
  const currentElement = event.target;

  // ✅ Handle number button clicks
  if (currentElement.classList.contains("number")) {
    if (!operator) {
      num1 += currentElement.innerText;
      display.innerText = num1;
    } else {
      num2 += currentElement.innerText;
      display.innerText = num2;
    }
  }

  // ✅ Handle operator button clicks
  else if (currentElement.classList.contains("operator")) {
    if (!operator && currentElement.innerText !== "C") {
      operator = currentElement.innerText;
    }

    // ✅ Handle Clear button functionality
    if (currentElement.innerText === "C") {
      num1 = "";
      num2 = "";
      operator = "";
      display.innerText = "0"; // Displaying "0" instead of an empty string for clarity
    }
  }

  // ✅ Handle equals button clicks
  else if (
    currentElement.classList.contains("equals") &&
    num1 &&
    num2 &&
    operator
  ) {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
    let result;

    switch (operator) {
      case "+":
        result = number1 + number2;
        break;
      case "-":
        result = number1 - number2;
        break;
      case "*":
        result = number1 * number2;
        break;
      case "/":
        result = number2 !== 0 ? number1 / number2 : "Error"; // Prevent division by zero
        break;
      default:
        result = "Error"; // Fallback in case of unexpected input
    }

    display.innerText = result;

    // Reset for next calculation
    num1 = result.toString();
    num2 = "";
    operator = "";
  }

  // ✅ Debugging Log: Helps track variable values during execution.
  console.log("num1:", num1, "num2:", num2, "op:", operator);
});
