
/*
Create a function to print inverse left triangle pattern

* * * * *
* * * *
* * *
* *
* 

*/

function inverseleft(){
    let rows = 5;
    let pattern = "";

    for(let i=1; i<=rows; i++){

        for (let stars=i; stars<=(rows+1)-1; stars++){
            pattern += "* "
        }
        pattern += "\n";
    }
    console.log(pattern);
}

/*
Create a function to print inverse right triangle pattern

* * * * *
  * * * *
    * * *
      * *
        * 

*/
function inverseRight(){

    let rows = 5;
    let pattern = "";

         for(let i=1; i<=rows; i++){

        for (let space=1; space<=i-1; space++){
            pattern += "  "
        }
        for (let stars=i; stars<=rows; stars++){
            pattern += " *";
        }

        pattern += "\n";

    }

    console.log(pattern);


}


/*
Create a function to print the following pattern
    * * * * * * * * * *
    * * * *     * * * *
    * * *         * * *
    * *             * *
    *                 * 
 
*/

function inverseTop(){

    let row = 5;
    let pattern = "";

    for(let i=1; i<=row; i++){
        for(let leftStar=i; leftStar<=row; leftStar++){
                pattern += "* "
        }

        for (let rightspace=1; rightspace<=i-1; rightspace++){
            pattern += "  "
        }

        for (let rightspace=1; rightspace<=i-1; rightspace++){
            pattern += "  "
        }

        for (let rightstars=i; rightstars<=row; rightstars++){
            pattern += " *";
         }

    pattern += "\n"


    }

    console.log(pattern);

    let pattern2 =""
    
    for(let i = 1 ; i <=5 ; i++){

        let pattern2 = "";
        for(let j = 1; j<=i; j++){
            pattern2 += "* ";
        }
        for(let space=1; space<=row-i ; space++  ){
            pattern2 += "  ";
        }

        for(let space=1; space<=row-i ; space++  ){
            pattern2 += "  ";
        }

        for(let star =1;star<=i;star++){
            pattern2 += " *"
        }
        console.log(pattern2);
    
}
}


/*================================================================================================================*/


/*   
                * * * * *
                * * * *
                * * *
                * *
                *
                * *
                * * *
                * * * *
                * * * * *

*/


function sidePattern(){

    let rows = 5;
    let pattern = "";

    for(let i=1; i<=rows; i++){

        for(topStar=1; topStar<=6-i; topStar++){
            pattern += "* "
        }
        pattern += "\n";
    }

    console.log(pattern);

    for(let i=1; i<=4; i++){
        for(let downStar=0; downStar<=i; downStar++){
            pattern += "* ";
        }
        pattern += "\n";
    }

    console.log(pattern);
}

sidePattern();

