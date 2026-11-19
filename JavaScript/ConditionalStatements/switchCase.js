const prompt = require("prompt-sync")();

let role = prompt("What is your role : "  );

switch(role.trim())  {
case  "admin" : 
    console.log("Admin , you have full access")
    break;
case "dev" :
    console.log("Developer access")
    break;
case "qa" :
    console.log("QA access")
    break;
case "guest" :
console.log("Guest Access");
break;

default :
    console.log("Access Denied");
    
}
