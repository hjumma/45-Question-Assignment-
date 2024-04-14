// // Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
var current_users = ["Eric1", "bob89", "denny14", "Henry23", "pete45", "Admin"];
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
var new_users = ["Henry23", "Bob89", "user1", "user2", "user3", "admin"];
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
new_users.forEach(function (userName) {
    if (current_users.some(function (currentUsers) { return currentUsers === userName; })) {
        console.log("".concat(userName, " will need to enter new user"));
    }
    else {
        console.log("".concat(userName, " is avaliable"));
    }
});
console.log();
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
console.log();
new_users.forEach(function (userName) {
    if (current_users.some(function (currentusers) { return currentusers.toLocaleLowerCase() === userName.toLocaleLowerCase(); })) {
        console.log("".concat(userName, " wil need to enter new user"));
    }
    else {
        console.log("".concat(userName, " is avaliable"));
    }
});
