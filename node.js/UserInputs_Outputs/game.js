let secretValue = Math.floor(1 + Math.random() * 10).toString();

let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

module.exports = {
  testNumber: (input) => {
    if (input === "quit") {
      process.stdout.write("Ok. Bye!\n");
      process.exit();
    }
    if (!numbers.includes(input)) {
      process.stdout.write(
        "Choose a number from 1 through 10!\nIs the number ... "
      );
    } else if (input === secretValue) {
      process.stdout.write(
        "Woah you got it! Are you psychic? See you later!\n"
      );
      process.exit();
    } else {
      process.stdout.write("Nope. Guess again!\nIs the number ... ");
    }
  },
};
