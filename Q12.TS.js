// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
var transportation = ['honda', "MG6x6", "silverado", "cb6"];
for (var _i = 0, transportation_1 = transportation; _i < transportation_1.length; _i++) {
    var vehicle = transportation_1[_i];
    console.log("I would like to own a ".concat(vehicle, "!"));
}
//method 2
transportation.map(function (item) { return console.log(("Alex, would like to own a"), (item)); });
