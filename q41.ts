// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

// Array of magician's names
let magicians: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];

function show_magicians(magicians: string[]) {
    magicians.forEach(magician => console.log(magician));
};


// Call the function to show magicians
show_magicians(magicians);