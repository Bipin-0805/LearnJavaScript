const prompt = require ("prompt-sync")();

let number = prompt("Enter the table number : ");

for(let i = 1; i<=10;i++){
    console.log(number+" * "+i+" = "+number*i);
}