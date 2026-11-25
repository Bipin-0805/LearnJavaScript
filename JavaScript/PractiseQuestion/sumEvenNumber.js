const prompt = require("prompt-sync")();

/* Sum of first 10 even numbers */

function sum_of_numbers(){

    var numbers = prompt("Enter the number till you want the sum of : ");

    var sum=0;
    var counter=0;

    while(counter<=numbers){
        sum += counter;
        counter++;
    }
    console.log(`Sum of the first ${numbers} number is : ${sum}`);

}

/* Sum of even_numbers till the number supplied via user */

function sum_of_even_numbers(){

    let numbers = Number(prompt("Enter the number till you want the sum of : "));
    let sum = 0;
    let counter = 0;
    for(counter=1; counter<=numbers; counter++){
    if(counter%2==0){
            sum += counter; 
        }
    }
    console.log(sum);

}

/* Sum of odd_numbers till the number supplied via user */

function sum_of_odd_numbers(){

    let numbers = Number(prompt("Enter the number till you want the sum of : "));
    let sum = 0;
    let counter = 0;
    for(counter=1; counter<=numbers; counter++){
    if(!counter%2==0){
            sum += counter; 
        }
    }
    console.log(sum);

}

/* sum_of first even numbers */

function sum_of_first_odd_numbers(numbers){

   // let numbers = prompt("Enter the number : ");
    let result = numbers*numbers;
    console.log(`Sum of first ${numbers} odd numbers is : ${result}`);
} 

sum_of_first_odd_numbers(5);
