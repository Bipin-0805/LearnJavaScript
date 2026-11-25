let arr = [10,20,30,40,50,60,70,80,90,100];

// deleting element
function delarr(arr){
arr.splice(2,5)
console.log(arr);
}

// adding at the beginning 
function addArry(){
    let arr = [10,20,30,40,50,60,70,80,90,100];
    arr.unshift("begin");
    console.log(arr)
}

// remove last element
function endArray(){
    let arr = [10,20,30,40,50,60,70,80,90,100];
    arr.pop();
    console.log(arr);
}


// add value in between

function addBetween(){
    let arr = [10,20,30,40,50];
    arr.splice(1,0,10.5);
    arr.splice(arr.length,0,60)
    console.log(arr);
}

function arrsort(){
    arr = [2,5,1,3,7,6,0,12,65,11,5.65,3.2]
    result = arr.sort();
    console.log(result);
}
arrsort();

function iterateArray(){
    let cars = ["BMW","AUDI","TATA","BYD","MAHINDRA"];

    let i=0;
    while(i<cars.length){
        console.log(cars[i]);
        i++;
    }
    
}

iterateArray();

