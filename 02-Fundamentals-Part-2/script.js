"use strict";
/*------------------------------------------------Note Before Starting-----------------------------------
The codes in this file may contain same variable names multiple times
so if you are going through this codes please uncomment any one seection first that is inside the multiple line comments
and comment it down again to view another section 
---------------------------------------------------------------------------------------------------------*/

/*
// --Use of strict mode
let hasDriversLicense = false;
const passTest = true;

if (passTest) {
  hasDriversLicense = true;
}

if (hasDriversLicense) {
  console.log("I am eligible for driving :D");
}

const nterface = "Saujal";
console.log(nterface);

let rivate = 256;
let smth = rivate + 4;

console.log(smth);
console.log(typeof smth);

//---escape sequence characters
let terfaces = "Nischal\nkarki";
console.log(terfaces);

let terfacesa = "Nischal\tkarki";
console.log(terfacesa);

let terfacesab = "Nischal\\karki";
console.log(terfacesab);

let terfacsab = 'Nischal "karki'; //  \""
console.log(terfacsab);

let trfacsab = "Nischal 'karki"; //  \''
console.log(trfacsab);

let trfacsa = "Nischal karki"; //\b backspace \f formfeed \r carriage return
console.log(trfacsa);
*/

/*
//---Functions 
function myName() {
  alert("My name is Saujal Karki.");
}

let i;
for (i = 0; i < 5; i++) {
  myName();
}

let log;
function logger() {
  log = "Hello how are you?";
  return log;
}

let call = logger();
console.log(call);

let age = Number("25");
console.log(age);
console.log(typeof age);
*/

/*----------------------------------------Functions Assignments-------------------------------------------
function describeCountry(country, population, capitalCity) {
  let string = `${country} has ${population} million people and it's capital city is ${capitalCity}`;
  return string;
}

const country = "Nepal";
const Nepal = describeCountry(country, 26, "Kathmandu");
const China = describeCountry("China", 789, "Beijing");
const India = describeCountry("India", 458, "New_Delhi");

console.log(Nepal);
console.log(China);
console.log(India);
---------------------------------------------------------------------------------------------------------*/

/*
// Function Declreation
// Here function can be called before declaring it. EG:
const presentAge = calcAge1(2060);
console.log(presentAge);

function calcAge1(birthYear) {
  return 2080 - birthYear;
  //   const age = 2037 - birthYear;
  //   return age;
}

// Function Expression
// Here function cannot be called before declaring it as it throuws errors

const calcAge2 = function (birthYear) {
  return 2080 - birthYear;
};

const presentAge1 = calcAge2(2061);
console.log(presentAge1);
*/

/*------------------------Functions declretion and function expression Assignments-----------------------
// Using Function Decleration
const worldPopulation = 7900;

const Nepal1 = percentageOfWorld1("Nepal", 260);
const China1 = percentageOfWorld1("China", 2451);
const India1 = percentageOfWorld1("India", 1866);

console.log(Nepal1);
console.log(China1);
console.log(India1);

function percentageOfWorld1(country, population) {
  return `${country} holds the ${
    (population / worldPopulation) * 100
  }% of the world's population.`;
}

// Using Function Expression

let percentageOfWorld2 = function (country, population) {
  let string = `${country} holds the ${
    (population / worldPopulation) * 100
  }% of the world's population.`;
  return string;
};

const Nepal2 = percentageOfWorld2("Nepal", 260);
const China2 = percentageOfWorld2("China", 2451);
const India2 = percentageOfWorld2("India", 1866);

console.log(Nepal2);
console.log(China2);
console.log(India2);
---------------------------------------------------------------------------------------------------------*/

