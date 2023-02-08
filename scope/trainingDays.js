// Explanation of Scopes:
// Global scope refers to variables and functions that are accessible from anywhere in the code.
// Local scope refers to variables and functions that are only accessible within a specific function.
// Block scope refers to variables declared within a block of code using the `let` or `const` keyword.

const getRandEvent = () => {
  // `random` is a local variable because it's declared within the `getRandEvent` function.
  const random = Math.floor(Math.random() * 3);
  if (random === 0) {
    return "Marathon";
  } else if (random === 1) {
    return "Triathlon";
  } else if (random === 2) {
    return "Pentathlon";
  }
};

const getTrainingDays = (event) => {
  // `days` is a local variable because it's declared within the `getTrainingDays` function.
  let days;
  if (event === "Marathon") {
    days = 50;
  } else if (event === "Triathlon") {
    days = 100;
  } else if (event === "Pentathlon") {
    days = 200;
  }
  return days;
};

const logEvent = (name, event) => {
  console.log(`${name}'s event is: ${event}`);
};

const logTime = (name, days) => {
  console.log(`${name}'s time to train is: ${days} days`);
};

// `event` is a local variable because it's declared within a block of code.
const event = getRandEvent();
// `days` is a local variable because it's declared within a block of code.
const days = getTrainingDays(event);
// `name` is a global variable because it's declared outside of any function.
const name = "Nala";

// Pass `name` and `event` as arguments to `logEvent` function.
logEvent(name, event);
// Pass `name` and `days` as arguments to `logTime` function.
logTime(name, days);

// `event2` is a local variable because it's declared within a block of code.
const event2 = getRandEvent();
// `days2` is a local variable because it's declared within a block of code.
const days2 = getTrainingDays(event2);
// `name2` is a global variable because it's declared outside of any function.
const name2 = "Warren";

logEvent(name2, event2);
logTime(name2, days2);
