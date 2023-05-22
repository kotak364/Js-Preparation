//-----------------------ReAssigning of variables--------------------------
// We can reassign value of let and var, we can't reassign value of const
// let name = "jaymeen";
// name = "maulik";
// var surName = "Thakkar";
// surName = "Kotak";
// const piValue = 3.14;
// piValue = 3.18

//----------------------------Scope of variable--------------------
//1 var
//var having global or local scope
//Global scope is for variables declared outside functions, while local scope is for variables declared inside functions.

//global scope
// var a = 2;
// var b = 5;

// function sum() {
//     return a + b;
// }
// console.log(sum(), "sum")

//local scope
// function sum() {
//   var a = 2;
//   var b = 5;
//   return a + b;
// }
// console.log(sum(), "sum");
// console.log(a, "a")
// console.log(b, "b")

//2 let
//variable declare with let have global, local or block scope. block scope means we can access the value of variable inside the curly braces like loop,if,switch etc.

// let number = 50;

// function print() {
//   let square = number * number; // local scope

//   if (number < 60) {
//     var largerNumber = 80; // local scope
//     let anotherLargerNumber = 100; // block scope

//     console.log(square, "squre");
//   }

//   console.log(largerNumber, "largerNumber");
//   //   console.log(anotherLargerNumber);
// }

// console.log(number, "number");
// console.log(largerNumber, "largerNumber");
// console.log(square, "squre");
// console.log(anotherLargerNumber, "anotherLargerNumber");

// print();

//3 Const
//variable declare with const  have global, local or block scope. block scope means we can access the value of variable inside the curly braces like loop,if,switch etc.

// const number = 50;

// function print() {
//   const square = number * number; // local scope
//   if (number < 60) {
//     var largerNumber = 80;
//     const anotherLargerNumber = 100;
//     console.log(anotherLargerNumber, "anotherLargerNumber"); //block scope
//   }
//   console.log(largerNumber, "largerNumber"); // local scope
//   //   console.log(anotherLargerNumber, "anotherLargerNumber");
// }

// console.log(number, "number");
// print();

//---------------------------------hositing of variables---------------------------
//1 var
//variable declare with var is hoisted in global and local scope. This means that we can access the variable before the line where it was declared without errors.
//and var variable is hoisted with a default value of undefined.
// console.log(number); // undefined
// var number = 50;
// console.log(number);

// function print() {
//   var square1 = number * number;
//   console.log(square1, "Square1");
//   var number = 50;
//   var square2 = number * number;
//   console.log(square2, "Square2");
// }

// print();

//2 let
// var variables are hoisted with a default value of undefined, which makes them accessible before their line of declaration (as we've seen above).

// But, let variables are hoisted without a default initialization. So when you try to access such variables, instead of getting undefined, or variable is not defined error, you get cannot access variable before initialization error. Let's see an example:

//global scope
// console.log(number, "number");
// let number = 30;

//local scope
// function print() {
// let square = number * number;
// let number = 50;
// }
// print();

// ReferenceError: Cannot access 'number' before initialization

//3 const
//same as let

// global scope
// console.log(number, "number");
// const number = 30;

// local scope
// function print() {
// const square = number * number;
// const number = 50;
// }
// print();

//--------------------------------Redeclare varibale with var, let and const --------------------
//1 var
// var name = "Jaymeen";
// var name = "Maulik";
// console.log(name, "name");
//2 let
// let name = "Jaymeen";
// let name = "Maulik";
// console.log(name, "name");
//3 const
// const surName = "Kotak";
// const surName = "Thakkar";

//Wrap up the difference
// KEYWORD	     SCOPE	           REDECLARATION & REASSIGNMENT       	HOISTING
// var	       Global, Local	             yes & yes	                 yes, with default value
// let	       Global, Local, Block	         no & yes	                 yes, without defaultvalue
// const       Global, Local, Block	         no & no	                 yes, without default value

// If you never want a variable to change, const is the keyword to use.
// If you want to reassign values:

// and you want the hoisting behavior, var is the keyword to use
// if you don't want it, let is the keyword for you
// The hoisting behavior can cause unexpected bugs in your application. That's why developers are generally advised to avoid var and stick to let and cost.
