const url = "https://demowebshop.tricentis.com/"

const user = {
    username : string = "bipin@mailinator.com",
    password : string = "Bipin@123"
}

const browser = "chrome";

console.log("Launch Web Browser")


console.log("CLick Register Button")
console.log("Select Male , Enter First_Name , Enter Last_Name , Enter Email , Enter Password , Confirm Password"+" \nCick Rgister BUtton");

function launchBrowser(){
    if (browser === "chrome"){
        console.log("Chrome Browser Launched")
    }else if(browser === "firefox"){
        console.log("Firefox Browser Launched")
    }else{
        console.log("Webkit Browser Launched")
    }

}

function openURL(){
    console.log(url);
}


function verifyTitle(){

}

function verifyRegister(){

}