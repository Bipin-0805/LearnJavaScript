const prompt = require ("prompt-sync")()

const celsius = prompt("Enter the temperatue");
// define fahrenheit
const fahrenheit = (celsius * 9/5) +32;

// print celsius

console.log(celsius + "Celsius = "+fahrenheit.toFixed(1)+" Fahrenheit");


