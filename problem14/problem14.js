// Count the Occurrence of a Character in a String
// Question: Write a function to count the occurrence of a specific character in a string.
// Solution:

function countCharacter(str, char) {
    return str.split(char).length - 1;
}
console.log(countCharacter("hello world", "o")); // Output: 2


// new branch ---- 01... 
// main test

// Check if a String is a Palindrome
// Question: Write a function to check if a given string is a palindrome.
// Solution:

function isPalindrome(str) {
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}
console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true
console.log(isPalindrome("hello")); // Output: false
