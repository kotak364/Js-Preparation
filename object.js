// ---------------------- Compare two object -----------------------------------------------------

// const obj1 = {
//   name: "jaymeen",
//   age: 25,
// };

// const obj2 = {
//   name: "jaymeen",
//   age: 25,
// };

//You are comparing the Object it's actual means you are comparing referance. referance not same for objects
// console.log(obj1 === obj2); //false
// console.log(obj1 == obj2); //false
var fruit = { name: "apple" };
var fruitbear = fruit; // Assign fruit object reference to fruitbear
// Here fruit and fruitbear are pointing to same object
// console.log(fruit == fruitbear); // return true
// console.log(fruit === fruitbear); // return true
// fruit.name = "grape";
// console.log(fruitbear); // output: { name: "grape" }, instead of { name: "apple" }

// stringify() function converts objects into equivalent JSON strings. You can then use any of the comparison operators to compare the strings. The JSON. stringify() function converted both objects into JSON strings, and since both a and b have the same properties and values, the result is true

//JSON stringfy matches all key, key order and key value if same then only it's return true
// console.log(JSON.stringify(obj1) === JSON.stringify(obj2));
// const obj1 = { name: "Jack", age: 25 };
// const obj2 = { age: 25, name: "Jack" };
// let objEqual = false;
// const obj1Keys = Object.keys(obj1).sort();
// const obj2Keys = Object.keys(obj2).sort();
// if (obj1Keys.length !== obj2Keys.length) {
//   console.log(objEqual);
// } else {
//   const areEqual = obj1Keys.every((key, index) => {
//     const objValue1 = obj1[key];
//     const objValue2 = obj2[obj2Keys[index]];
//     return objValue1 === objValue2;
//   });
//   if (areEqual) {
//     objEqual = true;
//     console.log(objEqual);
//   } else {
//     console.log(objEqual);
//   }
// }

const obj1 = { name: "Jack", age: 25 };
const obj2 = { age: 25, name: "Jack" };

function compareObject(obj1, obj2) {
  let objEqual = false;
  let lengthofFirstObject = Object.keys(obj1).sort();
  let lengthofSecondObject = Object.keys(obj2).sort();

  console.log(lengthofFirstObject);
  console.log(lengthofSecondObject);
  if (lengthofFirstObject !== lengthofSecondObject) return objEqual;

  const compare = lengthofFirstObject.every((ele, index) => {
    const objValue1 = obj1[ele];
    const objValue2 = obj2[lengthofSecondObject[index]];
    return objValue1 === objValue2;
  });
  if (compare) {
    objEqual = true;
  } else {
    objEqual = false;
  }

  return objEqual;
}

console.log(compareObject(obj1, obj2));

//----------------------- Object.assign --------------------------------------------------------------
//Combine two or more object
//Deep copy of object
// const course = {
//   name: "web programming",
//   score: 75,
// };
// const grade = {
//   score: 92,
// };
// const teacher = {
//   teacher: "Mrs Mater",
// };

// const finalResult = Object.assign(course, grade, teacher);
// const copy = Object.assign({}, finalResult);
// console.log(copy, "finalResult");
