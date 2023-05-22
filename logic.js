//1.Remove duplicate elements from array
// const arr = [1, 2, 3, 4, 5, 6, 7, 7];

// const newARR = arr.filter((ele, index) => {
//   return index === arr.indexOf(ele);
// });

//2. find min and max from array
// const newArr = [10, 20, 30, 60, 50];
// let minNumber = newArr[0];
// let maxNumber = newArr[0];

// newArr.forEach((ele) => {
//   if (ele < minNumber) {
//     minNumber = ele;
//   }
// });

// newArr.forEach((ele) => {
//   if (ele > maxNumber) {
//     maxNumber = ele;
//   }
// });

// console.log(maxNumber, "maxNumber")
// console.log(minNumber, "minNumber")

//3 find second largest value in array
// const newArr = [10, 20, 30, 60, 50];

// const findMaxNumber = (arr) => {
//   let maxNumber = arr[0];
//   arr.forEach((ele) => {
//     if (ele > maxNumber) maxNumber = ele;
//   });
//   return maxNumber;
// };

// function findFirstLargest(arr) {
//   findMaxNumber(arr);
//   let largestValueIndex = arr.indexOf(maxNumber);
//   arr.splice(largestValueIndex, 1);
//   findMaxNumber(arr);
// }

// function findSecondLargestMethod2(arr) {
//   let second = -Infinity;
//   const maxNumber = findMaxNumber(arr);
//   arr.forEach((ele) => {
//     if (ele < maxNumber && second < ele) {
//       second = ele;
//     }
//   });
//   return second;
// }
// const secondLargestNumber = findSecondLargestMethod2(newArr);
// console.log(secondLargestNumber, "secondLargestNumber");
// findSecondLargest(newArr);

// 3 finding missing value in 1 to 10 in array
// const arr = [1, 2, 3, 4, 5, 7, 9];
// const missingElement = [];

// for (let i = 0; i < 10; i++) {
//   decendingElements = 10 - i;
//   !arr.includes(decendingElements) && missingElement.push(decendingElements);
// }

// console.log(missingElement, "missingElement");

// 3 finding missing value in 1 to 10 in array
// const arr = [2, 3, 4, 5, 7, 9];

// function findMissingValue(min, max) {
//   const missingElement = [];

//   for (let i = min; i < max; i++) {
//     decendingElements = max - i;
//     !arr.includes(decendingElements) && missingElement.push(decendingElements);
//   }
//   return missingElement.reverse();
// }

// const missingElement = findMissingValue(0, 10);
// console.log(missingElement);

// 4 finding odd and even number in array

// const arr = [1, 2, 4, 5, 6, 7, 10, 12, 13, 16];
// const oddArray = arr.filter((ele) => ele % 2 !== 0);
// const evenArray = arr.filter((ele) => ele % 2 == 0);
// console.log(oddArray, "oddArray");
// console.log(evenArray, "oddArray");

// 5 sum of all element of array
// const arr = [1, 4, 5, 6, 7, 8, 10];
// const sum = arr.reduce((a, b) => {
//   return a + b;
// }, 0);

// let sum = 0;
// arr.forEach((ele) => (sum += ele));
// console.log(sum, "sum");

//6 find factor of number
// function findFactor(num) {
//   if (num === 0) {
//     return "Please enter valid number";
//   }
//   let positiveNumber = Math.abs(num);
//   let arr = [];
//   for (let i = 1; i <= positiveNumber; i++) {
//     if (positiveNumber % i === 0) {
//       num > 0 ? arr.push(i) : arr.push(-i);
//     }
//   }
//   return arr;
// }

// console.log(findFactor(17));

//7 Prime Number series
// function primeNumber(min, max) {
//   const primeNumber = [];
//   for (let i = min; i < max; i++) {
//     const factorArr = findFactor(i);
//     console.log(factorArr)
//     factorArr.length === 2 && primeNumber.push(i);
//   }
//   return primeNumber;
// }

// console.log(primeNumber(0, 100));

//8 Reverse String
// function reverseString(str) {
//   return str.split("").reverse().join("");
// }

// console.log(reverseString("hello world"));

