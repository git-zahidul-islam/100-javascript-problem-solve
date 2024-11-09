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
function findLargestNumber2(arr) {
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


// 04. Find the Second Largest Number in an Array

// Problem: Write a function secondLargest(arr) that finds and returns the second largest number in an array of numbers. Handle cases where the array has fewer than two unique numbers.
// Example:
// secondLargest([3, 5, 7, 5, 2, 8]); // Output: 7

const secondLargest = (arr) => {
    const uniqueArr = [... new Set(arr)];
    const secondLargest = uniqueArr.sort((a,b) => b -a)
    return secondLargest[1]
};

// 05. Array Chunking

// Problem: Write a function chunkArray(arr, size) that splits an array into chunks of a specified size and returns a new array of these chunks.
// Example:
// chunkArray([1, 2, 3, 4, 5, 6], 2); // Output: [[1, 2], [3, 4], [5, 6]]

const chunkArray = (arr,size) => {
    let result = [];
    for(let i = 0; i < arr.length; i += size){
        result.push(arr.slice(i, i+size))
    }
    return result;
}
// console.log(chunkArray([1, 2, 3, 4, 5, 6,3,4,5,6], 4));