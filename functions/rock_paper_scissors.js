const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Define the options for the game as an array of strings
const options = ["rock", "paper", "scissors"];

/**
 * Function to get a random option for the computer
 * Uses Math.random() to generate a random number between 0 and 1
 * Math.floor() is used to round down to the nearest whole number
 * This number is used as an index for the options array to select a random option
 */
function getComputerChoice() {
  return options[Math.floor(Math.random() * options.length)];
}

/**
 * Function to determine the winner of the game
 * Uses if-else statements to check the combination of the user's and computer's choices
 * Returns a string indicating the winner
 */
function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "It's a tie!";
  } else if (userChoice === "rock" && computerChoice === "scissors") {
    return "You win!";
  } else if (userChoice === "paper" && computerChoice === "rock") {
    return "You win!";
  } else if (userChoice === "scissors" && computerChoice === "paper") {
    return "You win!";
  } else {
    return "Computer wins!";
  }
}

/**
 * Main function to play the game
 * Uses the readline library to accept input from the user
 * Calls the getComputerChoice and determineWinner functions to get the computer's choice and determine the winner
 * Uses console.log to output the results to the terminal
 */
function playGame() {
  readline.question("Rock, paper, or scissors?\n", (userChoice) => {
    // Convert the user's choice to lowercase
    userChoice = userChoice.toLowerCase();

    // Validate the user's choice
    while (!options.includes(userChoice)) {
      console.log("Invalid choice.\n");
      return playGame();
    }

    // Get the computer's choice
    let computerChoice = getComputerChoice();

    // Determine the winner
    let result = determineWinner(userChoice, computerChoice);

    // Show the results
    console.log("You chose: " + userChoice);
    console.log("Computer chose: " + computerChoice);
    console.log(result + "\n");

    readline.close();
  });
}

// Start the game
playGame();
