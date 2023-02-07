// Sleep Debt Calculator

/*
This program calculates the sleep debt of a person based on the desired sleep per week and the actual sleep received.

Variables:
- desiredSleep: Stores the user's desired sleep per week, in hours.
- actualSleep: Stores the actual sleep received, in hours.
- sleepDebt: Stores the difference between desired sleep and actual sleep, in hours.

Input:
- desiredSleep: Accepted from the user through a prompt.
- actualSleep: Accepted from the user for each day of the week through a prompt in a loop.

Output:
- A message is displayed based on the value of sleepDebt. If sleepDebt is negative or 0, a congratulatory message is displayed. If sleepDebt is positive, a message indicating sleep debt and suggestions to get more sleep are displayed.

Control Flow:
- A loop is used to calculate the actual sleep received based on input for each day of the week.
- A conditional statement is used to display appropriate message based on the value of sleepDebt.
*/

// Variables to store user's desired sleep per week and actual sleep received
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let desiredSleep = 0;
let actualSleep = 0;

// Prompt the user for desired sleep per week
readline.question(
  "Enter your desired sleep per week in hours (a healthy amount is 49-63 per week): ",
  (desiredSleepIn) => {
    desiredSleep = parseInt(desiredSleepIn);
    let count = 1;
    const askSleep = () => {
      readline.question(
        `Enter hours of sleep received on day ${count}: `,
        (sleep) => {
          actualSleep += parseInt(sleep);
          count++;
          if (count <= 7) {
            askSleep();
          } else {
            // Calculate the sleep debt by subtracting actual sleep received from desired sleep
            let sleepDebt = desiredSleep - actualSleep;
            console.log(
              `\nYour desired sleep is ${desiredSleep} hours per week.`
            );
            console.log(`Your total sleep received is ${actualSleep} hours.`);
            // Conditional to check if sleep debt is negative or 0 and give message accordingly
            if (sleepDebt <= 0) {
              console.log(
                `Congratulations! You got extra sleep this week!\nYou got ${-sleepDebt} hours more than your desired sleep.`
              );
            } else {
              console.log(
                `You have a sleep debt of ${sleepDebt} hours this week.`
              );
              console.log("Here are some suggestions to get more sleep: ");
              console.log("1. Create a sleep schedule and stick to it");
              console.log("2. Avoid screens before bedtime");
              console.log("3. Create a relaxing bedtime routine");
              console.log(
                "4. Keep your sleeping environment cool, dark, and quiet"
              );
            }
            readline.close();
          }
        }
      );
    };
    askSleep();
  }
);
