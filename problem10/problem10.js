const arr = [[1, 2], [3, 4], [5, 6]];
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        console.log(arr[i][j]);
    }
}


// Problem 2: Find the Missing Numbers
// Given an array of integers from 1 to n with some numbers missing, write a function findMissingNumbers to find the missing numbers using array methods.

// Example:
// console.log(findMissingNumbers(arr, 6)); 
// // Output: [2, 4]


function findMissingNumbers(arr, n) {
    const fullArray = Array.from({ length: n }, (_, i) => i + 1); // [1, 2, ..., n]
    return fullArray.filter(num => !arr.includes(num));
  }
  
  // Example
  const arr2 = [1, 3, 5, 6];
  console.log(findMissingNumbers(arr, 6)); // [2, 4]
  