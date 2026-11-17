/* 
The main difference between Math.floor() and Math.trunc() in JavaScript is how they handle negative numbers. 
Both methods return the exact same result for positive numbers, but they round in different directions below zero
*/

console.log(Math.floor(5.75));
console.log(Math.trunc(5.75));

console.log(Math.floor(-5.75));
console.log(Math.trunc(-5.75));