//9 Reverse each element in string

// function reverseEachElement(str) {
//   const arr = str.split(" ");
//   const newArr = [];
//   arr.forEach((element) => {
//     newArr.push(element.split("").reverse().join(""));
//   });

//   return newArr;
// }

//10 count vovels in string
// function countVovels(str) {
//   const vovels = ["a", "e", "i", "o", "u"];
//   const arr = str.toLowerCase().split("");
//   const strContainVovels = arr.filter((ele) => vovels.includes(ele));
//   return strContainVovels.length;
// }

// console.log(countVovels("Hello"));

//10 change value of variable
//using destructring

// let a = 10;
// let b = 20;
// console.log(a, b);
// [b, a] = [a, b];
// console.log(a, b);

//maths
// a = a + b;
// b = a - b;
// a = a - b;
// console.log(a, b);

//11 merge and short two array
// const arr = [1, 2, 5, 6];
// const arr2 = [7, 4, 5, 8];

// const combineArr = [...arr, ...arr2];
// const sortingArr = combineArr.sort((a, b) => a - b);
// console.log(sortingArr, "sortingArr");

//12 palindrom of string
// function palindromString(str) {
//   const arr = str.toLowerCase().split("");
//   console.log(arr);
//   // console.log(arr);
//   // const newArr = arr.filter((ele) => ele.split("").reverse().join("") === ele);
//   // return newArr;
// }

// palindromString("Madam eye test");

//13 Compare two array
// function compareTwoArray(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return "Length of both array are different";
//   }
//   const compareResult = arr1.every((ele) => arr2.includes(ele));
//   console.log(compareResult);
//   return compareResult;
// }
// console.log(compareTwoArray([1, 2, 3, 4, 5, 6], [1, 3, 5, 6, 4, 2]));

//13 find Intersection of two array
// function interSectionOfTwoArray(arr1, arr2) {
//   const interSectingElements = [];
//   arr1.forEach(
//     (ele) =>
//       arr2.includes(ele) &&
//       !interSectingElements.includes(ele) &&
//       interSectingElements.push(ele)
//   );
//   return interSectingElements;
// }
// console.log(
//   interSectionOfTwoArray([1, 10, 20, 4, 5, 5, 6], [1, 2, 3, 4, 5, 8])
// );

// 14 find Union of two array

// function findUnioun(arr1, arr2) {
//   const newArr = [...arr1, ...arr2];
//   //   const uniounOfArr = newArr.filter(
//   //     (ele, index) => index === newArr.indexOf(ele)
//   //   );

//   const uniounOfArr = [];
//   newArr.forEach(
//     (ele) => !uniounOfArr.includes(ele) && uniounOfArr.push(ele)
//   );

//   return uniounOfArr;
// }

// console.log(findUnioun([10, 30, 40, 50], [20, 40, 50, 10]));

// 15 Convert celsius to fahrenheit formula

// function celsiusToFahrenheit(celsius) {
//   let fahrenheit = celsius * 1.8 + 32;
//   return fahrenheit;
// }
// console.log(celsiusToFahrenheit(12));

// 16 Convert celsius to fahrenheit formula

// function fahrenheitToCelsius(farenheit) {
//   let celsius = (5 / 9) * (farenheit - 32);
//   return celsius;
// }
// console.log(fahrenheitToCelsius(87));

// / 17 Convert kilometer to miles

// function kilometerToMiles(kilometer) {
//   let factor = 0.621371;
//   return kilometer * factor;
// }
// console.log(kilometerToMiles(1));

// / 18 Convert first latter in uppercase in string
// function convertFirstLatter(str) {
//   const arr = str.toLowerCase().split(" ");
//   console.log(arr, "arr");

//   const newArr = arr.map(
//     (ele) => `${ele.charAt(0).toUpperCase()}${ele.slice(1)}`
//   );

//   return newArr;
// }

// console.log(convertFirstLatter("Hello jaymeen dsd"));

//19 fibonaci sequnce series index value
//0,1,1,2,3,5
// function fibonaciSeries(n) {
//   let arr = [];

