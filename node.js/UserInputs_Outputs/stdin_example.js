/*
This code imports a function called 'testNumber' from a file called 'game.js'. The function prompts the user to guess a number between 1 and 10.
If the user types 'quit', the program will exit. Otherwise, the input will be passed to the 'testNumber' function to check if it matches the secret number.

1. The 'process.stdout.write' method writes a message to the console prompting the user to guess a number between 1 and 10, and provides instructions on how to quit the program.
2. The 'playGame' function is defined to take the user input, convert it to a string, and pass it to the 'testNumber' function.
3. The 'process.stdin.on' method listens for data input from the user and calls the 'playGame' function with the user input as an argument.
*/

// Import the 'testNumber' function from a file called 'game.js'.
let {testNumber} = require("./game.js");

// Prompt the user to guess a number between 1 and 10, and provide instructions on how to quit the program.
process.stdout.write(
  'I\'m thinking of a number from 1 through 10. What do you think it is? \n(Write "quit" to give up.)\n\nIs the number ... '
);

// Define a function called 'playGame' that takes the user input, converts it to a string, and passes it to the 'testNumber' function.
let playGame = (userInput) => {
  let input = userInput.toString().trim();
  testNumber(input);
};

// Listen for data input from the user, and call the 'playGame' function with the user input as an argument.
process.stdin.on("data", playGame);
