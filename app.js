
/*-------------------------------- Constants --------------------------------*/
//const numbersEl = document.querySelectorAll("button number");
//const operatorEl = document.querySelectorAll("button operator");
/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/

const calculator = document.querySelector('#calculator');
const display = document.querySelector(".display")

/*----------------------------- Event Listeners -----------------------------*/

calculator.addEventListener('click', (event) => {
  // This log is for testing purposes to verify we're getting the correct value
  // You have to click a button to see this log
  console.log(event.target.innerText);

  
  if (event.target.classList.contains('number')) {
    // Do something with a number
    // Capture first number
    let y = event.target.innerText
    // put it into the screen
    display.textContent = y
  }

  if (event.target.classList.contains('operator')) {
    let z = event.target.innerText
    display.textContent = z
  }


  // Example
  if (event.target.innerText === '*') {
    // Do something with this operator
  }
});
  
/*-------------------------------- Functions --------------------------------*/
