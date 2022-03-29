const add = function(a, b) {
  return (a + b);
}

const substract = function(a, b) {
  selectOperator(a - b);
  return(a - b);
}

const multiply = function(a, b) {
  selectOperator(a * b);
  return(a * b);
}

const divide = function(a, b) {
  selectOperator(a / b);
  return(a / b);
}

const operate = function(a, b, op) {
  document.getElementById("equals").addEventListener("click", function(){
    console.log(a, b, op);
    switch (op) {
      case "plus":
        display(add(a, b));
        saveNum(add(a, b));
        break;

      case "minus":
        display(substract(a, b));
        saveNum(substract(a, b));
        break;

      case "times":
        display(multiply(a, b));
        saveNum(multiply(a, b));
        break;

      case "over":
        display(divide(a, b));
        saveNum(divide(a, b));
        break;
      
      default:
        break;
    }
  }, { once: true });
}

const saveNum = function(num) {
  display(num);
  selectOperator(num);
}

const display = function(text) {
  document.getElementById("display").innerHTML = text;
};

const clear = function() {
  display("");
  init();
};

const selectOperator = function(num) {
  document.getElementById("add").addEventListener("click", function(){nextNum(num, "plus");});
  document.getElementById("substract").addEventListener("click", function(){nextNum(num, "minus");});
  document.getElementById("multiply").addEventListener("click", function(){nextNum(num, "times");});
  document.getElementById("divide").addEventListener("click", function(){nextNum(num, "over");});
}

const nextNum = function(num, operator) {
  document.getElementById("1").addEventListener("click", function(){operate(num, 1, operator);});
  document.getElementById("2").addEventListener("click", function(){operate(num, 2, operator);});
  document.getElementById("3").addEventListener("click", function(){operate(num, 3, operator);});
  document.getElementById("4").addEventListener("click", function(){operate(num, 4, operator);});
  document.getElementById("5").addEventListener("click", function(){operate(num, 5, operator);});
  document.getElementById("6").addEventListener("click", function(){operate(num, 6, operator);});
  document.getElementById("7").addEventListener("click", function(){operate(num, 7, operator);});
  document.getElementById("8").addEventListener("click", function(){operate(num, 8, operator);});
  document.getElementById("9").addEventListener("click", function(){operate(num, 9, operator);});
  document.getElementById("0").addEventListener("click", function(){operate(num, 0, operator);});
}

const init = function() {
  document.getElementById("1").addEventListener("click", function(){saveNum(1);});
  document.getElementById("2").addEventListener("click", function(){saveNum(2);});
  document.getElementById("3").addEventListener("click", function(){saveNum(3);});
  document.getElementById("4").addEventListener("click", function(){saveNum(4);});
  document.getElementById("5").addEventListener("click", function(){saveNum(5);});
  document.getElementById("6").addEventListener("click", function(){saveNum(6);});
  document.getElementById("7").addEventListener("click", function(){saveNum(7);});
  document.getElementById("8").addEventListener("click", function(){saveNum(8);});
  document.getElementById("9").addEventListener("click", function(){saveNum(9);});
  document.getElementById("0").addEventListener("click", function(){saveNum(0);});
}

// Clear the screen
document.getElementById("clear").addEventListener("click", function(){clear();});

init();