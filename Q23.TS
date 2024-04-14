// Question 23: Conditional Tests: Write a series of conditional tests. Predict the results of each test.

let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.")
console.log("Test 1", car == 'subaru')

// • Look closely at your results, and make sure you understand why each line evaluates to True or False.

// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

// Test 2: Check if car is not equal to 'honda'
console.log("Test 2:", car != 'honda'); 

// Test 3: Check if car is equal to 'Subaru' (case-sensitive comparison)
console.log("Test 3:", car == 'Subaru'); 

// Test 4: Check if car is equal to 'SUBARU' (case-sensitive comparison)
console.log("Test 4:", car == 'SUBARU'); 

// Test 5: Check if car is equal to undefined
console.log("Test 5:", car == undefined); 

// Test 6: Check if car is not equal to null
console.log("Test 6:", car != null); 

// Test 7: Check if car is equal to 'subaru' but not strictly equal (using == instead of ===)
console.log("Test 7:", car == 'subaru');

// Test 8: Check if car is equal to 'subaru' using strict equality operator (===)
console.log("Test 8:", car === 'subaru');

// Test 9: Check if car is equal to 'SUBARU' ignoring case (convert both to lowercase)
console.log("Test 9:", car.toLowerCase() == 'subaru'); 

// Test 10: Check if car is equal to 'ford'
console.log("Test 10:", car == 'ford'); 

