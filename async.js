// sync code
//sync code run Line by Line
//sync run in same order

//sync code
let a = 1;
let b = 2;

console.log("Syncronous");

setTimeout(() => {
  console.log("Async code " + a);
}, 1000);

a = 10;

// fetch("/").then(function () {
//   console.log("Fetch");
// });

console.log(a);
console.log(b);

//async

function makeRequest(location) {
  return new Promise((resolve, reject) => {
    console.log(`Making Request to ${location}`);

    if (location === "Google") {
      resolve("Google says hi");
    } else {
      reject("We can only talk to Google");
    }
  });
}

function processRequest(response) {
  return new Promise((resolve, reject) => {
    console.log(`Processing response`);
    resolve(`Extra Infomration  ${response}`);
  });
}

// makeRequest("Google")
//   .then((response) => {
//     console.log(response);
//     return processRequest(response);
//   })
//   .then((process) => console.log(process))
//   .catch((err) => {
//     console.log(err);
//   });

//async and await make function asynchronous
//it's return promise result //success or reject

// async function doWork() {
//   try {
//     const response = await makeRequest("FaceBook");
//     console.log("response Recevied");
//     const processResponse = await processRequest(response);
//     console.log(processResponse);
//   } catch (err) {
//     console.log(err);
//   }
// }

// doWork();
