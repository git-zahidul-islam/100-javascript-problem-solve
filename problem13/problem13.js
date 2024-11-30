// Problem 1: Find the Largest Number in an Array
// Question:
// Write a JavaScript function called findLargest that takes an array of numbers as input and returns the largest number in the array.

function findLargest(arr) {
    if (arr.length === 0) return null; // Handle empty array
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}

// Example Usage
const numbers = [34, 67, 23, 89, 12];
console.log(findLargest(numbers)); // Output: 89