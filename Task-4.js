// Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

const findIndices = (array, target) => {
  let indices = [];

  for (let item = 0; item < array.length; item++) {
    for (let element = 0; element < array.length; element++) {
      if (array[item] + array[element] === target) {
        indices.push([item, element]);
      }
    }
  }
  return indices;
};

// //  Example Input: ([1, 3, 6, 8, 11, 15], 9)
//  Example Output: [1, 2] (numbers at indices 1 and 2: 3 + 6 = 9)

const inputArray = [1, 3, 6, 8, 11, 15];
console.log(findIndices(inputArray, 9));
