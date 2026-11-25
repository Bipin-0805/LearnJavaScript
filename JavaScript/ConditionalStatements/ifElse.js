const prompt= require("prompt-sync")()

// let signal = prompt("What is the color of the Signal : = ")

// if(signal=="red"){
//     console.log("Signal is red, STOP")
// }else if (signal == "orange"){
//     console.log("Signal is yello, Turn your Engines ON")
// }else if (signal=="green"){
//     console.log("Signal is Green , Go GO GO GO......")
// }else{
//     console.log("Get your Eyes Checked... ;)")
// }

function ternaryif(){
let signal = prompt("Enter the signal : ");

let result = signal.trim().toLowerCase() === "red"      ?   "Signal is Red, STOPPPPPPPPP"             :
             signal.trim().toLowerCase() === "green"    ?   "Signal is Green, Go GO GO GO GO........" :
             signal.trim().toLowerCase() === "orange"   ?   "Start the engine and ready to go......." :
                                                            "Check the signal properly";

    console.log(result);
}

ternaryif();
