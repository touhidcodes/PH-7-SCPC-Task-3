// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

function findSecondSmallest(arr) {
  if (arr.length < 2) {
    console.log("Array must have at least two elements.");
  }

  let smallest = Infinity;
  let secondSmallest = Infinity;

  for (const num of arr) {
    if (num < smallest) {
      secondSmallest = smallest;
      smallest = num;
    } else if (num < secondSmallest && num !== smallest) {
      secondSmallest = num;
    }
  }

  if (secondSmallest === Infinity) {
    console.log("There is no second smallest element in the array.");
  }

  return secondSmallest;
}

// Example usage:
const numbers = [12, 5, 23, 8, 1, 18];
const secondSmallest = findSecondSmallest(numbers);
console.log("Second Smallest Element:", secondSmallest); // Output: Second Smallest Element: 5
