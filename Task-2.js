// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array.

const reducerFunction = (array) => {
  const positiveValues = array.filter((value) => value > 0);
  const sum = positiveValues.reduce((pre, current) => pre + current, 0);
  return sum;
};

// Example Input: [2, -5, 10, -3, 7]
// Example Output: 19

const inputArray = [2, -5, 10, -3, 7];
console.log(reducerFunction(inputArray));
