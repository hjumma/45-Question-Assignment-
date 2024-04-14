// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

// function storeCarInfo(manufacturer: string, modelName: string, ...options: [string, any][]): object {
//     let carInfo: any = {
//         manufacturer: manufacturer,
//         modelName: modelName
//     };

//     // Loop through the options and add them to the carInfo object
//     options.forEach(option => {
//         const [key, value] = option;
//         carInfo[key] = value;
//     });

//     return carInfo;
// }

// // Call the function with required information and additional name-value pairs
// // Call the function for different car models and store their information
// const car1 = storeCarInfo("Toyota", "Camry", ["color", "red"], ["year", 2022]);
// const car2 = storeCarInfo("Honda", "Civic", ["color", "blue"], ["year", 2023], ["trim", "EX"]);
// const car3 = storeCarInfo("Ford", "Mustang", ["color", "yellow"], ["year", 2022], ["engine", "V8"]);
// const car4 = storeCarInfo("Tesla", "Model 3", ["color", "black"], ["year", 2023], ["autonomous", true]);
// const car5 = storeCarInfo("Chevrolet", "Silverado", ["color", "silver"], ["year", 2021], ["4x4", true], ["engine", "V6"]);

// // Print the returned objects to verify the stored information
// console.log(car1);
// console.log(car2);
// console.log(car3);
// console.log(car4);
// console.log(car5); 


function storeCarInfo(manufacturer: string, modelName: string, ...options: [string, any][]): string {
    let carInfo: string = `Manufacturer: '${manufacturer}',\n - ModelName: '${modelName}',\n`;

    // Loop through the options and add them to the carInfo string
    options.forEach(option => {
        const [key, value] = option;
        carInfo += `- ${key.charAt(0).toUpperCase() + key.slice(1)}: ${value},\n`;
    });

    return carInfo;
}

// Call the function for different car models and store their information
const car1 = storeCarInfo("Toyota", "Camry", ["color", "red"], ["year", 2022]);
const car2 = storeCarInfo("Honda", "Civic", ["color", "blue"], ["year", 2023], ["trim", "EX"]);
const car3 = storeCarInfo("Ford", "Mustang", ["color", "yellow"], ["year", 2022], ["engine", "V8"]);
const car4 = storeCarInfo("Tesla", "Model 3", ["color", "black"], ["year", 2023],);
const car5 = storeCarInfo("Chevrolet", "Silverado", ["color", "silver"], ["year", 2021],["engine", "V6"]);

// Print the returned strings to verify the stored information
console.log(car1);
console.log(car2);
console.log(car3);
console.log(car4);
console.log(car5);
