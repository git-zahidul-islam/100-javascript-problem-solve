// Remove falsy value from any array

const mixing= [false, NaN, 13,'💖','😍','🧨'];

const fruit = mixing.filter(Boolean);
console.log(fruit);