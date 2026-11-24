
let browsers = ["chrome","Firefox","Edge"];

let user = {
    name : "bipin",
    age : 32,
    mobile_no : 9770704983,
    mail_id : "qa.bipinsharma@gmail.com",
    drivingLicence : true

}
console.log("===========================For of Loop=================================")
for(let browser of browsers){
    console.log(browser);
}
console.log("===========================ForEach Loop=================================")
browsers.forEach((browser,index)=>{
    console.log(index ,browser);
});

console.log("===========================ForIn Loop=================================")
for(let x in user){
    console.log(`${x} : ${user[x]}`);
}