'use strict';
/*------------------------------------------------Note Before Starting-----------------------------------
The codes in this file may contain same variable names multiple times
so if you are going through this codes please uncomment any one seection first that is inside the multiple line comments
and comment it down again to view another section 
---------------------------------------------------------------------------------------------------------*/

/*
// Default parameters for functions
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 5,
  price = 1000 / numPassengers
) {
  // used in ES5---In ES6 we can specify this value in the function parameters itself
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

console.log(bookings);
createBooking('LH123');
createBooking('LH123', 2);
createBooking('LH123', 4, 1999);
createBooking('LH123', undefined, 2900);
*/

/*
// passing arguments in functions
const flight = 'LH32';
const details = {
  fullName: 'Saujal Karki',
  passportNum: 581234,
};

const checkIn = (flightNum, passenger) => {
  flightNum = 'LH999';
  passenger.fullName = 'Mr.' + passenger.fullName;
  if (passenger.passportNum === 581234) {
    alert('Check in');
  } else {
    alert('wrong passport');
  }
};

console.log(flight);
console.log(details);

const newPassport = function (person) {
  person.passportNum = Math.trunc(Math.random() * 1000000);
  console.log(person.passportNum);
};

newPassport(details);
checkIn(flight, details);
*/

/*
// Functions calling another function--higher order Functions
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};
// console.log(oneWord('Saujal Karki is my Name'));
// console.log(upperFirstWord('Saujal Karki is my Name'));

// Higher Order Function cause this function is taking another function in it's arguments-------------------
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the BEST!', upperFirstWord);
transformer('JavaScript is the BEST!', oneWord);

const high5 = function () {
  console.log('👋');
};

document.body.addEventListener('click', high5);

['Saujal', 'Nischal', ''].forEach(high5);
*/

/*
// Function returning another function-------
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
    // return `${greeting} ${name}`;
  };
};

const greeterNamaste = greet('Namaste');

greeterNamaste('Everyone');
// console.log(greeterNamaste('Philip'));

greet('Hello')('Saujal');
// console.log(greet('Hello')('Nischal'));

// let respectPerson, respectWord;
// respectWord = word => {
//   return (respectPerson = person => {
//     return `I greet my ${person} by saying ${word}.`;
//   });
// };
// console.log(respectWord('mama')('Maternal Uncle'));

const respectWord = Word => Person => {
  return `I greet my ${Person} saying ${Word}.`;
};

console.log(respectWord('mama')('Maternal Uncle'));
*/

/*
// The call-apply-bind method of the function call-----------------
const buddhaAir = {
  airline: 'Buddha Air',
  aCode: 'BA',
  bookings: [],
  // book: function () {},
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.aCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.aCode}${flightNum}`, name });
  },
};

buddhaAir.book(6528, 'Sere');
buddhaAir.book(2354, 'KP ba');
buddhaAir.book(9172, 'parchande');
console.log(buddhaAir);

const taraAir = {
  airline: 'Tara Air',
  aCode: 'TA',
  bookings: [],
  // book(flightNum, name) {
  //   console.log(
  //     `${name} booked a seat on ${this.airline} flight ${this.aCode}${flightNum}`
  //   );
  //   this.bookings.push({ flight: `${this.aCode}${flightNum}`, name });
  // },

  // book,
};

// taraAir.book(105, 'Kishor Karki');
// taraAir.book(429, 'Ishwor karki');
// taraAir.book(688, 'Mekh Dahal');
// taraAir.book(935, 'Prahlad Kalakheti');

// call Method
const book = buddhaAir.book;

const shreeAir = {
  airline: 'Shree Air',
  aCode: 'SA',
  bookings: [],
};

book.call(buddhaAir, 6935, 'Yunika Dahal');

book.call(taraAir, 256, 'Yukesh Karki');
book.call(taraAir, 367, 'Anisha Karki');

book.call(shreeAir, 26845, 'Alisha Karki');
book.call(shreeAir, 25496, 'Nishcal Karki');

// apply method- is not much used in modern JavaScript
const flightData1 = [32635, 'Nirmal Karki'];
const flightData2 = [54156, 'Ameau Ameau'];

book.apply(shreeAir, flightData1);
book.call(shreeAir, ...flightData2);

// bind method
const bookBA = book.bind(buddhaAir);
const bookTA = book.bind(taraAir);
const bookSA = book.bind(shreeAir);

bookBA(2544, 'Saru Karki');
bookTA(465, 'Sunita Karki');
bookSA(54198, 'Ilesh Ghimire');

// const bookTA2 = book.bind(taraAir, 659, 'Saujal karki');
// bookTA2();
const bookTA2 = book.bind(taraAir, 659);
bookTA2('Hari Karki');
bookTA2('Tara karki');
bookTA2('Sangita Karki');

// With Event Listeners
buddhaAir.planes = 300;
buddhaAir.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', buddhaAir.buyPlane.bind(buddhaAir));

// partial application
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);

// console.log(addVAT(1000));
// console.log(addVAT(1526));

// const addTax = value => {
//   return rate => {
//     return value + value * rate;
//   };
// };

const addTax = function (value) {
  return function (rate) {
    return value + value * rate;
  };
};

console.log(addTax(1000)(0.2));
console.log(addTax(10)(0.1));

// console.log(buddhaAir);
// console.log(taraAir);
// console.log(shreeAir);
*/

/*------------------------------------------------------Coding Challange 1----------------------------------------------
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
};

// Adding registerNewAnswer method to the object
poll.registerNewAnswer = function () {
  const answer = Number(
    prompt(
      `${this.question}\n${this.options.join('\n')}\n(Write option number)`
    )
  );
  // saving the answer to the answers array
  // if (
  //   typeof answer === 'number' &&
  //   answer >= 0 &&
  //   answer < this.options.length
  // ) {
  //   this.answers[answer] += 1;
  // }
  typeof answer === 'number' &&
    answer >= 0 &&
    answer < this.options.length &&
    this.answers[answer]++;
  this.displayResults(
    prompt('Do you want the results in "array" type or "string" type?')
  );
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults = function (type) {
  if (type === 'array') {
    console.log(this.answers);
  } else if (type === 'string') {
    console.log(`Poll results are ${this.answers.join(', ')}.`);
  }
};

poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'array');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');

poll.displayResults.call({ answers: [5, 2, 3] }, 'array');
poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
-----------------------------------------------------------------------------------------------------------------------*/

/*
// Immediately Invoked Function Expressions(IIFE)
// normal function
const runOnce = function () {
  console.log('This will never run again.');
};
runOnce();
// IIFE
(function () {
  console.log('This will never run again.');
})();

(() => {
  console.log('This is also IIFE, but an arrow one.');
})();

(function (Name) {
  console.log(Name);
})('Saujal');
*/

/*
// Closures in JavaScript
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

console.dir(booker);

// Examples to closures
// Example-1
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

h();
f();
console.dir(f);

g();
f();
console.dir(f);

// Example-2
const boardPassengers = function (num, waitT) {
  const perGroup = num / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${num} passengers.`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, waitT * 1000);

  console.log(`Will start boarding in ${waitT} seconds.`);
};

const perGroup = 1000; //Here the closures are given the priority..

boardPassengers(180, 3);
*/

/*------------------------------------------------------Coding Challange 1----------------------------------------------
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
-----------------------------------------------------------------------------------------------------------------------*/