//   let a = 0,
//     b = 1,
//     c,
//     i;
//   if (n == 0) return a;
//   for (i = 2; i <= n; i++) {
//     c = a + b;
//     a = b;
//     b = c;
//     // arr.push(b);
//   }

//   console.log(b);
//   return b;
// }

//20 fibonaci sequnce arr

// function fibonaciSeries(n) {
//   let arr = [];

//   let a = 0,
//     b = 1,
//     c,
//     i;
//   arr.push(a, b);
//   if (n == 0) return a;
//   for (i = 2; i < n; i++) {
//     c = a + b;
//     a = b;
//     b = c;
//     arr.push(b);
//   }

//   return arr;
// }

// console.log(fibonaciSeries(10));

//fibonaci sequence array methods

// function fibonaciSeries(n) {
//   var fib = [0, 1];
//   for (i = 2; i < n; i++) {
//     // Next fibonacci number = previous + one before previous
//     // Translated to JavaScript:
//     fib[i] = fib[i - 2] + fib[i - 1];
//   }
//   return fib;
// }

// console.log(fibonaciSeries(10));

//20 repeated Character in string

// function repeatedCharcterInString(str) {
//   let arr = str.split("");
//   const newArr = arr.filter((ele, index) => index !== arr.indexOf(ele));
//   console.log(newArr, "arr");
// return newArr;

// }

// repeatedCharcterInString("Heeello");

// 21 count number of occurace of string
// let myString = "abababc";
// let result = {};
// for (let str of myString) {
//   console.log(str);
//   result[str] = result.hasOwnProperty(str) ? result[str] + 1 : 1;
// }
// console.log(result);

// //22 filter value from object
// let temp = {
//   propA: true,
//   propB: true,
//   propC: false,
//   propD: true,
// };

// let obj = {};
// for (x in temp) {
//   if (temp[x] == true) {
//     obj[x] = temp[x];
//   }
// }

// console.log(obj);

//23 table of given integer

// function tableOfgivenInterger(number) {
//   let table = [];
//   for (let i = 1; i <= 10; i++) {
//     let multiplication = number * i;
//     table.push(multiplication);
//   }
//   return table;
// }

// console.log(tableOfgivenInterger(5));

//23 armStrong number
// 44 = 4*4 + 4*4
// function armStrongNumber(number) {
//   let length = number.toString().length;
//   let arr = number.toString().split("");
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     const power = Math.pow(arr[i], length);
//     sum += power;
//   }
//   return sum;
// }

// console.log(armStrongNumber(44));

// Sorting
// 24 Acceding order sorting

// function sortingOfArrayAcceding(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] > arr[j]) {
//         let a = arr[i];
//         arr[i] = arr[j];
//         arr[j] = a;
//       }
//     }
//   }
//   return arr;
// }

// console.log(sortingOfArrayAcceding(["jaymeen", "Maulik", "Akash"]));

// 25 Decending order sorting

// function sortingOfArrayDecending(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] < arr[j]) {
//         let a = arr[i];
//         arr[i] = arr[j];
//         arr[j] = a;
//       }
//     }
//   }
//   return arr;
// }

// //Alphabets order Sorting acceding

// 26 Acceding order sorting

// // const alphabetArr = ["Jaymeen", "Maulik", "Akash"];

// // function alphabetsOrderSorting() {
// //   for (let i = 0; i < alphabetArr.length; i++) {
// //     for (let j = i; j < alphabetArr.length; j++) {
// //       if (
// //         alphabet.indexOf(alphabetArr[i].split("")[0].toUpperCase()) >
// //         alphabet.indexOf(alphabetArr[j].split("")[0].toUpperCase())
// //       ) {
// //         let a = alphabetArr[i];
// //         alphabetArr[i] = alphabetArr[j];
// //         alphabetArr[j] = a;
// //       }
// //     }
// //   }

// //   return alphabetArr;
// // }

// // const alphabet = [
// //   "A",
// //   "B",
// //   "C",
// //   "D",
// //   "E",
// //   "F",
// //   "G",
// //   "H",
// //   "I",
// //   "J",
// //   "K",
// //   "L",
// //   "M",
// //   "N",
// //   "O",
// //   "P",
// //   "Q",
// //   "R",
// //   "S",
// //   "T",
// //   "U",
// //   "V",
// //   "W",
// //   "X",
// //   "Y",
// //   "Z",
// // ];

