// Generate a random number between 1 and 10, and convert it to a string.
let secretValue = Math.floor(1 + Math.random() * 10).toString();

// Create an array of strings representing the numbers 1 through 10.
let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

// Export an object that contains a function called 'testNumber'.
module.exports = {
  testNumber: (input) => {
    // If the user types 'quit', exit the program.
    if (input === "quit") {
      process.stdout.write("Ok. Bye!\n");
      process.exit();
    }
    // If the input is not a number from 1 through 10, prompt the user to guess again.
    if (!numbers.includes(input)) {
      process.stdout.write(
        "Choose a number from 1 through 10!\nIs the number ... "
      );
    } else if (input === secretValue) {
      // If the input matches the secret number, exit the program.
      process.stdout.write(
        "Woah you got it! Are you psychic? See you later!\n"
      );
      process.exit();
    } else {
      // If the input is a number from 1 through 10 but does not match the secret number, prompt the user to guess again.
      process.stdout.write("Nope. Guess again!\nIs the number ... ");
    }
  },
};


/*
This code exports an object that contains a function called testNumber. The function takes an input argument and performs the following steps:

1. If the user types 'quit', exit the program.
2. If the input is not a number from 1 through 10, prompt the user to guess again.
3. If the input matches the secret number, exit the program.
4. If the input is a number from 1 through 10 but does not match the secret number, prompt the user to guess again.

The secret number is generated randomly using the Math.random() and Math.floor() methods, and is stored as a string in the secretValue variable. The array of strings representing the numbers 1 through 10 is stored in the numbers variable.
*/
