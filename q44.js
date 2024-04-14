// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich with:");
    items.forEach(function (item) { return console.log("- " + item); });
    console.log("Enjoy your sandwich!\n");
}
// Call the function three times with different number of arguments
makeSandwich("Chicken Tikka", "Cheese", "IceBerg");
makeSandwich("Spicy Beef", "Cream cheese", "Tomato", "Mustard", "Onions");
makeSandwich("Shami Kabab", "Cheese", "Green Chutney");
