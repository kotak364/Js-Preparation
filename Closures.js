//When we define function in other function, child function can access all the variable of parent function still parent function execuation done in execution context.

// A closure makes sure that a function doesn't loose connection to variables that existed at the function's birth place

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();
booker();
booker();
booker();

//More example on Closures

let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

// g();
// f();
// console.dir(f);

// Re-assigning f function
// h();
// f();
// console.dir(f);
