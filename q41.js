// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
// Array of magician's names
var magicians = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
function show_magicians(magicians) {
    magicians.forEach(function (magician) { return console.log(magician); });
}
// Call the function to show magicians
show_magicians(magicians);
