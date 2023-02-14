// Define an array of grocery items
const groceryList = [
  "orange juice",
  "bananas",
  "coffee beans",
  "brown rice",
  "pasta",
  "coconut oil",
  "plantains",
];

// Remove the first item from the groceryList array using the shift() method
groceryList.shift();
// Log the updated groceryList array to the console
console.log(groceryList);

// Add 'popcorn' to the beginning of the groceryList array using the unshift() method
groceryList.unshift("popcorn");
// Log the updated groceryList array to the console
console.log(groceryList);

// Return a new array with elements from index 1 up to (but not including) index 4 using the slice() method
const slicedArray = groceryList.slice(1, 4);
// Log the sliced array to the console
console.log(slicedArray);

// Find the index of the 'pasta' item in the groceryList array using the indexOf() method
const pastaIndex = groceryList.indexOf("pasta");
// Log the index of 'pasta' to the console
console.log(pastaIndex);
