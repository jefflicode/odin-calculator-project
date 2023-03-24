const add = function (a, b) {
  //   let sum = 0;
  //   for (let i = 0; i < arguments.length; i++) {
  //     sum += arguments[i];
  //   }
  //   return sum;
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const multiply = function (a, b) {
  //   let result = 1;
  //   let array = arguments[0];
  //   for (let i = 0; i < array.length; i++) {
  //     result *= array[i];
  //   }
  //   return result;
  return a * b;
};

const divide = function (a, b) {
  return a / b;
};

let firstNumber = "";
let operator = "";
let secondNumber = "";

const operate = function (num1, operator, num2) {
  if (operator === "+") {
    return Math.round(add(num1, num2) * 100) / 100;
  } else if (operator === "-") {
    return Math.round(subtract(num1, num2) * 100) / 100;
  } else if (operator === "×") {
    return Math.round(multiply(num1, num2) * 100) / 100;
  } else if (operator === "÷") {
    return Math.round(divide(num1, num2) * 100) / 100;
  }
};

const displayText = document.querySelector(".firstSectionText");

const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const zero = document.querySelector(".zero");
const decimal = document.querySelector(".decimal");

const numbers = [
  zero,
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  decimal,
];
let displayNumber = "";
let hasOperator = false;
let operatorSymbol = "";
let calculationExpression = new Array();
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === decimal) {
    numbers[i].addEventListener("click", () => {
      if (!displayNumber.includes(".")) {
        displayNumber += ".";
        displayText.textContent = displayNumber;
      }
    });
  } else {
    numbers[i].addEventListener("click", () => {
      if (hasOperator) {
        calculationExpression.push(displayNumber);
        calculationExpression.push(operatorSymbol);
        hasOperator = false;
        displayNumber = "";
      }
      const actualNumber = i;
      displayNumber += actualNumber.toString();
      if (displayNumber.length <= 9) {
        displayText.textContent = displayNumber;
      }
    });
  }
}

const ac = document.querySelector(".ac");
ac.addEventListener("click", () => {
  // All Clear
  displayNumber = "";
  displayText.textContent = displayNumber;
  firstNumber = "";
  operator = "";
  secondNumber = "";
  calculationExpression = new Array()
});

const divideSection = document.querySelector(".divide");
const multiplySection = document.querySelector(".multiply");
const minusSection = document.querySelector(".minus");
const plusSection = document.querySelector(".plus");

const operators = [divideSection, multiplySection, minusSection, plusSection];
const operatorText = ["÷", "×", "-", "+"];

// save all the calculations as an expression
// the expression is only complete if the equal sign == is clicked
// make the calculation expression as an array

for (let i = 0; i < operators.length; i++) {
  operators[i].addEventListener("click", () => {
    operator = operators[i];
    operatorSymbol = operatorText[i];
    hasOperator = true;
    // if (operator.length < 1) {
    //   firstNumber = displayNumber;
    //   operator = operatorText[i];
    //   displayNumber = "";
    // } else if (operator.length === 1) {
    //     secondNumber = displayNumber;
    //     firstNumber = operate(Number(firstNumber), operator, Number(secondNumber));
    //     displayText.textContent = firstNumber.toString();
    //     operator = operators[i];
    //     displayNumber = firstNumber;
    //     secondNumber = "";
    // }
  });
}

const equal = document.querySelector(".equal");
let result = 0;
equal.addEventListener("click", () => {
    calculationExpression.push(displayNumber);
    console.log(calculationExpression);
    for (let i = 0; i < calculationExpression.length; i++) {
        if (operatorText.includes(calculationExpression[i])) {
            operator = calculationExpression[i];
        } else if (firstNumber.length < 1) {
            firstNumber = calculationExpression[i];
        } else {
            secondNumber = calculationExpression[i];
        }

        if (firstNumber.length >= 1 && operator.length === 1 && secondNumber.length >= 1) {
            result = operate(Number(firstNumber), operator, Number(secondNumber));
            // console.log(result);
            displayText.textContent = result.toString();
            firstNumber = result.toString();
            secondNumber = "";
        }
    }
//   if (operator.length === 1) {
//     secondNumber = displayNumber;
//     displayNumber = "";
//   }

//   if (
//     firstNumber.length >= 1 &&
//     operator.length === 1 &&
//     secondNumber.length >= 1
//   ) {
//     let num1 = Number(firstNumber);
//     let num2 = Number(secondNumber);
//     if (num2 === 0 && operator === "÷") {
//       displayText.textContent = "Invalid";
//     } else {
//       let result = operate(num1, operator, num2);
//       displayText.textContent = result.toString();
//     }
//   }
});
