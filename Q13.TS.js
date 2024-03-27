// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three to four people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var guestlist = ["fahad", "ali", "bilal", "anam"];
guestlist.map(function (item) { return console.log("Hi, ".concat(item, " you are invited on dinner")); });
