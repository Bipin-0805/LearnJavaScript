
const prompt = require("prompt-sync")();

/* ==========================================================Box Pattern ================================================== */

function boxPattern(){

    for(let i=0;i<5;i++){
        let pattern = " ";
        
        for(let j = 0 ; j<5 ; j++){

            pattern += " *";

        }
        console.log(pattern);

    }
}
/* ==================================================== Left Right Angle Triangle =========================================*/

function LeftRAT(){

    for(let i = 1 ; i <=5 ; i++){

        let pattern = "";
        for(let j = 1; j<=i; j++){
            pattern += " *";
        }
        console.log(pattern);
    }
}

/* ==================================================== Right Right Angle Triangle =======================================*/
function RightRAT(){

    let rows = 5;
    let pattern = "";

    for(let i = 1 ; i <=rows ; i++){
        for(let space=1; space<=rows-i ; space++  ){
            pattern += "  ";
        }

        for(let star =1;star<=i;star++){
            pattern += " *"
        }
        pattern += "\n";
    }

    console.log(pattern);

}

function inverseLeftRAT(){

    let rows = 5;
    let pattern = "";

    for(let i = 1; i<=rows; i++){
        for(let stars = 1; stars <=6-i; stars++){
            pattern += " *";
        }

        pattern +=("\n")

    }
    console.log(pattern);
    

}

function inverseRightRAT(){

    let rows= 5;
    let pattern = "";

    for(let i=1; i<=rows; i++){

        for(let space=1; space<=i-1; space++){
            pattern += "  ";
        }

        for(let star=i; star<=6-1; star++){
            pattern += " *"
        }
        

        pattern += "\n";

    }

    console.log(pattern);
}
inverseLeftRAT();
inverseRightRAT();