// // console.log(alphabetsOrderSorting());

// //Alphabets order Sorting decending

// 27 Acceding order sorting

// const alphabetArr = ["Jaymeen", "Maulik", "Akash"];

// function alphabetsOrderSorting() {
//   for (let i = 0; i < alphabetArr.length; i++) {
//     for (let j = i; j < alphabetArr.length; j++) {
//       if (
//         alphabet.indexOf(alphabetArr[i].split("")[0].toUpperCase()) >
//         alphabet.indexOf(alphabetArr[j].split("")[0].toUpperCase())
//       ) {
//         let a = alphabetArr[i];
//         alphabetArr[i] = alphabetArr[j];
//         alphabetArr[j] = a;
//       }
//     }
//   }

//   return alphabetArr;
// }

// const alphabet = [
//   "A",
//   "B",
//   "C",
//   "D",
//   "E",
//   "F",
//   "G",
//   "H",
//   "I",
//   "J",
//   "K",
//   "L",
//   "M",
//   "N",
//   "O",
//   "P",
//   "Q",
//   "R",
//   "S",
//   "T",
//   "U",
//   "V",
//   "W",
//   "X",
//   "Y",
//   "Z",
// ];

//28 Reduce methods exmaples

// const names = [
//   { name: "jaymeen", age: 18 },
//   { name: "radhika", age: 20 },
//   { name: "radhika", age: 20 },
//   { name: "radhika", age: 20 },
// ];

// const totalAge = names.reduce((a, b) => a + b.age, 0);
// console.log(totalAge);

//29 sorting practice

// const arr = [30, 40, 50, 20, 10];
// const arr = ["jameen", "Abhimanyu", "shreyash"];

// function sortingAcceding(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] > arr[j]) {
//         let x = arr[i];
//         arr[i] = arr[j];
//         arr[j] = x;
//       }
//     }
//   }

//   console.log(arr, "arr");
// }

// sortingAcceding(arr);

// program to check the number of occurrence of a character

// 30 Count string character

// function countString(str, letter) {
//   let count = 0;
//   console.log(str, "str");
//   // looping through the items
//   for (let i = 0; i < str.length; i++) {
//     console.log(str[i]);
//     // check if the character is at that position
//     if (str.charAt(i).toLowerCase() == letter.toLowerCase()) {
//       count += 1;
//     }
//   }
//   return count;
// }

// //passing parameters and calling the function
// const result = countString("Jaymeen Kotak", "K");
// console.log(result);

// function countString(str, letter) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === letter) {
//       console.log("compare");
//       count += 1;
//     }
//   }
//   return count;
// }

// console.log(countString("Jaymeen kotak", "K"));

//Prime Number series

// find a perfect sqaure

// function perfectSquare(num) {
//   const arr = [2, 3, 5, 6, 9];
//   const sqaure = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (Math.pow(num, j) === arr[i]) sqaure.push(arr[i]);
//     }
//   }
//   return sqaure;
// }

// console.log(perfectSquare(5));

// star pattern in js
//1 single pattern
//refer index.html for that
// for (let i = 0; i < 5; i++) {
//   for (let j = 0; j < i; j++) {
//     document.write("*");
//   }
//   document.write("<br/>");
// }

// 31 Loop through multidimetional array
var salary = [
  ["ABC", 24, 18000],
  ["EFG", 30, 30000],
  ["IJK", 28, 41000],
  ["EFG", 31, 28000],
];

// function findSalary(salary) {
//   console.log(salary[0][0]);
//   for (let i = 0; i < salary.length; i++) {
//     for (let j = 0; j < salary[i].length; j++) {
//       console.log(salary[i][j]);
//     }
//   }
// }

// findSalary(salary);

// 32 Combine all salary

// function findAllSalary(salary) {
//   const newArr = salary.flat();
//   console.log(newArr[5])
//   // const summation = newArr.reduce((acc, b) => acc +  , 0);
//   // return summation;
// }

// findAllSalary(salary);
