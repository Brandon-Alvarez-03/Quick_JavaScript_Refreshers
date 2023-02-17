// Define a menu object that contains a meal and a price.
const menu = {
  _meal: "", // Define the meal variable.
  _price: 0, // Define the price variable.
  // Define a setter function for the meal variable.
  set meal(mealToCheck) {
    if (typeof mealToCheck === "string") {
      this._meal = mealToCheck; // Set the meal to the value passed to the setter.
    }
  },
  // Define a setter function for the price variable.
  set price(priceToCheck) {
    if (typeof priceToCheck === "number") {
      this._price = priceToCheck; // Set the price to the value passed to the setter.
    }
  },
  // Define a getter function that returns today's special.
  get todaysSpecial() {
    // If the meal and price are both set, return a string with the meal and price.
    if (this._meal && this._price) {
      return `Today's Special is ${this._meal} for $${this._price}`;
    } else {
      // Otherwise, return a message indicating that the meal or price is not set.
      return "Meal or price was not set correctly!";
    }
  },
};

// Set the meal to 'Ravioli'.
menu.meal = "Ravioli";
// Set the price to 12.
menu.price = 12;
// Print today's special to the console.
console.log(menu.todaysSpecial);
