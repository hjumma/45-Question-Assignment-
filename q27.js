// // Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
var alien_color = ["green", "red", "yellow"];
for (var _i = 0, alien_color_1 = alien_color; _i < alien_color_1.length; _i++) {
    var color = alien_color_1[_i];
    if (color === "green") {
        console.log("Green player earned 5 points.");
    }
    else if (color === "yellow") {
        console.log("Yellow player earned 10 points.");
    }
    else if (color === "red") {
        console.log("Red player earned 15 points.");
    }
    ;
}
// let alien_color: string[] = ["green", "Red", "Yellow"];
// for (let color of alien_color) {
//     if (color === "green") {
//         console.log("The player earned 5 points for shooting the alien with color green.");
//     } else if (color === "yellow") {
//         console.log("The player earned 10 points for shooting the alien with color yellow.");
//     } else if (color === "Red") { // Note: "Red" should match the case of the element in the array
//         console.log("The player earned 15 points for shooting the alien with color red.");
//     }
// }
