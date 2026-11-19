const prompt = require("prompt-sync")();
let age = prompt("please enter your age : ");

if(age>=18){
    console.log("Can Apply for Driving Licence. ")
    let teststatus = true;    
    if(teststatus==true){
        console.log("Test passed, Please collect Driving Licence next week")
    }else{
        console.log("Test Failed, Try Next time" )
    }

}else{
    console.log("You are a Minor , Not Eligible for Driving Licence")
}