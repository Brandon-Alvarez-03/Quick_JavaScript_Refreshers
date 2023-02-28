/**
 * This is an example of Readable Streams in Node.js.
 * Readable streams provide a way to read data from a source, such as a file, one chunk at a time.
 * In this example, we create a Readable stream using Node.js' 'fs' module and the 'createReadStream' method.
 * We then use 'readline' module to create an interface that will read data from the file 'shoppingList.txt'.
 * The 'line' event is emitted whenever the interface reads a new line from the file.
 * We attach a callback function 'printData' to the 'line' event, which logs the data to the console.
 * This way we can read and process the data from the file one line at a time.
 */

// Import the 'readline' and 'fs' modules.
const readline = require("readline");
const fs = require("fs");

// Create a Readable stream using 'fs.createReadStream' to read data from 'shoppingList.txt'.
const myInterface = readline.createInterface({
  input: fs.createReadStream("shoppingList.txt"),
});

// Define a callback function to handle each line of data read from the file.
function printData(data) {
  console.log(`Item: ${data}`);
}

// Attach the 'printData' function to the 'line' event of the Readable stream.
myInterface.on("line", printData);

// This code will read the contents of 'shoppingList.txt' and log each line to the console.
