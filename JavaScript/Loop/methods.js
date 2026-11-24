/*      Method 1 => Object.keys() => "Returns all the keys (property names) of an object in an array."
        Output : [ 'name', 'age', 'role' ] 
*/
function method1(){

    let user ={
        name : "bipin",
        age : 25,
        role : "QA"
    };

    console.log(Object.keys(user));
}

/*      Method 2 => Object.values() => "This method returns the values string from the objects"
        Output : ['bipin', 25, 'QA']
*/
function method2(){
     let user ={
        name : "bipin",
        age : 25,
        role : "QA"
    };

    console.log(Object.values(user));
}

/*      Method 3 => Object.entries  => "it returns the key and value pair as array."
        Output : [ [ 'name', 'bipin' ], [ 'age', 25 ], [ 'role', 'QA' ] ]
*/
function method3(){

    let user ={
        name : "bipin",
        age : 25,
        role : "QA"
    };

    console.log(Object.entries(user));

}



/*  Combining it with for..of Loop */

function forofLoop(){
     let user ={
        name : "bipin",
        age : 25,
        role : "QA"
    };
    console.warn("=========================================Object.keys===================================")
    for(let key of Object.keys(user)){
        console.log(key);
    }
}

forofLoop();

function forofLoop2(){
     let user ={
        name : "bipin",
        age : 25,
        role : "QA"
    };
    console.info("=========================================Object.values===================================")
    for(let key of Object.values(user)){
        console.log(key);
    }
}

forofLoop2();




function forofLoop3(){

     let user ={
        name : "bipin",
        age : 25,
        role : "QA"
    };
    console.error("=========================================Object.entries===================================")
    for(let [key,value] of Object.entries(user)){
        console.log(`${key} : ${value}`);
    }

}
forofLoop3();

function hasOwn(){
     let user ={
        name : "bipin",
        age : 25,
        role : "QA"
    };

    console.debug("=========================================Object.hasOwn===================================")
    console.log(Object.hasOwn(user,'salary'))

    for(let key in user){
        if(Object.hasOwn(user,key)){
            console.log(key,user[key]);
        }
    }
}



hasOwn();