/*

// -----Arrow Function
// const calcAge3 = (birthYear) => {
//   2037 - birthYear;
//   ("How are you?");
// };
// const age = calcAge3(1991);
// console.log(age);

//program to calculate years for retirement 
const fatherName = prompt("Father Name");
const motherName = prompt("Mother Name");

const fatherDob = Number(prompt(`Enter ${fatherName}'s DOB.`));
const motherDob = Number(prompt(`Enter ${motherName}'s DOB.`));
const presentYear = Number(prompt(`Enter the present year you are living in.`));

// Using Function Decleration
function Age1(birthYear) {
  let age = presentYear - birthYear;
  return age;
}

const fAge = Age1(fatherDob);
const mAge = Age1(motherDob);
// console.log(fAge, mAge);

// Using Function Expression

// const Age2 = function (birthYear) {
//   return presentYear - birthYear;
// };

// console.log(`${fatherName} is ${Age2(fatherDob)} years old.`);
// console.log(`${motherName} is ${Age2(motherDob)} years old.`);

const retirementAge = Number(prompt("Enter the age you want them to retire."));
let yearsLeftForRetirement;

yearsLeftForRetirement = (age) => {
  let yearsLeft = retirementAge - age;
  return yearsLeft;
};

let fyearLeft = `Now, ${fatherName} has to work ${yearsLeftForRetirement(
  fAge
)} years more to get retired!`;
let myearLeft = `Now, ${motherName} has to work ${yearsLeftForRetirement(
  mAge
)} years more to get retired!`;

console.log(fyearLeft);
console.log(myearLeft);
*/

/*----------------------------------------Arrow Function Assignment------------------------------------
const worldPopulation = 7900;
const countryName = prompt("Enter the name of your country.");
const countryPopulation = Number(
  prompt("Enter the population of your country.")
);

// let percentageOfWorld3;

// percentageOfWorld3 = (population) => (population / worldPopulation) * 100;

// let result = `${countryName} holds the ${percentageOfWorld3(
//   countryPopulation
// )}% of the World's population with the population of ${countryPopulation} millions.`;

// console.log(result);

let percentageOfWorld3 = (name, population) => {
  let percentage = (population / worldPopulation) * 100;
  return `${name} holds the ${percentage}% of the world's population with the population of ${population} million.`;
};

console.log(percentageOfWorld3(countryName, countryPopulation));
------------------------------------------------------------------------------------------------------*/

/*
// --Function Calling Other Function
let cutFruitPieces = function (fruit) {
  return fruit * 4;
};

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
  return applePieces, orangePieces, juice;
}

// Here applePieces, orangePieces, these values are not being printed.....
console.log(fruitProcessor(2, 3));
*/

/*------------------------------Function Calling Other Function Assignment------------------------------
const worldPopulation = 7900;
const countryName1 = prompt("Enter the name of the country.");
const countryPopulation1 = prompt("Enter the population of the country.");
const countryName2 = prompt("Enter the name of the country.");
const countryPopulation2 = prompt("Enter the population of the country.");
const countryName3 = prompt("Enter the name of the country.");
const countryPopulation3 = prompt("Enter the population of the country.");

let percentageOfWorld1 = function (population1) {
  let percentage = (population1 / worldPopulation) * 100;
  return percentage;
};

let describePopulation;
describePopulation = (country, population2) => {
  let percenTage = percentageOfWorld1(population2);
  return `${country} has ${population2} million people, which is about ${percenTage}% of the world.`;
};

console.log(describePopulation(countryName1, countryPopulation1));
console.log(describePopulation(countryName2, countryPopulation2));
console.log(describePopulation(countryName3, countryPopulation3));
------------------------------------------------------------------------------------------------------*/

// THE FACT IS THAT RETURN STATEMENT IN FUNCTION IMMEDIATELY ENDS THE FUNCTION........................

