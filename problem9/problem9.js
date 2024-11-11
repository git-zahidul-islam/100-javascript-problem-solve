// 01. Array Combination and Deduplication
// Given two arrays, return an array containing all elements of the first array that are not in the second array, followed by all unique elements from both arrays. The result should have no duplicates.

// javascript

// console.log(combineArrays([1, 2, 3], [2, 3, 4])); 
// // Output: [1, 4]

const combineArrays = (arr1, arr2) => {
    const onlyInArr1 = arr1.filter(item => !arr2.includes(item));
    const combinedUnique = Array.from(new Set([...onlyInArr1, ...arr2]));
    return combinedUnique;
  };
  
  console.log(combineArrays([1, 2, 3], [2, 3, 4])); 

  

