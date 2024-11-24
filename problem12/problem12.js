// Problem 1: Variable Hoisting
// Question:
// What will be the output of the following code? Explain why.

// console.log(a);  
// var a = 10;  
// console.log(b);  
// let b = 20;  

// Answer (English):
// The output will be:

// undefined  
// ReferenceError: Cannot access 'b' before initialization  
// Explanation:
// The variable a is declared with var, so it is hoisted to the top and initialized to undefined. When console.log(a) is called, it logs undefined because the assignment (a = 10) happens after the log.
// The variable b is declared with let, and variables declared with let or const are hoisted but are not initialized. Accessing b before its declaration results in a ReferenceError.

// Answer (Bengali):
// আউটপুট হবে:

// undefined  
// ReferenceError: Cannot access 'b' before initialization  
// ব্যাখ্যা:
// var দিয়ে ঘোষিত ভ্যারিয়েবলগুলো হোইস্ট হয় এবং শুরুতে undefined দিয়ে ইনিশিয়ালাইজ হয়। তাই console.log(a) এ undefined দেখা যায় কারণ অ্যাসাইনমেন্ট (a = 10) লগের পরে ঘটে।
// let দিয়ে ঘোষিত ভ্যারিয়েবলগুলোও হোইস্ট হয়, কিন্তু ইনিশিয়ালাইজ হয় না। ঘোষণার আগে b অ্যাক্সেস করতে গেলে ReferenceError হবে।



// Problem 2: Understanding const
// Question:
// Write a function that creates an array of numbers from 1 to 5 using const. Explain what happens if you try to reassign the array to a new value.

function createArray() {
  const numbers = [];
  for (let i = 1; i <= 5; i++) {
    numbers.push(i);
  }
  console.log(numbers);
  // Try reassigning: numbers = [6, 7, 8];
}
createArray();

// Answer (English):
// Output: [1, 2, 3, 4, 5]
// Explanation:
// const declares a constant reference, meaning the reference to the object numbers cannot change. However, you can modify the contents of the array (e.g., by adding elements).
// Trying to reassign numbers to a new array will throw a TypeError because numbers is a constant reference.
// Answer (Bengali):
// আউটপুট: [1, 2, 3, 4, 5]
// ব্যাখ্যা:
// const দিয়ে ভ্যারিয়েবল ডিক্লেয়ার করলে রেফারেন্স পরিবর্তন করা যায় না। তবে অ্যারের কন্টেন্ট (যেমন এলিমেন্ট যোগ করা) পরিবর্তন করা যায়।
// numbers-কে নতুন কোনো অ্যারে দিয়ে পুনরায় অ্যাসাইন করতে গেলে TypeError হবে কারণ এটি একটি কনস্ট্যান্ট রেফারেন্স।




// Problem 3: Block Scope and Shadowing
// Question:
// What will be the output of the following code? Why?

let x = 10;  
if (true) {  
  let x = 20;  
  console.log(x);  
}  
console.log(x);

// Answer (English):
// Output:

// 20  
// 10  
// Explanation:
// The first x inside the block creates a new scope. This shadows the x declared outside the block. Inside the block, x = 20 is logged.
// Outside the block, the outer x = 10 remains unaffected, so it logs 10.
// Answer (Bengali):
// আউটপুট:

// 20  
// 10  
// ব্যাখ্যা:
// ব্লকের ভিতরের x নতুন স্কোপ তৈরি করে যা বাইরের x কে শেডো করে। ব্লকের ভিতরে x = 20 দেখা যাবে।
// ব্লকের বাইরে বাইরের x = 10 অপরিবর্তিত থাকে, তাই এটি 10 প্রিন্ট করে।

// --------------------------------------------------------------

// Problem 4: Primitive vs. Reference Types
// Question:
// Explain the difference between primitive and reference data types with an example. Solve the following problem to showcase the difference:

let obj1 = { name: "Alice" };  
let obj2 = obj1;  
obj2.name = "Bob";  
console.log(obj1.name);  

// let a = 5;  
// let b = a;  
// b = 10;  
// console.log(a);  

// Answer (English):
// Output:

// Bob  
// 5  
// Explanation:
// Reference Types: obj1 and obj2 point to the same memory location. Changing obj2.name also changes obj1.name.
// Primitive Types: a and b are independent. Assigning a new value to b does not affect a.
// Answer (Bengali):
// আউটপুট:

// Bob  
// 5  
// ব্যাখ্যা:
// রেফারেন্স টাইপস: obj1 এবং obj2 একই মেমোরি লোকেশন শেয়ার করে। তাই obj2.name পরিবর্তন করলে obj1.name পরিবর্তন হয়।
// প্রিমিটিভ টাইপস: a এবং b আলাদা। b তে নতুন ভ্যালু অ্যাসাইন করলেও a অপরিবর্তিত থাকে।




// Problem 5: var vs. let in Loops
// Question:
// What will be the output of the following code? Why?

// for (var i = 0; i < 3; i++) {  
//   setTimeout(() => console.log(i), 1000);  
// }

// for (let j = 0; j < 3; j++) {  
//   setTimeout(() => console.log(j), 1000);  
// }

// Answer (English):
// Output:
// Copy code
// 3  
// 3  
// 3  
// 0  
// 1  
// 2  
// Explanation:
// With var, i is in function scope and shared across iterations. By the time setTimeout runs, the loop has completed, and i is 3.
// With let, j is in block scope, so each iteration gets its own copy. The correct values 0, 1, and 2 are logged.
// Answer (Bengali):
// আউটপুট:
// Copy code
// 3  
// 3  
// 3  
// 0  
// 1  
// 2  
// ব্যাখ্যা:
// var দিয়ে ডিক্লেয়ার করা i ফাংশন স্কোপে থাকে এবং লুপের প্রতিটি ইটারেশনে একই ভ্যারিয়েবল শেয়ার করে। লুপ শেষ হওয়ার পরে setTimeout চলায় i = 3 দেখায়।
// let দিয়ে ডিক্লেয়ার করা j ব্লক স্কোপে থাকে এবং প্রতিটি ইটারেশনে নতুন কপি তৈরি করে। তাই সঠিক ভ্যালুগুলো (0, 1, 2) দেখা যায়।