/*-----------------------------------------Coding Challange 1------------------------------------------
const d1 = Number(prompt("Enter score of Dolphins in the 1st competition."));
const d2 = Number(prompt("Enter score of Dolphins in the 2nd competition."));
const d3 = Number(prompt("Enter score of Dolphins in the 3rd competition."));

const k1 = Number(prompt("Enter score of Koalas in the 1st competition."));
const k2 = Number(prompt("Enter score of Koalas in the 2nd competition."));
const k3 = Number(prompt("Enter score of Koalas in the 3rd competition."));

// Watch this lopping one for printing msg again and again
// for (let i = 0; i < 3, i++; ) {
//   d[i] = Number(prompt(`Enter score of Dolphins in the ${i}st competition.`));
// }
// for (i = 0; i < 3, i++; ) {
//   d[i] = Number(prompt(`Enter score of Koalas in the ${i}st competition.`));
// }

const totalDolphins = d1 + d2 + d3;
const totalKoalas = k1 + k2 + k3;

const calcAverage = (totalScoreOfTheTeam) => totalScoreOfTheTeam / 3;

let avgDolphins = calcAverage(totalDolphins);
let avgKoalas = calcAverage(totalKoalas);

let checkWinner;
checkWinner = function (averageOfDolphins, averageOfKoalas) {
  if (averageOfDolphins >= 2 * averageOfKoalas) {
    console.log(
      `Dophins has Won the match.(${averageOfDolphins} vs ${averageOfKoalas})`
    );
  } else if (averageOfKoalas >= 2 * averageOfDolphins) {
    console.log(
      `Koalas has Won the match.(${averageOfKoalas} vs ${averageOfDolphins})`
    );
  } else if (averageOfDolphins === averageOfKoalas) {
    console.log(
      `The match has been ended by a draw.(${averageOfDolphins} vs ${averageOfKoalas})`
    );
  } else {
    console.log(`No, Team Wins!(${averageOfDolphins} vs ${averageOfKoalas})`);
  }
};

checkWinner(avgDolphins, avgKoalas);
------------------------------------------------------------------------------------------------------*/

/*
// ----Introduction to Array
const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const years = new Array(1991, 2004, 2008, 2020);
console.log(years);

const bestFriend = friends[1];
const birthYear = years[2];
console.log(
  `My bestfriend name is ${bestFriend}, he was born on year ${birthYear}.`
);

friends[0] = "Ramaya";
friends[2] = "Ram";
console.log(friends);

friends[3] = "Shyam";
console.log(friends);

const numberOfFriends = friends.length;
console.log(numberOfFriends);
const join = friends.concat(years);
console.log(join);
const lastFriend = friends[friends.length - 1];
console.log(lastFriend);
const join2 = friends.join("----");
console.log(join2);

const Name = "Saujal";
const age = 19;
const friend = "Utsav";
const country = "Nepal";

const all = new Array(
  Name,
  "Karki",
  age,
  friend,
  "CCT",
  country,
  friends,
  years
);

console.log(all);
console.log(all.length);

// ----------------------------------------------------
const calcAge = (birthYear) => {
  return 2080 - birthYear;
};
const years = new Array(2060, 2063, 2058, 2055, 2065);

let toDisplay1 = calcAge(years[5 - 5]);
let toDisplay2 = calcAge(years[2]);
let toDisplay3 = calcAge(years[years.length - 1]);

console.log(toDisplay1, toDisplay2, toDisplay3);

const alla = [toDisplay1, toDisplay2, calcAge(years[years.length - 1])];
console.log(alla);
*/

