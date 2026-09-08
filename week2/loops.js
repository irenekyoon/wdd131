// Loops are used to repeat a block of code multiple times until a specified 
// condition is met.The most common loop structures in JavaScript are the for loop,
//  the while loop, and the forEach loop.

// for Loop: Repeats a block of code a specified number of times.
    // for(let i = 0; i < 10; i++) {
    // Code to execute in each iteration
// }
// Example:
for (let i = 0; i < 5; i++) {
    console.log("Iteration number: " + i);
}
// while Loop: Repeats a block of code as long as a specified condition is true.
    // while(condition) {
    // Code to execute while the condition is true
// }
// Example:
let count = 0;
while (count < 5) {
    console.log("Count is: " + count);
    count++;
}
// forEach Loop: Used with arrays; it iterates over each element of the array.
    // array.forEach(function (element) {
        // Code to execute for each element
    // });
// Example:
let fruits = ["apple", "banana", "cherry"];
fruits.forEach(function (fruit) {
    console.log("Fruit: " + fruit);
});
