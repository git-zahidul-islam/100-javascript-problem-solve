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
  
  // console.log(combineArrays([1, 2, 3], [2, 3, 4])); 

  

  // 02: Find All Indices of a Target Value
  // Write a function that, given an array and a target value, returns an array of all indices where the target value is found. If the target value is not in the array, return an empty array.
  
  // Example:
  // Input: [1, 2, 3, 2, 4, 2, 5], target = 2
  // Output: [1, 3, 5]

  function findAllIndices(arr,target){
    const result = [];

    for (let i = 0; i < arr.length; i++) {
      if(arr[i] == target){
        result.push(i)
      }
    }
    return result;
  }
  console.log(findAllIndices([1,1,3,4,],2));