/*--------------------------------------------Array Assignment----------------------------------------
const worldsPopulation = 7900;
const populationNepal = prompt(
  "Enter the population of Nepal in terms of millions."
);
const populationIndia = prompt(
  "Enter the population of India in terms of millions."
);
const populationChina = prompt(
  "Enter the population of China in terms of millions."
);
const populationBhutan = prompt(
  "Enter the population of Bhutan in terms of millions."
);

const populations = new Array(
  populationNepal,
  populationIndia,
  populationChina,
  populationBhutan
);

console.log(populations.length === 4);

populations.length === 4
  ? console.log("The array has 4 elements")
  : console.log(`The array has ${populations.length} elements.`);

function percentageOfWorld1(populationOfTheCountry) {
  return (populationOfTheCountry / worldsPopulation) * 100;
}

let percentNepal = percentageOfWorld1(populations[0]);
let percentIndia = percentageOfWorld1(populations[1]);
let percentChina = percentageOfWorld1(populations[2]);
let percentBhutan = percentageOfWorld1(populations[3]);

const percentages = [percentNepal, percentIndia, percentChina, percentBhutan];

console.log(percentages);
------------------------------------------------------------------------------------------------------*/
/*
// Array Methods
const friends = ["ram ", "sita", "gita"];
console.log(friends);
console.log(friends.length);

friends.push("hari");
console.log(friends);
console.log(friends.length);

let newFriend = friends.push("shyam");
console.log(friends);
console.log(newFriend);
console.log(friends.length);

friends.unshift("Angel");
console.log(friends);

const age = new Array(2060, 2061, 2058, 2055);
console.log(age);

const popped = age.pop();
console.log(age);
console.log(popped);

let shifted = age.shift();
console.log(age);
console.log(shifted);

const index = age.indexOf(2061);
const index1 = age.indexOf(2080);
const index2 = age.indexOf(2090);
console.log(index, index1, index2);

const smedia = ["fbk", "ytb", "ggl", "ntflx", "wtsap"];
console.log(smedia);

smedia.push("fsbk");
const include = smedia.includes("ggll");
const include1 = smedia.includes("fsbk");
console.log(include);
console.log(include1);

if (smedia.includes("ntflxc")) {
  console.log("Netflix is there in the race.");
} else if (smedia.includes("gglk")) {
  console.log("The google is in the race.");
} else {
  console.log("There is no reace happening right now.");
}

const arr = ["Saujal", "Nischal", "Nirmal", "Yudeen", "Yukesh"];
console.log(arr);

console.log(arr.reverse());

const arr1 = new Array(
  "Hello",
  "My",
  415,
  "Name",
  "Is",
  35,
  "Saujal",
  "Karki.",
  186
);
let str = arr1.toString();
console.log(str);

console.log(arr1);
console.log(arr1.sort());

const arr2 = [
  25, 65, 35, 34, 415, 1, 24, 186, 1684, 2468168151651651, 247, 31, 651, 35, 13,
];
console.log(arr2.sort());

const arr3 = new Array(
  "Pra",
  57,
  "san",
  98,
  "ang",
  45,
  "bid",
  55,
  "ila",
  787,
  "namu",
  65,
  "bpn",
  "bpn"
);

console.log(arr3);
const sorte = arr3.sort();
const sorte1 = arr3.toString();
console.log(sorte);
console.log(sorte1);

console.log(arr3);

console.log(arr3.slice(0, 2));
console.log(arr3.slice(4, 7));
console.log(arr3.length);
console.log(arr3[12]);
console.log(arr3.slice(0, arr3.length));
console.log(arr3.lastIndexOf("san"));

const string = "HEllo my namR is saujal karki aJd what is your name?";

console.log(string.lastIndexOf("saujal"));
*/

/*--------------------------------------Array Methods Assignments------------------------------------------
const neighbours = ["China", "Bhutan", "India", "Parkistan"];

console.log(neighbours);

neighbours.push("Euthopia");
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if (!neighbours.includes("Germany")) {
  console.log("Probably, not a Central European Country.:D");
} else {
  console.log("This is a European Country.");
}

const index = neighbours.lastIndexOf("India");
console.log(index);

neighbours[neighbours.lastIndexOf("India")] = "Hindustan";
console.log(neighbours);
----------------------------------------------------------------------------------------------------------*/

