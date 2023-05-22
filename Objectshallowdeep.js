// deep copying vs. shallow copying.
//In permitive data when we make copy new variable from old variable.  new variable entirely disconnected from old variable. when we change value of new variable it's old variable does not affected.
// In referance data type when we make copay of new variable from old variable. new variable entirely connected from old variable. when we change value of new variable it's old varialbe value also change.
// Deep Copy : A deep copy means that all of the values of the new variable are copied and disconnected from the original variable
//shallow Copy: A shallow copy means that certain (sub-)values are still connected to the original variable.

//Object shallow copy

// const user = {
//   name: "jaymeen",
//   age: 23,
// };

// const user1 = user;
// user1.name = "maulik";
// console.log(user1, "user1");
// console.log(user, "user");

//deep copy of object
// 1.spread operator
// const user = {
//   name: "jaymeen",
//   age: 23,
// };

// const user1 = {...user}
// user1.name = 'maulik';
// console.log(user1, "user1");
// console.log(user, "user");

//2 Object.assign()
// const user = {
//   name: "jaymeen",
//   age: 23,
// };
// const user1 = Object.assign({}, user);
// user1.name = "maulik";
// console.log(user1, "user1");
// console.log(user, "user");

//3.Nested Objects
//shallow copy

// const a = {
//     foods: {
//       dinner: 'Pasta'
//     }
//   }
//   let b = {...a}
//   b.foods.dinner = 'Soup' // changes for both objects
//   console.log(b.foods.dinner) // Soup
//   console.log(a.foods.dinner) // Soup

//deep copy
// const a = {
//   foods: {
//     dinner: "Pasta",
//   },
// };
// let b = JSON.parse(JSON.stringify(a));
// b.foods.dinner = "Soup";
// console.log(a, "test1");
// console.log(b, "test2");
// console.log(b.foods.dinner); // Soup
// console.log(a.foods.dinner); // Pasta

// end of Object shallow and deep copy

//Practice example
//1. spread operator
// let a = {
//   name: "Jaymeen",
//   age: 22,
// };
// console.log(a, "a");
// let b = { ...a };
// b.name = "Maulik";
// console.log(b, "b");

//2 object assign
// let b = Object.assign({}, a);
// b.name = "Maulik";
// console.log(b, "b");
// console.log(a, "a");

//3 Json parse
// let b = JSON.parse(JSON.stringify(a));
// b.name = "maulik";
// console.log(b, "b");
// console.log(a, "a");

// const a = {
//   foods: {
//     dinner: "Pasta",
//   },
// };

// const b = JSON.parse(JSON.stringify(a));
// b.foods.dinner = "maggi";
// let b = {foods: {...a.foods}}
