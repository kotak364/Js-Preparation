// Hoisiting declare all the variables and function declartion before execuation of code.

//function declaration
//variable declaration



//1 part
//function declartion hoisting
// greet();
// function greet() {
//   console.log("Good morinig");
// }

//2 part
//function expression not hosited
// greet2();
// const greet2 = () => {
//   console.log("Good evening");
// };
// var greet2 = () => {
//   console.log("Good evening");
// };

//3part
//variable declartion hoisiting
// console.log(a);
// var a;
// var a = 9; // delecaration hoisted to the top but intialization is not
// console.log(a);

//4part
//let and const not hoisted
// console.log(b);
// console.log(c);
// let b = 9;
// const c = 9;


//bad practice
console.log(numProducts)
if(!numProducts) deleteShoppingCart();
var numProducts = 10;
//function run before of hoisting 
function deleteShoppingCart() {
    console.log('All products deleted')
}