/*-------------------------------------------Coding Challange 2---------------------------------------------
const calcTip = (amountInBill) => {
  let tip;
  if (amountInBill >= 50 && amountInBill <= 300) {
    tip = (amountInBill * 15) / 100;
  } else if (amountInBill > 300) {
    tip = tip = (amountInBill * 20) / 100;
  } else {
    tip = 0;
  }
  return tip;
};

const bill = new Array(125, 555, 44, -20);

const tips = [
  calcTip(bill[0]),
  calcTip(bill[1]),
  calcTip(bill[2]),
  calcTip(bill[3]),
];
console.log(tips);

const total = new Array(
  bill[0] + tips[0],
  bill[1] + tips[1],
  bill[2] + tips[2],
  bill[3] + tips[3]
);
console.log(total);
----------------------------------------------------------------------------------------------------------*/

/*
//Objects in JS
const course = "Bachelor's of Information Technology";

const datas = {
  key="value";
  Name: "Saujal",
  Caste: "Karki",
  Age: 21,
  Campus: "Central Campus of Technology",
  Faculty: course,
  Graduation: 2079 + 4,
  Frineds: new Array("San", "Bids", "Pat", "Ila"),
};

console.log(datas);
console.log(datas);
*/

/*------------------------------------------Objects Assignments------------------------------------------
const countryName = prompt("Enter the name of your Country.");
const countryPopulation = Number(
  prompt("Enter the population of your Country.")
);
const neighboursName1 = prompt("Enter the name of 1st your neighbours");
const neighboursName2 = prompt("Enter the name of 2nd your neighbours");

const myCountry = {
  country: countryName,
  capital: "Kathmandu",
  language: "English" + "/" + "Nepali",
  population: countryPopulation,
  neighbours: new Array("China", neighboursName1, neighboursName2, "India"),
};

console.log(myCountry);
--------------------------------------------------------------------------------------------------------*/

/*Dot Vs Bracket Notation---
const myCountry = {
  countryName: "Nepal",
  countryCapital: "Kathmandu",
  countryLanguage: "English" + "/" + "Nepali",
  countryPopulation: 26494504,
  countryNeighbours: new Array("China", "Bhutan", "pakistan", "India"),
};

console.log(myCountry);
console.log(typeof myCountry);

const Try1 = myCountry.countryLanguage;
console.log(Try1);
console.log(typeof Try1);

const Try2 = myCountry.countryPopulation;
console.log(Try2);
console.log(typeof Try2);

const Try3 = myCountry.countryNeighbours;
console.log(Try3);
console.log(typeof Try3);

//------------------------------------
console.log(myCountry);
console.log(typeof myCountry);

const Try11 = myCountry["countryLanguage"];
console.log(Try11);
console.log(typeof Try11);

const Try21 = myCountry["countryPopulation"];
console.log(Try21);
console.log(typeof Try21);

const Name = "Name";
const Population = "Population";
const Neighbours = "Neighbours";

const Try31 = myCountry["country" + Name];
const Try32 = myCountry["country" + Population];
const Try33 = myCountry["country" + Neighbours];

console.log(Try31, Try32, Try33);

const wantToKnow = prompt("What do you want to know about the country");

const objectData = myCountry[wantToKnow];

console.log(objectData);

if (myCountry[wantToKnow]) {
  console.log(
    `${myCountry[wantToKnow]}, this data is fetched from the above object.`
  );
} else {
  console.log("The thing you want to know is not available here.");
}

console.log(myCountry);

console.log(myCountry.countryCapital);

const capital = myCountry["countryCapital"];
console.log(capital);

const religion = (myCountry["countrReligion"] = "Hindu");
console.log(myCountry);

const capital2 = (myCountry["countryCapital"] = "Itahari");
console.log(myCountry);

const Neighbours1 = `${myCountry.countryName} has ${
  myCountry["countryNeighbours"].length
} Neighbours,
but the closest among them are ${myCountry["countryNeighbours"][0]} and ${
  myCountry["countryNeighbours"][myCountry.countryNeighbours.length - 1]
}.`;

console.log(Neighbours1);
*/

