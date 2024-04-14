// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

let transportation: string[] = ['honda', "MG6x6", "silverado", "cb6"];

for (let vehicle of transportation) {console.log(`I would like to own a ${vehicle}!`);}

//method 2

transportation.map((item)=> console.log(("Alex, would like to own a"), (item)));


