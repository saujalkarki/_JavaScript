'use strict';

/*
// Constructor function
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  // badpractice to create function inside constructor function
  // this.caclAge = function () {
  //   return 2080 - this.birthYear;
  // };
};

// Person('Saujal', 2004);//This won't work because of the this keyword used in the function

// instances
const Nischal = new Person('Nischal', 2007);
// const Nirmal = new Person('Nirmal', 2007);
const Yudeen = new Person('Yudeen', 2009);
// const Yukesh = new Person('Yukesh');

// let Nirml;

console.log(Nischal);
// console.log(Nirmal);
console.log(Yudeen);

Person.hey = function () {
  console.log('Hey wassup!💕');
  console.log(this);
};

Person.hey();

console.log(Nischal instanceof Person);
// console.log(Nirml instanceof Person);

// prototypes

console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2023 - this.birthYear);
};

Nischal.calcAge();
// Nirmal.calcAge();
// Yudeen.calcAge();-
// Yukesh.calcAge();

console.log(Nischal.__proto__);
console.log(Nischal.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(Nischal));
console.log(Person.prototype.isPrototypeOf(Yudeen));
console.log(Person.prototype.isPrototypeOf(Person));

console.log(Nischal);

Person.prototype.gender = 'male';

console.log(Nischal, Yudeen);
console.log(Nischal.gender);

console.log(Nischal.hasOwnProperty('firstName'));
console.log(Nischal.hasOwnProperty('birthYear'));
console.log(Nischal.hasOwnProperty('gender'));

console.log(Nischal.__proto__);
console.log(Nischal.__proto__.__proto__);
console.log(Nischal.__proto__.__proto__.__proto__);

// console.dir to inspect the given thing
console.dir(Person.prototype.constructor);

const arr = [3, 6, 4, 4, 5, 6, 9, 3];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);
console.log(arr.__proto__.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(function (x) {
  return x + 1;
});
*/

/*-------------------------------#Coding Challange 1-----------------------------------
const Car = function (make, speed) {
  this.make = make;
  this.speed = `${speed}km/h`;
};

Car.prototype.accelerate = function () {
  this.speed = `${parseInt(this.speed) + 10}km/h`;
  return this.speed;
};

Car.prototype.brake = function () {
  this.speed = `${parseInt(this.speed) - 5}km/h`;
  return this.speed;
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

console.log(bmw);
console.log(bmw.accelerate());
console.log(bmw);
console.log(bmw.brake());
console.log(bmw);

console.log(mercedes);
console.log(mercedes.accelerate());
console.log(mercedes);
console.log(mercedes.brake());
console.log(mercedes);
--------------------------------------------------------------------------------------*/

/*
// ES6 classes

// class Expression
// const personCl = class {};

// class Decleration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // methods will be added to /.prototype property
  calcAge() {
    console.log(2023 - this.birthYear);
  }

  grt() {
    //greet
    console.log(`Hey! ${this.fullName}`);
  }

  get age() {
    return 2023 - this.birthYear;
  }

  set fullName(name) {
    console.log(name);
    return name.includes(' ')
      ? (this._fullName = name)
      : alert(`${name} is not a full name.`);
    // if (name.includes(' ')) this.fullName = name;
    // else alert(`${name} is not a full name.`);
  }

  get fullName() {
    return this._fullName;
  }

  // set checkAge(validAge) {
  //   console.log(
  //     `${
  //       this.age >= validAge
  //         ? 'You are a matured one!'
  //         : 'You are struggling to getmatured!'
  //     }`
  //   );
  // }

  // static keyword
  static hey() {
    console.log('hey Wassup!💕');
    console.log(this);
  }
}

const yunika = new PersonCl('Yunika Dahal', 2002);
console.log(yunika);
yunika.calcAge();
console.log(yunika.__proto__ === PersonCl.prototype);

// PersonCl.prototype.grt = function () {
//   console.log(`Hey! ${this.firstName}`);
// };

yunika.grt();
console.log(yunika);
console.log(yunika.age);
// yunika.checkFullName = 'ynka';
// yunika.checkFullName = 'Yunika Dahal';
// console.log(yunika);

const audit = new PersonCl('Audit Thapa', 2015);

console.log(audit);
PersonCl.hey();


// const account = {
//   owner: 'Ashika',
//   movements: [200, 530, 120, 300],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },

//   set latest(move) {
//     this.movements.push(move);
//   },
// };

// console.log(account.latest);

// account.latest = 150;

// console.log(account);
// console.log(account.movements);


// Object.create

const PersonProto = {
  calcAge() {
    console.log(2023 - this.birthYear);
  },
};

const Saujal = Object.create(PersonProto);

Saujal.name = 'Saujal';
Saujal.birthYear = 2004;
Saujal.calcAge();
console.log(Saujal);

console.log(Saujal.__proto__ === PersonProto);

const Sangam = Object.create(PersonProto);

Sangam.name = 'Sangam';
Sangam.birthYear = 2005;

console.log(Sangam);
Sangam.calcAge();
*/

