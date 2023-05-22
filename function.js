//call, apply and bind

//generally this key word in function refer to global object in sloppy mode. and undefied in strict mode.
//In an event, this refers to the element that received the event.
//We can set this to any object using call, apply and bind method in function

//------------------------------------- CALL ------------------------------------------------------
const obj = {
  name: "Jaymeen",
  surName: "kotak",
  age: 22,
  //   getFullName(person) {
  //     console.log(`${this.name}, ${this.surName} is ${person} person`);
  //     console.log(this, "this");
  //   },
  getFullName: function (person, handsome) {
    console.log(
      `${this.name}, ${this.surName} is ${person} person and ${handsome}`
    );
  },
};

const obj2 = {
  name: "Maulik",
  surName: "Kotak",
};

// obj.getFullName("good");

const getFullNameHandler = obj.getFullName;
// getFullNameHandler.call(obj, "good", "handsome");
// getFullNameHandler.call(obj2, "good");
// call(thisObj,arg)
// call immeditly call the function

//------------------------------------- APPLY ------------------------------------------------------
//apply (thisObj, [arg])
//Call same as appy just argument passed in array format
// const person = ["good", "handsome"];
// getFullNameHandler.apply(obj, person);

//------------------------------------- bind ------------------------------------------------------
// bind(thisobj, arg1,arg2)
//bind does not call function immedialty
//bind method return new function with set this keyword and arguments

const getName = getFullNameHandler.bind(obj, "good", "handsome");
getName();

// With Event Listeners
// In event lister this keyword pointing towards element on which event is occurss

// obj.ageIncrement = function () {
//   console.log(this);

//   this.age++;
//   console.log(this.age);
// };
// lufthansa.buyPlane();

// document.querySelector(".buy").addEventListener("click", lufthansa.buyPlane);
// document
//   .querySelector(".buy")
//   .addEventListener("click", obj.ageIncrement.bind(obj));

//--------------------------------- immedialtly invoked function ---------------------

//When we need to call function only one time. we use immedialtely invoked function

(function () {
  console.log("call this function once onlye");
})();

(() => console.log("call this function once"))()