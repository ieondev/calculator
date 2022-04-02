let currentNum = "";
let previousNum = "";
let operator = "";

const currentDisplayNumber = document.querySelector('.currentNumber');
const previousDisplayNumber = document.querySelector('.previousNumber');

window.addEventListener('keydown', handleKeyPress);

const equal = document.querySelector('.equal');
equal.addEventListener("click",() => {
  if (currentNum != "" && previousNum != ""){
    operate();
  }
});

const clear = document.querySelector('.clear');
clear.addEventListener("click", clearCalculator);

const decimal = document.querySelector('.decimal');
decimal.addEventListener("click", () => {
  addDecimal();
});

const numberButtons = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');

numberButtons.forEach(btn => {
  btn.addEventListener("click", (e) => {
    handleNumber(e.target.textContent);
  })
});

function handleNumber(number) {
  if (previousNum != "" && currentNum != "" && operator === "") {
    previousNum = "";
    currentDisplayNumber.textContent = currentNum;
  }
  if (currentNum.length < 12) {
    currentNum += number;
    currentDisplayNumber.textContent = currentNum;
  }
}

operators.forEach(btn => {
  btn.addEventListener("click", (e) => {
    handleOperator(e.target.textContent);
  })
});

function handleOperator(op) {
  if (previousNum === "") {
    previousNum = currentNum;
    operatorCheck(op);
  } else if (currentNum === "") {
    operatorCheck(op);
  } else{
    operate();
    operator = op;
    currentDisplayNumber.textContent = "";
    previousDisplayNumber.textContent = previousNum + " " + operator;
  }
}

function operatorCheck(text) {
  operator = text;
  if (previousNum.length < 12) {
    previousDisplayNumber.textContent = previousNum + " " + operator;
  } else {
    previousDisplayNumber.textContent= previousNum.slice(0, 11); + " " + operator;
  }
  currentNum = "";
  currentDisplayNumber.textContent = "";
}

function operate() {
  previousNum = Number(previousNum);
  currentNum = Number(currentNum);

  switch (operator) {
    case "+":
      previousNum += currentNum;
      break;
    case "-":
      previousNum -= currentNum;
      break;
    case "*":
      previousNum *= currentNum;
      break;
    case "/":
      previousNum /= currentNum;
      if (currentNum <= 0) {
        previousNum = "ERROR"
        displayResults();
        return;
      }
      break;
    default:
      break;
  }
  previousNum = previousNum.toString();
  displayResults();
}

function displayResults() {
  if (previousNum.length < 12) {
    currentDisplayNumber.textContent = previousNum;
  } else {
    currentDisplayNumber.textContent = previousNum.slice(0, 11);
  }
  previousDisplayNumber.textContent = "";
  operator = "";
  currentNum = "";
}

function clearCalculator () {
  currentNum = "";
  previousNum = "";
  operator = "";
  previousDisplayNumber.textContent = "";
  currentDisplayNumber.textContent = "";
}

function addDecimal() {
  if (!currentNum.includes('.')) {
    currentNum += ".";
    currentDisplayNumber.textContent = currentNum;
  }
}

function handleKeyPress(e) {
  e.preventDefault();
  if (e.key >= 0 && e.key <= 9) {
    handleNumber(e.key);
  } else if (e.key === "+" || e.key === "-" || e.key === "/" || e.key === "*") {
    handleOperator(e.key);
  } else if (e.key === ".") {
    addDecimal();
  } else if (e.key === "Enter" || e.key === "=" && currentNum != "" && previousNum != "") {
    operate();
  }
}