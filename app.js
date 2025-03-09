
/*-------------------------------- Constants --------------------------------*/
//const numbersEl = document.querySelectorAll("button number");
//const operatorEl = document.querySelectorAll("button operator");
/*-------------------------------- Variables --------------------------------*/
// create variable to hold what number(s) STRING
let num1 = ""
let num2 = ""
let operator = ""

/*------------------------ Cached Element References ------------------------*/

const calculator = document.querySelector('#calculator');
const display = document.querySelector(".display")

/*----------------------------- Event Listeners -----------------------------*/

calculator.addEventListener('click', (event) => {
  const currentElement = event.target;

  
  if (currentElement.classList.contains('number')) {
    if (operator === '') {
      num1 += currentElement.innerText;
      display.innerText = num1
    } else {
      num2 += currentElement.innerText;
      display.innerText = num2
    }
  }

  if (currentElement.classList.contains('operator')) {
    if (operator === "") {
      operator = currentElement.innerText;
    }
    if (currentElement.innerText === "C") {
      num1 = "";
      num2 = "";
      operator = "";
      display.innerText = "";
    }
  }

  if (currentElement.classList.contains('equals')) {
    if (operator === '*') {
      display.innerText = parseInt(num1) * parseInt(num2)
    } else if (operator === '/') {
      display.innerText = parseInt(num1) / parseInt(num2)
    } else if (operator === '+') {
      display.innerText = parseInt(num1) + parseInt(num2)
    } else if(operator === '-') {
      display.innerText = parseInt(num1) - parseInt(num2)
    } 
    
  }
});

