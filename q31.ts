// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!


let username: string[] = [];

if (username.length === 0) {
    console.log("We need to find some users!");
} else {

}

// • Remove all of the usernames from your array, and make sure the correct message is printed.

let userNames: string[] = ["Eric", "Henry", "Admin","Bob"];

if (userNames.length=== 0) {
    console.log("We need to find some user!");}
         else {while(userNames.length<0) {userNames.pop(); }
         console.log("All user has been removed."); }

// there is some confusion that why have written two code