/*-----------------------------------Dot vs Bracket Notation Assignments-----------------------------------
const myCountry = {
  country: "Nepal",
  capital: "Kathmandu",
  language: "Nepali",
  population: 26,
  neighbours: ["China", "India", "Bhutan", "Pakistan", "Afganistan"],
};

console.log(myCountry);
let strike = `${myCountry.country} has ${myCountry["population"]} million ${myCountry.language} speaking people,
${myCountry["neighbours"].length} neighbouring countires and a capital called ${myCountry.capital}.`;

console.log(strike);

let increase = (myCountry.population += 2);
console.log(myCountry);
console.log(increase);

strike = `${myCountry.country} has ${myCountry["population"]} million ${myCountry.language} speaking people,
${myCountry["neighbours"].length} neighbouring countires and a capital called ${myCountry.capital}.`;

console.log(strike);

let deccrease = (myCountry.population -= 2);
console.log(myCountry);
console.log(deccrease);

strike = `${myCountry.country} has ${myCountry["population"]} million ${myCountry.language} speaking people,
${myCountry["neighbours"].length} neighbouring countires and a capital called ${myCountry.capital}.`;

console.log(strike);
----------------------------------------------------------------------------------------------------------*/
/*
// Object Methods------
const newe = {
  Name: "Saujal",
  caste: "Karki",
  place: "Itahari",
  age: 20,
  yearsOfHardWork: 5,
  good: false,
  friends: new Array("Rochak", "Aayush", "Suman", "Manoj", "Diwas"),
  successAge: function () {
    this.success = this.age + this.yearsOfHardWork;
    return this.success;
  },
  getSummary: function () {
    this.summarized = `Hi is ${this.Name} ${this.caste} of ${this.age},
    currently living in ${this.place}.
    He is a ${!this.good ? "good" : "Bad"} man with ${
      this.friends.length
    } friends.
    He has become successful when he was ${this.successAge()} years of old.`;
    return this.summarized;
  },
  summarized1: "",
  getSummary1: function () {
    newe.summarized1 = `This is ${this.Name} ${this.caste} of ${this.age},
    currently, He is living in ${this.place}.
    The man is ${!this.good ? "good" : "Bad"}, with ${
      this.friends.length
    } friends.
    He has become successful when he was ${this.successAge()} years of old.`;
    return newe.summarized1;
  },
};

console.log(newe.successAge());
console.log(newe);

console.log(newe.getSummary());
console.log(newe.summarized);

const ab = {};

ab.name = "Nischal";
ab.caste = "Karki";
ab.age = 17;

console.log(ab);

console.log(newe);
console.log(newe.summarized1);
console.log(newe["summarized1"]);

console.log(newe.getSummary1());
console.log(newe.summarized1);
console.log(newe["summarized1"]);
*/

/*-----------------------------------------Object Methods Assignments--------------------------------------
const myCountry = {
  country: "Nepal",
  capital: "Kathmandu",
  language: "Nepali",
  population: 26,
  neighbours: ["China", "India", "Bhutan", "Pakistan"],
  describe: function () {
    myCountry.summr = `${this.country} has ${this.population} million ${this.language} speaking people,
    ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`;
    console.log(myCountry.summr);
    return myCountry.summr;
  },
  checkIsland: function () {
    this.isIsland = this.neighbours.length <= 0 ? true : false;
    return this.isIsland;
  },
};

console.log(myCountry);
myCountry.checkIsland();
myCountry.describe();
console.log(myCountry.describe()); //Need to understand this line with code no. 822-827
console.log(myCountry.checkIsland());
console.log(myCountry);
----------------------------------------------------------------------------------------------------------*/

