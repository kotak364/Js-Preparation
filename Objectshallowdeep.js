// deep copying vs. shallow copying.
// Deep Copy : A deep copy means that all of the values of the new variable are copied and disconnected from the original variable
//shallow Copy: A shallow copy means that certain (sub-)values are still connected to the original variable.

//Object shallow copy
// const user = {
//   name: "jaymeen",
//   age: 23,
// };
// const user1 = user;
// user1.name = 'maulik'
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