
const prompt = require("prompt-sync")();


function seasonSwitch() {
    let month = prompt("Enter the month : ");
    let season;

    switch (month) {

        case 'december':
        case 'january':
        case 'february':
            season = "winter"
            break;

        case 'march':
        case 'april':
        case 'may':
            season = "summer"
            break;

        case 'june':
        case 'july':
        case 'august':
            season = "rainy"
            break;

        case 'september':
        case 'october':
        case 'november':
            season = "autmun"
            break;

        default:
            season = "Not a correct season, plz enter correct month"

    }

    console.log("season is : "+season);
}

seasonSwitch();

