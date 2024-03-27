// // Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.

// • If the alien is yellow, print a message that the player earned 10 points.

// • If the alien is red, print a message that the player earned 15 points.

let alien_color : string [] = ["green", "red", "yellow"]; 

for (let color of alien_color){

if(color === "green") {console.log("Green player earned 5 points.");}
else  if(color === "yellow") {console.log("Yellow player earned 10 points.");}
else if (color === "red") {console.log("Red player earned 15 points.")};}

