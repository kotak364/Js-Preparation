//1 Logic

// function likes(names) {
//     names.forEach((ele, index, arr) => {
//       if (arr.length - 1 === index) {
//         names.splice(index, 0, "and");
//         names.splice(index + 2, 0, "like this");
//       }
//     });
//     console.log(names, "names");
//     return names.join(" ");
//   }
//   likes(["Jacob", "Alex"]);
//   likes(["Jacob", "Alex", "Jaymeen"]);

// function doubleChar(str) {
//   const arr = [];
//   const oldStr = str.split("");

//   oldStr.forEach((element) => {
//     arr.push(`${element}${element}`);
//   });

//   return arr.join("");
// }

// doubleChar("abcd");

// function doubleChar(str) {
//   return str
//     .split("")
//     .map(function (c) {
//       return c + c;
//     })
//     .join("");
// }
// console.log(doubleChar("abcd"));
