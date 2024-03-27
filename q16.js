// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
var guestlist = ["fahad", "ali", "bilal", "anam"];
// console.log(guestlist);
var cannotattend = ('bilal');
var newguest = ("iqbal");
guestlist[guestlist.indexOf(cannotattend)] = newguest;
// // New Message :
// console.log("welcome freinds, I have found a bigger dinner table");
// New Guest addition 
guestlist.unshift("Nazir");
// console.log(guestlist);
// New guest in middel addition: 
var middilegust = ("kafeel");
var middleIndex = guestlist.length / 2;
guestlist.splice(middleIndex, 0, middilegust);
// console.log(guestlist);
// Guest at the end
guestlist.push("saad");
// console.log(guestlist);
//Invite only 2 people for dinner 
console.log("we can only invite only 2 Person for dinner");
// reduce list & print message 
while (guestlist.length > 2) {
    guestlist.pop();
}
;
guestlist.map(function (item) { return console.log("\nHi, ".concat(item, " only both of you are invited to dinner ")); });
//print remove guest list
while (guestlist.length > 2) {
    var removeguest = guestlist.pop();
    console.log("Dear ".concat(removeguest, ", You are not invited to dinner"));
}
;
//Dinner cancalled & empty list print
while (guestlist.length = 0) {
    guestlist.pop();
}
;
guestlist.map(function (item) { return console.log("\nHi, ".concat(item, " due to some emergency dinner is calcalled  ")); });
console.log(guestlist);
