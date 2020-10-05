// Named Function Declarations

// function sayHello(greeting, name = "World!") {
//     return `${greeting} ${name}!`;
// }


// console.log("sayHello message:", sayHello("Hi","Linsey"));

//Anonymous Function Expredssions
//NOT HOISTED !

// var add = function(firstNumber, secondNumber) {
//     return firstNumber + secondNumber;
// };

// console.log("1+3 with add:", add(1,3));


// //Declare a named function that takes an array of numbers, and returns the sum, or total, 
// // of all of the numbers in the array.

// function totalNumbers(numbers){
//     var total = 0;
//     for(var number of numbers){
//         total += number; 
//     };
//     return total;
// };

// var arrayOfNumbers = [1,2,3,4,5]
// console.log(totalNumbers(arrayOfNumbers));

// // Define an anonymous function expression that takes two arguments:
// // an object, for example, { name: 'Wojtek', age: 30 }
// // a string, for exmaple, 'name'
// // Your function should return true if the given string is a key on the given object and false if the 
// // object does not have a key that matches the string. 
// // Store this function in an appropriately named variable to invoke it.


// var keyOrNot = function(someObject, someString){
//     for (var key in someObject){
//         if (someString === key) {
//             return true;
//         };
//     };
//     return false;
// };

// var person = {
//     name: "Betty",
//     age: 30
// }

// console.log(keyOrNot(person, "name"));


//Arrow Functions

var multiply = (firstNumber, secondNumber) => firstNumber * secondNumber;

console.log("Multiply 2 by 5:",multiply(2,5));