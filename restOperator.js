//--------------------------- Rest Operator start --------------------------------------
// 1 The rest parameter syntax allows us to represent an indefinite number of arguments as an array
// whenever you need to pass indefinite number of arguments better to use of rest parameter

function fun(...input) {
  let sum = 0;
  for (let i of input) {
    sum += i;
  }
  return sum;
}
console.log(fun(1, 2)); //3
console.log(fun(1, 2, 3)); //6
console.log(fun(1, 2, 3, 4, 5)); //15

//Array
const [a, ...b] = [1, 2, 3, 4];
console.log(a, "a");
console.log(b, "b");

//Object
const restaurant = {
  thu: { open: 12, close: 22 },
  fri: { open: 11, close: 23 },
  sat: { open: 0, close: 24 },
};

const { sat, ...weekdays } = restaurant;
console.log(weekdays, "weekDays");

//--------------------------- Rest Operator end --------------------------------------
