// *** 1 Flatten a Nested Array

// Problem: Write a function flattenArray(arr) that takes a nested array of numbers and returns a new array that’s flattened to a single level.
// Example:

// flattenArray([1, [2, 3], [4, [5, 6]]]); // Output: [1, 2, 3, 4, 5, 6]

const flattenArray =(arr) =>{
    return arr.flat(Infinity)
}
// console.log(flattenArray([1, [2, 3], [4, [5, 6]]]));


// 02. Find the Largest Number in an Array
// Problem: Write a function findLargestNumber(arr) that takes an array of numbers as input and returns the largest number in the array.
// Example:
// findLargestNumber([3, 5, 7, 2, 8]); // Output: 8

const findLargestNumber = (arr) =>{
    return arr.reduce((acc,current) => {
        return acc > current ? acc : current
    },0)
};
function findLargestNumber(arr) {
    return Math.max(...arr);
};



// 03. Remove Duplicates from an Array
// Problem: Write a function removeDuplicates(arr) that takes an array of numbers as input and returns a new array with duplicates removed.
// Example:
// removeDuplicates([1, 2, 2, 3, 4, 4, 5]); // Output: [1, 2, 3, 4, 5]

const removeDuplicates =(arr)=>{
    return [... new Set(arr)]
}
// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));


