"use strict";

// function sum(a, b) {
//   // "use strict";
//   return a + b;
// }

// sum(1, 2);

//1 by using strict if spell is wrong  of variable it's throw errros

// let variable = "value";
// vriable = 10; // miss spell return value without strict mode
// console.log(vriable);

//2 in strict you can't assign value to undefined and nan both are read only property

// undefined = 10;
// NaN = 10;

// console.log(undefined);
// console.log(NaN);

//3 It's give duplicate parameter error

// function combine(a, a, c) {
//   return [a, a, c];
// }

// console.log(combine(1, 2, 3));

//4 you can't assign property to permitive value in strict mode

// const v = false;
// v.prop = 10;
// console.log(v.prop);

//5 you must bind method if you want use this keyword inside function in strict mode otherwise it's return undefined

// function sum(a, b) {
//   console.log(this);
//   return a + b;
// }
// // console.log(this);
// sum.bind(this)(1, 2);
