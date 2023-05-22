//shal

//1.using spread operator
// const a = [1,2,3]
// let b = [...a]
// b[1] = 4
// console.log(b[1])
// console.log(a[1])

//2.using map,reduce and filter method
// const a = [1, 2, 3];
// let b = a.map((el) => el);
// b[1] = 4;
// console.log(b[1]); // 4
// console.log(a[1]); // 2

//3.array slice
// const a = [1,2,3]
// let b = a.slice(0)
// b[1] = 4
// console.log(b[1]) // 4
// console.log(a[1]) // 2

//4.Nested array
// const a = [1, 2, [4, 5], 5];
// const b = JSON.parse(JSON.stringify(a));
// b[2][0] = 5;
// console.log(b, "b");
// console.log(a, "a");

//exmple

// const a = [1, 2, 3];
// const b = a;
// b[0] = 2;
// console.log(a)
// console.log(b)

//using spread map and json.parse
// const a = [1, 2, 3];
// const b = [...a];
// const b = JSON.parse(JSON.stringify(a));
// const b = a.map((ele) => ele);
// const b = a.slice(0);
// b[0] = 2;
// console.log(a);
// console.log(b);
