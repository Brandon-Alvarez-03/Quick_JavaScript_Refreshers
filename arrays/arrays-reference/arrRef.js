let fruits = [
  "apple",
  "banana",
  "cherry",
  "watermelon",
  "blueberry",
  "blackberry",
];
console.log("original: ", fruits);

let newArr = ["grape", "cherry"];
console.log("newArr: ", newArr);

// Here are some of the most common array methods in JavaScript:

// ######################################################

console.log("push: ", fruits.push("mango"));
// : Adds one or more elements to the end of an array and returns the new length of the array.
console.log("after push: ", fruits);

// ######################################################

console.log("pop: ", fruits.pop());
// : Removes the last element from an array and returns it.
console.log(" after pop: ", fruits);

// ######################################################

console.log("shift: ", fruits.shift());
// : Removes the first element from an array and returns it.
console.log("after shift: ", fruits);

// ######################################################

console.log("unshift: ", fruits.unshift("kiwi"));
// : Adds one or more elements to the beginning of an array and returns the new length of the array.
console.log("after unshift: ", fruits);

// ######################################################

console.log("splice: ", fruits.splice(0, 2));
// : Adds or removes elements from an array.
console.log("after splice: ", fruits);

// ######################################################

console.log("slice: ", fruits.slice(0, 2));
// : Returns a shallow copy of a portion of an array into a new array object.
console.log("after slice: ", fruits);

// ######################################################

console.log("concat", fruits.concat(newArr));
// : Returns a new array that is the concatenation of two or more arrays.
console.log("after concat: ", fruits);

// ######################################################

console.log(fruits.join(","));
// : Joins all elements of an array into a string.
console.log("after join: ", fruits);

// ######################################################

console.log("indexOf apple: ", fruits.indexOf("apple"));
console.log("indexOf cherry : ", fruits.indexOf("cherry"));
console.log("indexOf blueberry: ", fruits.indexOf("blueberry"));

// : Returns the first index at which a given element can be found in the array, or -1 if it is not present.

// ######################################################

console.log("\n", "forEach: ");
fruits.forEach((elem) => {
  console.log(elem);
});
// : Executes a provided function once for each array element.

// ######################################################

const mappedArray = fruits.map((elem) => {
  return elem + "! ";
});
// : Creates a new array with the results of calling a provided function on every element in the calling array.
console.log("\n", "mappedArray: ", mappedArray);

// ######################################################

const filteredFruits = fruits.filter((word) => word.length > 6);
// : Creates a new array with all elements that pass the test implemented by the provided function.
console.log("\n", "filteredFruits: ", filteredFruits);

// ######################################################

// The Array.reduce() method in JavaScript is used to apply a function to each element in an array and reduce the array to a single value. The function takes two arguments: an accumulator, which accumulates the values from the array, and the current value, which is the current element being processed in the array. The reduce() method returns the final value of the accumulator.

const numsArray = [1, 2, 3];

// 0 + 1 + 2 + 3
const initialValue = 0;
const sumWithInitial = numsArray.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(sumWithInitial);
// Expected output: 10
