const prompt= require("prompt-sync")()

let signal = prompt("What is the color of the Signal : = ")

if(signal=="red"){
    console.log("Signal is red, STOP")
}else if (signal == "orange"){
    console.log("Signal is yello, Turn your Engines ON")
}else if (signal=="green"){
    console.log("Signal is Green , Go GO GO GO......")
}else{
    console.log("Get your Eyes Checked... ;)")
}
