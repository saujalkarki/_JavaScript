'use strict';
/*------------------------------------------------Note Before Starting-----------------------------------
The codes in this file may contain same variable names multiple times
so if you are going through this codes please uncomment any one seection first that is inside the multiple line comments
and comment it down again to view another section 
---------------------------------------------------------------------------------------------------------*/

/*-----------------------------------------------------------------
// Scope of variables

function calcAge(birthYear) {
  const age = 2080 - birthYear;

  function printAge() {
    const output = `${firstName} You are ${age}, born in ${birthYear}.`;
    console.log(output);
    var millenial = true;

    if (birthYear >= 2055 && birthYear <= 2065) {
      const str = `oh, and you're a millenial, ${firstName}`;

      console.log(str);
      function add(a, b) {
        return a + b;
      }
    }
    console.log(millenial);
  }
  printAge();
  return age;
}

const firstName = 'Saujal';
calcAge(2060);
*/

/*
// Hoisting and Temperal Dead Zone (TDZ)

console.log(me);
// console.log(job);
// console.log(year);

var me = 'Saujal';
let job = 'Student';
const year = 2060;

console.log(me);
console.log(job);
console.log(year);

console.log(addDecl(2, 5));
// console.log(addExpr(5, 6));
// console.log(addArr(8, 2));

function addDecl(a, b) {
  return a + b;
}

var addExpr = function (a, b) {
  return a + b;
};

var addArr = (a, b) => {
  return a + b;
};

console.log(undefined);

if (!numProducts) {
  deleteShoppingCart();
}

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
*/

// The this keyword

/*------------------------------------------------------------
const recall = {
  firstName: 'Saujal',
  lastName: 'Karki',
  dob: 2060,
  graduation: 2084,
  str: function () {
    return `${this.firstName} ${recall.lastName} of age ${
      this.graduation - this.dob
    } is going to graduate on ${recall.graduation} B.S.`;
  },
  // The this keyword doesn't work on the arrow function
  // str: () => {
  //   return `${this.firstName} ${recall.lastName} of age ${
  //     this.graduation - this.dob
  //   } is going to graduate on ${recall.graduation} B.S.`;
  // },
};

console.log(recall.str());
*/

/*-------------------------------------------------------
console.log(this);

const calcAge = function (birtYear) {
  console.log(birtYear);
  console.log(this);
};

calcAge(2060);

const calcAgeArr = birtYear => {
  console.log(birtYear);
  console.log(this);
};

calcAgeArr(2060);

const smth = {
  year: 2060,
  calcYear: function () {
    console.log(this);
    console.log(this.year - 1);
  },
};

smth.calcYear();

const httsr = {
  year: 2080,
};

httsr.calcYear = smth.calcYear;

httsr.calcYear();

const s = smth.calcYear;

console.log(s);
s();
*/

/*-----------------------------------------------------------------
// The difference between regual function and arrow function

// let firstName = 'Nichal';
// const firstName = 'Nirmal';
// var firstName = 'Yudeen';

const smth = {
  firstName: 'Saujal',
  lastName: 'Karki',
  year: 2060,
  calcAge: function () {
    console.log(this);
    console.log(2080 - this.year);

    // const self = this;
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 2055 && self.year <= 2065);
    // };
    // isMillenial();

    // Arrow function uses the this keywords from parent
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 2055 && this.year <= 2065);
    };
    isMillenial();
  },
  greet: function () {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};

smth.greet();
smth.calcAge();

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(2, 5);
addExpr(2, 5, 6);
addExpr(2, 5, 6, 9, 3, 4);

// Arrow function doesnot show arguments keyword like the this keyword
// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };

// addArrow(2, 5, 8);
*/

/*----------------------------------------------------------
// Primitives vs Objects

let age = 19;
let oldAge = age;
age = 31;

console.log(age);
console.log(oldAge);

const me = {
  firstName: 'Saujal',
  age: 20,
};

const friend = me;

friend.age = 27;
console.log('Friend:', friend);
console.log('Me:', me);
*/

/*
// primitive types
let lastName = 'Karki';
let oldLastName = lastName;
lastName = 'Dahal';

console.log(lastName, oldLastName);

// Reference types
const smth = {
  stts: 'unmarried',
  firstName: 'Mina',
  lastName: 'Dahal',
  age: 27,
};

const msmth = smth;
msmth.lastName = 'karki';
msmth.stts = 'married';

console.log(smth);
console.log(msmth);

// copying objects
const smth2 = {
  firstName: 'Saujal',
  lastName: 'Karki',
  age: 19,
  family: ['alice', 'bob'],
};

// object.assign doesn't copy deep into the object
const copycat = Object.assign({}, smth2);
copycat.lastName = 'KARKI';

copycat.family.push('sam');
copycat.family.push('giva');

console.log(smth2);
console.log(copycat);
*/
