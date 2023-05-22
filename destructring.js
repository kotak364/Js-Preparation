//---------------- Destructuring start  ---------------------------//
// using destructuring we can extract the necessary value from array or object. and store them into variables

//1 destructuring of array and object
// const arr = [1, 2, 3];
// const [a, b, c] = [1, 2, 3];
// console.log(a)
// console.log(b)
// console.log(c)

// const obj = {
//   name: "jaymeen",
//   age: 22,
// };

// const { name, age } = obj;
// console.log(name, "name");
// console.log(age, "age");

//destructure first and third value
// const arr = [1, 2, 3];
// const [a,,c] = [1, 2, 3];
// console.log(a)
// console.log(c)

// const obj = {
//   name: "jaymeen",
//   age: 22,
//   city: "Ahmedabad",
// };

// const { name, city } = obj;
// console.log(name, "name");
// console.log(city, "city");

//set default value
// const arr = [1, 2, 3];
// const [a, b, c = 1] = [1, 2];
// console.log(a);
// console.log(b);
// console.log(c);

// const obj = {
//   name: "jaymeen",
//   city: "Ahmedabad",
// };

// const { name, age = 33, city } = obj;
// console.log(name, "name");
// console.log(city, "city");
// console.log(age, "age");

//switching two variables using destructuring
// let [a, b] = [10, 20];
// [b, a] = [a, b];
// console.log(a);
// console.log(b);

//we can change key name in object also using destructuring

// const obj = {
//   name: "jaymeen",
//   age: 22,
//   city: "Ahmedabad",
// };
// const { name: userName } = obj;

// console.log(userName);

//---------------- Destructuring end ---------------------------//