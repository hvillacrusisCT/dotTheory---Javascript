// Collect input from user
const userInput = prompt("Enter a number:");

// Convert the input to a number
const userNumber = parseInt(userInput);

// Use Math.random() and the user's number to generate a random number
const randomNumber = Math.floor(Math.random() * userNumber) + 1;

// Create a message displaying random number
const message = `The randomly generated number between 1 and ${userNumber} is: ${randomNumber}`;
alert(message);