/*---------------------------------------------Coding Challange 3------------------------------------------
// Method-1-------------
const obj1 = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.itsBMI = this.mass / this.height ** 2;
    return this.itsBMI;
  },
};
obj1.calcBMI();

const obj2 = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    obj2.itsBMI = this.mass / this.height ** 2;
    return obj2.itsBMI;
  },
};
obj2.calcBMI();

console.log(obj1, obj2);

if (obj1.itsBMI > obj2.itsBMI) {
  console.log(
    `${obj1.fullName}'s BMI(${obj1.itsBMI}) is higher than ${obj2.fullName}'s BMI(${obj2.itsBMI}).`
  );
} else if (obj2.itsBMI > obj1.itsBMI) {
  console.log(
    `${obj2.fullName}'s BMI(${obj2.itsBMI}) is higher than ${obj1.fullName}'s BMI(${obj1.itsBMI}).`
  );
} else {
  console.log(
    `Both, ${obj1.fullName}'s BMI(${obj1.itsBMI}) and ${obj2.fullName}'s BMI(${obj2.itsBMI}) are equal.`
  );
}

// Method-2--------
const obj3 = {
  fullName: "Mark Miller",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    return this.mass / this.height ** 2;
  },
};
obj3.calcBMI();
const obj4 = {
  fullName: "John Smith",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    return this.mass / this.height ** 2;
  },
};
obj4.calcBMI();

console.log(obj3, obj4);

if (obj3.calcBMI() > obj4.calcBMI()) {
  console.log(
    `${obj3.fullName}'s BMI(${obj3.calcBMI()}) is higher than ${
      obj4.fullName
    }'s BMI(${obj4.calcBMI()}).`
  );
} else if (obj4.calcBMI() > obj3.calcBMI()) {
  console.log(
    `${obj4.fullName}'s BMI(${obj4.calcBMI()}) is higher than ${
      obj3.fullName
    }'s BMI(${obj3.calcBMI()}).`
  );
} else {
  console.log(
    `Both, ${obj3.fullName}'s BMI(${obj3.calcBMI()}) and ${
      obj4.fullName
    }'s BMI(${obj4.calcBMI()}) are equal.`
  );
}
----------------------------------------------------------------------------------------------------------*/
/*
// The for loop------
for(initalizion e.g i=0, j=1, k=10; condition i<10, i>=5, i<100 ;increament/decreament e.g i++,++i,i--,--i){
 console.log("Write anything you want to console.");
};
*/

/*-------------------------------------Iteration: The for loop Assignments---------------------------------
for (let voterNumber = 1; voterNumber <= 50; voterNumber++) {
  alert(`Voter Number ${voterNumber} is currently voting.`);
}
----------------------------------------------------------------------------------------------------------*/

/*
// Looping Arrays, Breaking and continuing
const jonasArray = [
  "Jonas",
  "Khatri",
  2080 - 2060,
  "teacher",
  ["ram", "shyam", "Hari"],
  true,
];

const types = [];

for (let i = 0; i < jonasArray.length; i++) {
  console.log(jonasArray[i], typeof jonasArray[i]);

  // types[i] = typeof jonasArray[i];
  types.push(typeof jonasArray[i]);
}
console.log(types);

const years = [2055, 2060, 2063, 2058];

const ages = [];

for (let i = 0; i < years.length; i++) {
  // ages[i] = 2080 - years[i];
  ages.push(2080 - years[i]);
}

console.log(years);
console.log(ages);

// -----------------------
const arr1 = [
  "Saujal",
  "Karki",
  20,
  "Hindu",
  25,
  true,
  ["Nischal", "Nirmal", "Yuedeen", "Yukesh"],
];

console.log(arr1);

// continue
for (let i = 0; i < arr1.length; i++) {
  if (typeof arr1[i] !== "string") continue;
  console.log(arr1[i], typeof arr1[i]);
}
// break
for (let i = 0; i < arr1.length; i++) {
  if (typeof arr1[i] === "number") break;
  console.log(arr1[i], typeof arr1[i]);
}
*/

