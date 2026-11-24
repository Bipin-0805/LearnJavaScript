/* print value using for loop */

function forLoop(){

    for(let i = 0 ; i < 5 ; i++){
        console.log("Hello World!!")
    }
}

function boxPattern(){

    for (let i=0; i<5 ; i++){
        let pattern = "";
        for(let j=0; j<4; j++){
            pattern += " *";
        }
        console.log(pattern)
    }
}

boxPattern();



