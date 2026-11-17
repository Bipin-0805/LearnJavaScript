/* Check Eligibilty for various Documents */

let age = 15;

/* Check person is eligible to vote */
function voterID(){
    let result = age>18 ? "Eligible to vote" : "Try Next Year"
    return result;
}


/* Check for Driving Licence */
function drivingLicence(){
    let result = age > 18 ? "Eligible for Driving Licence" : "Not Eligible for Driving Licence"
    return result;
}
console.log("age is : -----> "+age)
console.log("is Eligible for VoterID : ==== "+voterID() +"\nis Eligible for Driving Licence : ======= "+drivingLicence())
