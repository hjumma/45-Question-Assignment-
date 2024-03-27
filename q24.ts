// Question 24: More Conditional Tests: Expand your conditional tests to cover a wider range of comparisons.

let car: string = 'GMC';

// Test 11: Check if car is equal to 'Civic'
console.log("Test 11:", car<"Civic"); 

// Test 12: Check if car is equal to 'Thade'
console.log("Test 12:", car=="Thade!");

// Additional Conditions
let x : number = 9;
let y : number = 4;

// Test No 1: check if x > y

if (x > y) {console.log("Additional Test 1: x is greater than y");} else {console.log("Additonal Test 1: x is not greater than y");}

//Test No:2 x is less than y
if (x < y) {console.log("Additonal Test2: x is less than y");} else {console.log("Additonal Test 2: x is not less than y");}

//Test No:3 x == y
if (x===y) {console.log("Additonal Test 3: x is equal to y");} else {console.log("Additonal Test 3: x is not equal to y");}

// Test 4: Check if the sum of x and y equals 18
if (x+y===18) {console.log("Add Test 4:", x +y === 18)};


// Test No: 5: check if x+y <18 
console.log("Additional Test 5:", x + y < 18);


// Test No: 6: check if x+y >10
console.log("Additional Test 6:", x + y >10);

// Test No: 7: check if x/y=4
console.log("Additional Test 7:", x/y===4);

// Test No: 8: check if x*y=<2500
console.log("Additional Test 8:", x*y<2500);

// Test 9: Check if the difference between x and y is greater than 0
if (x - y > 0) {
    console.log("Additional Test 9: The difference between x and y is greater than 0.");
} else {
    console.log("Additional Test 9: The difference between x and y is not greater than 0.");
}
// • Tests using "and" and "or" operators

// Test No 10: Check if both x is greater than 5 and y is less than 15
console.log("Additional test 10:", x<5 && y>15);

// Test No 11: Check if both x is greater than 5 and y is less than 15
console.log("Additional test 11:", x>5 && y<15);

// Test No 12: Check if either x is less than 5 or y is greater than 15
console.log("Additional Test 7:", x < 5 || y > 15);

// • Test whether an item is in a array
let colors: string[] = ['red', 'blue', 'green'];

// Test No 13: Check if Color is in the colors array
console.log("Is Blue is in colors");
console.log("Additional Test 13:", colors.indexOf('blue') !==-1);

console.log("Is Pink is in colors");
console.log("Additional Test 14:", colors.indexOf('Pink') !==-1);


console.log("Is Purple is in colors");
console.log("Additional Test 15:", colors.indexOf("Purple") !==-1);


// • Test whether an item is not in a array
console.log("Is 'Purple' not in colors array?");
console.log("Additional Test 16:", colors.indexOf("Purple") === -1);
