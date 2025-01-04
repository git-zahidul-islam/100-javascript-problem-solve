// Count the Occurrence of a Character in a String
// Question: Write a function to count the occurrence of a specific character in a string.
// Solution:

function countCharacter(str, char) {
    return str.split(char).length - 1;
}
console.log(countCharacter("hello world", "o")); // Output: 2
