prompt = require("prompt-sync")();
function factorial(){
    let number = prompt("Enter the number : ");
    let result=1;
    for(let i=1;i<=number; i++){
        result *=i;
    }
    console.log(`Factorial of ${number} is : ${result}` );
    
}


function fact(){
    let number = prompt("Enter the number : ");
    let result=1;
    let i=1;

    while(i<=number){
        result *= i;
        i++;
    }
        console.log(`Factorial of ${number} is : ${result}`);
}

fact();
factorial();