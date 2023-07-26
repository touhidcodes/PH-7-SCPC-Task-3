// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method.

const reversedFunction = (str) => {
  const reversedStr = str.split("").reverse().join("");
  return reversedStr;
};

// Example Input: "hello world"
// Example Output: "dlrow olleh"

const inputString = "hello world";
console.log(reversedFunction(inputString));
