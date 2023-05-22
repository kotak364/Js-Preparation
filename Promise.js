// async programming allows your code to run in the background without blocking the execution of other code
// async js is non blocking
// exmaple setTimout, setInterval

//Promise
// A container or placeholder for a future value
// to avoid callback hell we use promise
//Life cycle of promise
//pending - asyn task starting
//setlled - asyn task has finished
//setlled two types
//fulfill promise and rejected promise
//fulfill - sucess response
//rejected - error happend
// we can apply then methods on promise
//fetch function return promise

//Creating Promise

// let p = new Promise((resolve, reject) => {
//   let a = 1 + 1;
//   if (a == 2) {
//     resolve("Sucess");
//   } else {
//     reject("Failed");
//   }
// });

// p.then((message) => {
//   console.log("This is in the then " + message);
// }).catch((message) => {
//   console.log("This is in the catch " + message);
// });

// //CallBack function

// const userLeft = false;
// const userWatchingCatMeme = false;

// function watchTutorialCallback(callback, errorCallback) {
//   if (userLeft) {
//     errorCallback({
//       name: "User Left",
//       message: "(",
//     });
//   } else if (userWatchingCatMeme) {
//     errorCallback({
//       name: "User Watching Cat Meme",
//       message: "WebDevSimplified < Cat",
//     });
//   } else callback("Thumbs up and Subscribe");
// }

// watchTutorialCallback(
//   (message) => {
//     console.log("Success:" + message);
//   },
//   (error) => {
//     console.log(error.name + "/" + error.message);
//   }
// );

// function watchTutorialPromise() {
//   return new Promise((resolve, reject) => {
//     if (userLeft) {
//       reject({
//         name: "User Left",
//         message: "(",
//       });
//     } else if (userWatchingCatMeme) {
//       reject({
//         name: "User Watching Cat Meme",
//         message: "WebDevSimplified < Cat",
//       });
//     } else resolve("Thumbs up and Subscribe");
//   });
// }

// watchTutorialPromise()
//   .then((message) => {
//     console.log("Success: " + message);
//   })
//   .catch((error) => {
//     console.log(error.name + " " + error.message);
//   });

// const recordVideoOne = new Promise((resolve, reject) => {
//   resolve("Video 1 Recorded");
// });

// const recordVideoTwo = new Promise((resolve, reject) => {
//   resolve("Video 2 Recorded");
// });

// const recordVideoThree = new Promise((resolve, reject) => {
//   resolve("Video 3 Recorded");
// });

// Promise.all([recordVideoOne, recordVideoTwo, recordVideoThree]).then(
//   (messege) => console.log(messege)
// );

// Promise.race([recordVideoOne, recordVideoTwo, recordVideoThree]).then(
//   (messege) => console.log(messege)
// );

//Advantage of promise
//error handling part is easy..
//Promise stop when resolve and reject happens. it's not happens in callBack we can call callBack multiple time. Because async task require only two things success response and fail response
//understading of code is easy