/*-------------------------------#Coding Challange 2-----------------------------------
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    return `${this.make} is in the spped of ${this.speed} km/h, after accelerating!`;
  }

  brake() {
    this.speed -= 5;
    return ` ${this.make} is at the speed of ${this.speed} km/h, after applying brake!`;
  }

  get speedUS() {
    return `${this.speed / 1.6} mi/h`;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarCl('Ford', 120);

console.log(ford);
console.log(ford.speed);
console.log(ford.make);

console.log(ford.speedUS);
console.log(ford.accelerate());
console.log(ford.brake());
ford.speedUS = 50;
console.log(ford);
--------------------------------------------------------------------------------------*/

/*
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.age = function () {
  let age;
  return (age = 2023 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// linking prototype
Student.prototype = Object.create(Person.prototype);

Student.prototype.intro = function () {
  return `My name is ${this.firstName} and I study ${this.course}.`;
};

const mike = new Student('Mike Tison', 1995, 'Life_changing');

console.log(mike);
console.log(mike.intro());
console.log(mike.__proto__ === Student.prototype);
console.log(mike.age());
console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);
console.log(mike.__proto__.__proto__.__proto__);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);

console.log(mike instanceof Student);
console.log(mike instanceof Person); // is false when the Person object is not linked with the Student object
console.log(mike instanceof Object);
*/

/*-------------------------------#Coding Challange 3-----------------------------------
const Car = function (make, speed) {
  this.make = make;
  this.speed = `${speed} km/h`;
};

Car.prototype.accelerate = function () {
  this.speed = `${parseInt(this.speed) + 10} km/h`;
};

Car.prototype.brake = function () {
  this.speed = `${parseInt(this.speed) - 5} km/h`;
};

const EV = function (make, speed, cbCharge) {
  Car.call(this, make, speed);
  this.cbCharge = `${cbCharge}%`;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.cbCharge = `${chargeTo}%`;
};

EV.prototype.accelerate = function () {
  this.speed = `${parseInt(this.speed) + 20} km/h`;
  this.cbCharge = `${parseInt(this.cbCharge) - 1}%`;
};

EV.prototype.brake = function () {
  this.speed = `${parseInt(this.speed) - 10} km/h`;
};

const tesla = new EV('Tesla', 120, 23);

console.log(tesla);
tesla.chargeBattery(75);
console.log(tesla);
tesla.accelerate();
console.log(tesla);
tesla.brake();
console.log(tesla);
console.log(
  `${tesla.make} going at ${tesla.speed}, with a charge of ${tesla.cbCharge}.`
);
--------------------------------------------------------------------------------------*/

/*
// prototype chain using object.create

const PersonProto = {
  calcAge() {
    console.log(2023 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(
    `My name is ${this.firstName}. I am currently studying ${this.course}.`
  );
};

const Nischal = Object.create(StudentProto);
Nischal.init('Nischal', 2007, 'Civil Engineering');
Nischal.calcAge();
Nischal.introduce();
console.log(Nischal);
*/

/*
// Inheritance between classes
class Person {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2023 - this.birthYear);
  }

  greet() {
    console.log(`Namaste, ${this.fullName}!`);
  }

  get age() {
    return 2023 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${this.fullName} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  static hey() {
    consolew.log('Hey there 👋');
  }
}

class Student extends Person {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(`${2023 - this.birthYear} is my present age.`);
  }
}

const patrik = new Student('Pratik Dahal', 2003, 'BIT');
const angel = new Student('Angel Rai', 2004);

console.log(patrik);
console.log(angel);

patrik.introduce();
// angel.introduce();
patrik.calcAge();
*/

// public fields
// private fields
// public methods
// private methods

/*
class Account {
  // defining puiblic fields
  loacle = navigator.language;

  // private fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin, movements) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    // this._pin = pin;
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thank you for opening an account ${this.owner}.`);
  }

  // public methods
  getMovements() {
    return this.#movements;
  }

  deposits(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposits(-val);
    return this;
  }

  rqstLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposits(val);
      return this;
    }
  }

  // private methods
  #approveLoan(val) {
    return true;
  }
}

const account1 = new Account('Saujal Karki', 'NPR', 9260);

console.log(account1);
// console.log(account1.pin);
// console.log(account1.pin);

account1.deposits(475);
account1.withdraw(300);
console.log(account1);
account1.rqstLoan(200);
console.log(account1);
console.log(account1.getMovements());

// console.log(account1.#movements);
// console.log(account1.#pin);
// console.log(account1.#approveLoan(50));

account1.deposits(450).deposits(230).rqstLoan(25000).withdraw(600);

console.log(account1.getMovements());
*/

/*-------------------------------#Coding Challange 4-----------------------------------
// CarCl class:

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    return `${this.make} is in the spped of ${this.speed} km/h, after accelerating!`;
  }

  brake() {
    this.speed -= 5;
    return ` ${this.make} is at the speed of ${this.speed} km/h, after applying brake!`;
  }

  get speedUS() {
    return `${this.speed / 1.6} mi/h`;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

// child class
class EVCl extends CarCl {
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery = function (chargeTo) {
    this.#charge = `${chargeTo}%`;
  };

  accelerate() {
    this.speed += 10;
    this.#charge--;
    console.log(
      `${this.make} is in the speed of ${this.speed} km/h, with a charge of ${
        this.#charge
      }%`
    );
  }
}

const rivian = new EVCl('Rivian', 120, 23);
console.log(rivian);
rivian.accelerate();
// console.log(rivian.#charge);
--------------------------------------------------------------------------------------*/
