const prompt= require("prompt-sync")()


const input = prompt('Enter your age: ');
const age = Number(input);

if (input === null || input.trim() === '' || !Number.isFinite(age) || age < 0) {
	console.log('Please enter a valid age.');
} else if (age >= 18) {
	console.log('You are eligible to vote.');
} else {
	console.log('You are not eligible to vote.');
}
