
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
  console.log(event.target.innerText);

  
  if (event.target.classList.contains('number')) {
    let y = event.target.innerText
    if (operator === '') {
      num1 += y
      display.textContent = num1
    } else {
      num2 += y
      display.textContent = num2
    }
  }

  if (event.target.classList.contains('operator')) {
    operator = event.target.innerText
    display.textContent = operator
  }

  if (event.target.classList.contains('equals')) {
    if (operator === '*') {
      let result = parseInt(num1) * parseInt(num2)
      display.textContent = result
    } else if (operator === '/') {
      let result = parseInt(num1) / parseInt(num2)
      display.textContent = result
    } else if (operator === '+') {
      let result = parseInt(num1) + parseInt(num2)
      display.textContent = result 
    } else if(operator === '-') {
      let result = parseInt(num1) - parseInt(num2)
      display.textContent = result
    } 
    
  }
});
  
//how does is know what "result"  means
//what happens when you hit C
/*-------------------------------- Functions --------------------------------*/
