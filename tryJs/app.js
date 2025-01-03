// function calculateTime() {
//   let a = 0;
//   for (let i = 0; i < 10000; i++) {
//     a = a + i;
//   }
//   return a;
// }

// const beforeFunc = new Date();
// const beforeTimeFunc = beforeFunc.getTime();
// calculateTime();
// const afterFunc = new Date();
// const afterTimeFunc = afterFunc.getTime();

// console.log(afterTimeFunc - beforeTimeFunc);

// // function calculateTime(n) {
// //   let a = 0;
// //   for (let i = 0; i < n; i++) {
// //     a = a + i;
// //   }
// //   return a;
// // }

// // const beforeFunc = new Date();
// // const beforeTimeFunc = beforeFunc.getTime();
// // calculateTime(1000000000);

// // const afterFunc = new Date();
// // const afterTimeFunc = afterFunc.getTime();

// // console.log((afterTimeFunc - beforeTimeFunc) / 1000);

// // console.log(calculateTime(1000000000));

// // // Function to update the clock
// // function updateClock() {
// //   const now = new Date();
// //   const minutes = now.getUTCMinutes().toString().padStart(2, "0");
// //   const seconds = now.getUTCSeconds().toString().padStart(2, "0");

// //   // Clear the console and log the current time
// //   console.log(`${minutes}:${seconds}`);
// // }

// // // Update the clock every second
// // setInterval(updateClock, 1000);

// // // Initial call to display the clock immediately
// // updateClock();

// const user = {
//   name: "Saujal Karki",
//   grade: 12,
//   married: false,
// };

// const next = JSON.stringify(user);

// console.log(next);

// const next1 = JSON.parse(next);

// console.log(next1);
// console.log(next1.name);
// console.log(next1.grade);
// console.log(next1.married);

// console.log(Math.floor(2.6));
// console.log(Math.ceil(2.3));

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));
// console.log(user.hasOwnProperty("name"));
// console.log(user.hasOwnProperty("class"));

// let newObj = Object.assign(user, {
//   learning: true,
// });

// console.log(newObj);

// function sqr(a) {
//   return a * a;
// }

// function cube(a) {
//   return a * a * a;
// }

// function sumFunc(a, b, fn) {
//   const val1 = fn(a);
//   const val2 = fn(b);

//   return val1 + val2;
// }

// console.log(sumFunc(2, 3, sqr));
// console.log(sumFunc(2, 3, cube));

// (function () {
//   console.log("Hello World");
// })();

// // ----------------------------

// console.log("A1");

// // setInterval(() => {
// //   console.log("Hello world");
// // }, 1000);

// console.log("A2");

// console.log("A3");

// const fs = require("fs");

// fs.readFile("something.txt", "utf-8", function (err, data) {
//   console.log(data);
// });

// function findSum(n) {
//   let ans = 0;
//   for (let i = 0; i < n; i++) {
//     ans += i;
//   }
//   return ans;
// }

// function findSumTill100() {
//   return findSum(100);
// }

// setTimeout(findSumTill100, 1000);
// console.log("hello world");

// // my own asynchronous function
// function kiratsReadFile() {
//   return new Promise(function (resolve) {
//     fs.readFile("something.txt", "utf-8", function (err, data) {
//       resolve(data);
//     });
//   });
// }

// // callback function to call
// function onDone(data) {
//   console.log(data);
// }

// kiratsReadFile().then(onDone);

// const ab = new Promise(function (smth) {
//   smth();
// });

// function anythng() {
//   console.log(ab);
// }

// ab.then(anythng);

// function resolver(time) {
//   return new Promise(function resolved() {
//     setTimeout(function () {
//       console.log("resolved ");
//     }, time * 1000);
//   });
// }

// resolver(3).then();

// function resolved(result) {
//   console.log("Resolved");
// }

// function rejected(result) {
//   console.error(result);
// }

// Promise.reject(new Error("fail")).then(resolved, rejected);
// // Expected output: Error: fail

// (function () {
//   console.log("saujal karki");
// })();

const ab = function () {
  console.log("expression");
};

const abc = () => {
  console.log("arrow");
};

function a() {
  console.log("decleration");
}

(() => {
  // console.log("saujal", "line no 203");
})();

let name = "Saujal";
let caste = "karki";

name = "Prayash";
caste = "naprayash";

let fullName = `My name is ${name} ${caste}.`;

console.log(fullName);
