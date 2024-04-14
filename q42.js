// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
// Array of magician's names
var magicians = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
function show_magicians(magicians) {
    magicians.forEach(function (magician) { return console.log(magician); });
}
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
}
// Call the function to modify the magicians
make_great(magicians);
// Call the function to show modified magicians
show_magicians(magicians);
