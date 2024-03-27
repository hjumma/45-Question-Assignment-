// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// // • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. 
// • Print a new set of invitation messages, one for each person in your list.
var guestlist = ["fahad", "ali", "bilal", "anam"];
console.log(guestlist);
var cannotattend = ('bilal');
var newguest = ("iqbal");
guestlist[guestlist.indexOf(cannotattend)] = newguest;
// New Message :
console.log("welcome freinds, I have found a bigger dinner table");
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
guestlist.map(function (item) { return console.log("\nHi, ".concat(item, " you are invited on dinner & there is a surprise that more guest will be joining us")); });
