// Hoisiting declare all the variables and function declartion at the top before execuation of code.

//function declaration
//variable declaration

//1 part
//function declartion hoisting
// greet();
// function greet() {
//   console.log("Good morinig");
// }

//2 part
// If we try to call the variable that the function expression was assigned to, we will get a TypeError or ReferenceError, depending on the variable's scope:

//function expression not hosited
// greet2();
// const greet2 = () => {
//   console.log("Good evening");
// };
// var greet2 = () => {
//   console.log("Good evening");
// };
// let greet2 = () => {
//   console.log("Good evening");
// };

//3part
//variable declartion hoisiting
//variable declare with var is hoisited with default value undefined
// console.log(a, "var");
// var a;
// var a = 9; // delecaration hoisted to the top but intialization is not
// console.log(a);

//4part
//let and const are hoisted without default value
// let and const variables are hoisted too but they cannot be accessed before their declarations. This is called Temporal Dead Zone.

// console.log(b);
// console.log(c);
// let b = 9;
// const c = 9;

//TDZ
// A let or const is said to be in a Temporal dead zone from the start of the block untill code execution reaches the line where the variable is declared and intialized.

// const myName = "Jonas";

// if (myName === "Jonas") {
//   console.log(`Jonas is a ${job}`); //TDZ start
//   const age = 2047 - 1989;
//   console.log(age);
//   const job = "teacher"; //TDZ end
//   console.log(x);
// }

//why TDZ
// Makes it easier to avoid and catch errors
// Makes const variables actually work

//bad practice
// console.log(numProducts);
// if (!numProducts) deleteShoppingCart();
// var numProducts = 10;
// function run before of hoisting
// function deleteShoppingCart() {
//   console.log("All products deleted");
// }