/*--------------------------Looping Arrays, Breaking and Continuing Assignments -----------------------
const worldPopulation = 7900;
const population = ["264", "1432", "1869", "725"];
const percentages2 = [];
const percentages3 = [];

const percentageOfWorld1 = (countryPopulation) => {
  return (countryPopulation / worldPopulation) * 100;
};

// i method
for (let i = 0; i < population.length; i++) {
  percentages2[i] = percentageOfWorld1(population[i]);
}

console.log(percentages2);

// Push method
for (let i = 0; i < population.length; i++) {
  percentages3.push(percentageOfWorld1(population[i]));
}

console.log(percentages3);
---------------------------------------------------------------------------------------------------------*/

/*
// Looping backwards and loops in loops
const mySelf = [
  "Saujal ",
  "Karki",
  2080 - 2060,
  "programmer",
  ["Js", "Python", "C++", "Java"],
];

for (let i = mySelf.length - 1; i >= 0; i--) {
  console.log(mySelf[i], typeof mySelf[i]);
}
for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-------Starting exercise ${exercise}--------`);
  for (let repetition = 1; repetition <= 5; repetition++) {
    console.log(`-----Repetition no.${repetition}`);
  }
}
*/

/*---------------------------Looping Backward and Loops in Loops Assignments --------------------------
const ListOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (let i = 0; i < ListOfNeighbours.length; i++) {
  for (let j = 0; j < ListOfNeighbours[i].length; j++) {
    console.log(`Neighbour:${(ListOfNeighbours[i])[j]}`);
  }
}
------------------------------------------------------------------------------------------------------*/

/*
// The While Loop----

let rep = 1;
while (rep <= 5) {
  console.log(`Lifting Weights repetition ${rep}.`);
  rep++;
}

let numberRolled = Math.trunc(Math.random() * 6) + 1;

while (numberRolled !== 6) {
  console.log(`You rolled the number ${numberRolled} from the dice.`);
  numberRolled = Math.trunc(Math.random() * 6) + 1;
  if (numberRolled === 6) {
    console.log("Now, the dice won't be rolled...!");
  }
}
*/

/*---------------------------------------The While Loop Assignments -----------------------------------
const worldPopulation = 7900;
const population = ["264", "1432", "1869", "725"];
const percentages2 = [];
const percentages3 = [];
const percentages4 = [];

const percentageOfWorld1 = (countryPopulation) => {
  return (countryPopulation / worldPopulation) * 100;
};

// i method
for (let i = 0; i < population.length; i++) {
  percentages2[i] = percentageOfWorld1(population[i]);
}
console.log(percentages2);

// Push method
for (let i = 0; i < population.length; i++) {
  percentages3.push(percentageOfWorld1(population[i]));
}
console.log(percentages3);

// the while loop method
let i = 0;
while (i < population.length) {
  percentages4[i] = percentageOfWorld1(population[i]);
  i++;
}
console.log(percentages4);
------------------------------------------------------------------------------------------------------*/

/*------------------------------------------Coding Challange 4----------------------------------------
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

function calcTip(billAmount) {
  if (billAmount >= 50 && billAmount <= 300) {
    return (billAmount * 15) / 100;
  } else if (billAmount > 300) {
    return (billAmount * 20) / 100;
  } else {
    return 0;
  }
}

for (let i = 0; i < bills.length; i++) {
  tips[i] = calcTip(bills[i]);
  totals.push(tips[i] + bills[i]);
}
console.log(bills);
console.log(tips);
console.log(totals);

// Bonus assignment---
const calcAverage = (array) => {
  let total = 0,
    arr1;
  for (let j = 0; j < array.length; j++) {
    arr1 = array[j];

    total += arr1;
  }
  let average = total / array.length;
  return average;
};

const averageBills = calcAverage(bills);
const averageTips = calcAverage(tips);
const averageTotals = calcAverage(totals);

console.log(averageBills);
console.log(averageTips);
console.log(averageTotals);
------------------------------------------------------------------------------------------------------*/
