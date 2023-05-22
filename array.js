//Array methods
// --------------- Slice -----------------------
// const arr = ["a", "b", "c", "d", "e"];
// //slice method give slice of array from particular index
// //it will not change original array
// console.log(arr.slice(2));
// //it will not include last element
// console.log(arr.slice(2, 4));
// //it remove last two element
// console.log(arr.slice(-2));
// //it remove last one element
// console.log(arr.slice(-1));
// //it starting from index one remove two element
// console.log(arr.slice(1,-2));
// //it copy arr
// console.log(arr.slice(0));
// //we can copy array using spread operator
// console.log([...arr]);

// --------------- Splice -----------------------
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
//to delect element we use splice
//it change the original array
//second parameter indicate the number of element removed

//same as slice
// console.log(arr.splice(2), "arr")
// arr.splice(-1);
// console.log(arr);
// console.log(arr.splice(2,2));
// console.log(arr);

// We can add element using splice methods
// fruits.splice(2, 0, "Lemon", "Kiwi");
// console.log(fruits, "fruits");

//--------------------- REVERSE ------------------------------
//it reverse all the array
//it is also change the original array
// const arr2 = ["j","i","h","g","f"];
// console.log(arr2.reverse());

//------------------------------ CONCAT --------------------------
//it join two string
// const arr2 = ["j", "i", "h", "g", "f"];
// const arr3 = ["e", "r", "c", "g", "f"];
// const letters = arr.concat(arr2);
// console.log(arr.concat(arr2))
// console.log([...arr, ...arr2]);

//------------------------------ JOIN --------------------------
// it join all element of array and convert into string
// console.log(letters.join(" "));

// let text = "Hello world!";
// let result1 = text.substr(0, 5);
// console.log(result1, "result1")
// console.log(text, "result1")

// Basic Array Operations (Methods)
// ----------------------  Push -------------------------------------
const friends = ["Michael", "Steven", "Peter"];
// Add elements from last postion
// friends.push("Jay");
// console.log(friends, "friends");

// ----------------------  POP -------------------------------------
// Remove last elements from last position
// friends.pop(); // Last
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// ----------------------  Shift -------------------------------------
// Remove  elements from first position
// friends.shift(); // First
// console.log(friends);

// ----------------------  unshift -------------------------------------
// Add elements from first postion
// friends.unshift("jaymeen");
// console.log(friends, "friends");

// ----------------------  indexOF -------------------------------------
// using indexOf we get the index value of particular elements
// console.log(friends.indexOf("jaymeen"));

// ----------------------  length -------------------------------------
// using length we can know number of elements in array
// console.log(friends.length);

// ----------------------  Includes -------------------------------------
// Includes is case sensitive
// console.log(friends.includes("Steven"));
// console.log(friends.includes("steven"));
// console.log(friends.includes(23));

//------------------------ Map -----------------------------------------
// Map method doing operation on each element based on codition you have appiled in callback function  and return new array
// const arr = [10, 20, 30, 40, 50];
// const newArr = arr.map((ele) => ele * 2);
// const arr = [
//   { id: 1, name: "jaymeene" },
//   { id: 2, name: "jaymeene" },
//   { id: 3, name: "jaymeene" },
// ];
// const newArr = arr.map((ele) => 2*ele?.id);
// console.log(newArr)

//------------------------ Filter -----------------------------------------
// Filter method doing
// Filter method doing operation on each element based on codition you have applied, if codition is true for element it push element in new array, if condition is false, it not push element in new array and return new array
// const arr = [-10, 20, -30, 40, 50];
// const newArr = arr.filter((ele) => ele > 0);
// console.log(newArr);
//------------------------ Reduce -----------------------------------------
// Reduce method
// Reduce mehod use for mathementical opeation
// it's return single value not new array

// const arr = [-10, 20, -30, 40, 50];
// const newArr = arr.reduce((a, b) => a + b, 20);
// console.log(newArr);
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const max = movements.reduce((acc, mov) => {
//   if (acc > mov) {
//     return acc;
//   } else {
//     return mov;
//   }
// }, movements[0]);

// console.log(max);

// const names = [
//   { name: "jaymeen", age: 18 },
//   { name: "radhika", age: 20 },
//   { name: "radhika", age: 20 },
//   { name: "radhika", age: 20 },
// ];

// const totalAge = names.reduce((a, b) => a + b.age, 0);
// console.log(totalAge);

//-------------------------------------- find --------------------------------------------
// The find Method
//find method same as filter but it return first match
// it does not return array it return value which is satisfy given condition in callback function
// const arr = [-10, 20, -30, 40, 50];
// const firstWithdrawal = arr.find((mov) => mov < 0);
// console.log(firstWithdrawal);

//-------------------------------------- some --------------------------------------------
// The some Method
//some method return boolean true or false
// if one element of array which is satisfy given condition in callback function it's return true
// no any element of array not satisfy condition in callback function it's return false
// const arr = [10, 20, 30, 40, -50];
// const firstWithdrawal = arr.some((mov) => mov < 0);
// console.log(firstWithdrawal);

//-------------------------------------- every --------------------------------------------
// The every Method
//every method return boolean true or false
// if all element of array which is satisfy given condition in callback function it's return true
//  any one of the element of array not satisfy condition in callback function it's return false
// const arr = [-10, -20, -30, -40, -50];
// const firstWithdrawal = arr.every((mov) => mov < 0);
// console.log(firstWithdrawal);

// flat and flatMap
//-------------------------------------- flat --------------------------------------------
// Create a new array with the sub-array elements concatenated:
// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(arr.flat());

// const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// console.log(arrDeep.flat(2));

//------------------------------------ flatMap ------------------------------------------
//Combination of map and flat methods
// const arr = [
//   [2, 3],
//   [4, 5],
// ];
// const mapArrResult = arr.map((ele) => [ele[0] + ele[1]]);
// const flatMapArrResult = arr.flatMap((ele) => [ele[0] + ele[1]]);
// console.log(flatMapArrResult, "flatMapArrResult");
// console.log(mapArrResult, "mapArrResult");

//-------------------------------- Sorting --------------------------------------------------
//sorting array
//sort return new array
//it is also replace the original array

// const arr = [10, 50, 60, 30, 20];
//acceding order sorting
// arr.sort((a, b) => a - b);
// console.log(arr);
// deceing order sorting
// const newArr = arr.sort((a, b) => b - a);
// console.log(newArr, "newArr");

// const arr = ["jaymeen", "aksash", "rushi", "gopi"];
// const newArr = arr.sort();
// console.log(newArr);

//-------------------------------- Find Index --------------------------------------------------
// findIndex() returns the index of the first element that satisfy given condition in callback fuction
// if no condition satisfy it's return -1

// const ages = [3, 10, 18, 20];
// const findIndex = ages.findIndex((ele) => ele > 18);
// const names = [
//   { name: "jaymeen", age: 18 },
//   { name: "radhika", age: 20 },
// ];
// const findAge = names.findIndex((ele) => ele.age === 20);
// console.log(findAge);
