// Define an array of words in a secret message
let secretMessage = [
  "Learning",
  "is",
  "not",
  "about",
  "what",
  "you",
  "get",
  "easily",
  "the",
  "first",
  "time,",
  "it",
  "is",
  "about",
  "what",
  "you",
  "can",
  "figure",
  "out.",
  "-2015,",
  "Chris",
  "Pine,",
  "Learn",
  "JavaScript",
];

// Remove all elements after the last occurrence of 'JavaScript' using the splice() method
secretMessage.splice(secretMessage.lastIndexOf("JavaScript"));
// Log the updated secretMessage array to the console
// console.log(secretMessage);

// Add 'to' and 'Program' to the end of the secretMessage array using the splice() method
secretMessage.splice(secretMessage.length, 0, "to", "Program");
// Log the updated secretMessage array to the console
// console.log(secretMessage);

// Replace the word 'easily' with the word 'right' using the splice() method
secretMessage.splice(secretMessage.indexOf("easily"), 1, "right");
// Log the updated secretMessage array to the console
// console.log(secretMessage);

// Remove the first word from the secretMessage array using the splice() method
secretMessage.splice(0, 1);
// Log the updated secretMessage array to the console
// console.log(secretMessage);

// Add 'Programming' to the beginning of the secretMessage array using the unshift() method
secretMessage.unshift("Programming");
// Log the updated secretMessage array to the console
// console.log(secretMessage);

// Replace the words 'get', 'easily', 'the', 'first', and 'time,' with 'know,' using the splice() method
secretMessage.splice(secretMessage.indexOf("get"), 5, "know,");
// Log the updated secretMessage array to the console
// console.log(secretMessage);

// Convert the secretMessage array to a string and log it to the console with spaces between each word using the join() method
console.log(secretMessage.join(" "));
