// Task 3: Write a JavaScript program to find the most frequent element in an array and return it.

const findFrequent = (array) => {
  let frequentCounter = {};
  for (item of array) {
    frequentCounter[item] = frequentCounter[item] + 1 || 1;
  }

  const keys = Object.keys(frequentCounter);
  const values = Object.values(frequentCounter);
  const max = Math.max(...values);
  const index = values.findIndex((item) => item == max);
  const mostFrequent = keys[index];
  return mostFrequent;
};
// Example Input: [3, 5, 2, 5, 3, 3, 1, 4, 5]
// Example Output: 3
const inputArray = [3, 5, 2, 5, 3, 3, 1, 4, 5];
console.log(findFrequent(inputArray));
