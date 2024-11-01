// Given two arrays, return an array containing the elements that are present in both.
const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6];

const matching = array1.filter(match => array2.includes(match))
console.log(matching);