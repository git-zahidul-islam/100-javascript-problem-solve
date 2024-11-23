// 1. Deep Clone an Object
// Write a function to deeply clone a nested object, without using JSON methods.

// javascript
// Copy code
// function deepClone(obj) {
//     // Your code here
// }

// const original = { a: 1, b: { c: 2, d: { e: 3 } } };
// const clone = deepClone(original);
// clone.b.d.e = 4;
// console.log(original.b.d.e); // Should log: 3

function deepClone(obj) {
    if (obj === null || typeof obj !== "object") return obj;
    if (Array.isArray(obj)) return obj.map(deepClone);

    const clone = {};
    for (const key in obj) {
        clone[key] = deepClone(obj[key]);
    }
    return clone;
}

const original = { a: 1, b: { c: 2, d: { e: 3 } } };
const clone = deepClone(original);
clone.b.d.e = 4;

console.log(original.b.d.e);