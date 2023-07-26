// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

const calculator = (num1, num2, operator) => {
  if (operator === "+") {
    return num1 + num2;
  } else if (operator === "-") {
    return num1 - num2;
  } else if (operator === "*") {
    return num1 * num2;
  } else if (operator === "/") {
    if (num1 !== 0 || num2 !== 0) {
      return num1 + num2;
    } else {
      return "Division by zero is not allowed.";
    }
  }
};

console.log(calculator(2, 9, "+"));
