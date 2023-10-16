/*------------------------------------------------Note Before Starting-----------------------------------
The codes in this file may contain same variable names multiple times
so if you are going through this codes please uncomment any one seection first that is inside the multiple line comments
and comment it down again to view another section 
---------------------------------------------------------------------------------------------------------*/

/*
let js = "amazing";
if (js === "amazing") alert("JavaScript is Fun.");

console.log(40 + 8 + 23 - 10);
console.log("Saujal");
console.log(253);

let FirstName = "Nischal";
const First_Name = "Nirmal";
alert(FirstName);
console.log(FirstName);
alert(First_Name);
console.log(First_Name);
let PI = 3.14;
let r = 2;
let area;
alert((area = PI * r * r));

let myFirstJob = "Developer";
let myCurrentJob = "Influencer";

console.log(myFirstJob);

*/
/*---------------------------------------Values and Variables assignments-----------------------------------------
const country = "Nepal";
var continent = "Asia";
let population =
  "Twenty Six Million Four Hundred Ninety Four Thousand Five Hundred And Four.";

console.log(country);
console.log(continent);
console.log(population);
----------------------------------------------------------------------------------------------------------------*/

/*
let num = 456;
let str = "Saujal";
let bole = true;
let undef = undefined;
let nulle = null;
let BigInt = 4515184988498471561651651184;

console.log(typeof num);
console.log(typeof str);
console.log(typeof bole);
console.log(typeof undef);
console.log(typeof nulle);
console.log(typeof BigInt);
*/

/*
let Name = "Saujal";

console.log(typeof Name);

Name = 452;

console.log(typeof Name);

let caste;
console.log(caste);

console.log(typeof caste);
*/

/*------------------------------------------Data Types assignments----------------------------
let language;
console.log(typeof isIsland);

isIsland = true;

console.log(typeof isIsland);
console.log(typeof language);
----------------------------------------------------------------------------------------------*/

/*--------------------------------let, const and var assignments---------------------------------
 let language = "Nepali";
 console.log(language);
console.log(typeof language);

 The values that are fixed and need not to change during the whole program should be setted as const.
 whereas, Those value which may change later while writing the program, should be setted as let.
let and var are almost the same, but we prefer let over var.
 But, we should have proper knowledge about var also as previously the code were wirtten using var,
 so if in any point of life we may be asked to edit any js code, 
 there we will find using the decleration of the datatype using var.
 ------------------------------------------------------------------------------------------------*/

/*
 Operators in js----------
let ageSaujal = 40 / 2;
let ageSauja = 40 - 21;
let ageSauj = 40 - 22;
let ageSau = 40 - 23;
let ageSa = 40 - 24;
let ageS = 40 - 25;
let age = 40 - 26;
let ag = 40 - 27;
let a = 40 - 28;
let b = 3;
console.log(ageSaujal, ageSauja, ageSauj, ageSau, ageSa, ageS, age, ag, a);
console.log(ageSaujal / 2);
console.log(b ** 3);

const Name = "Saujal";
const middleName = "Bahadur";
const Caste = "Karki";
console.log(Name + " " + middleName + Caste);

let x = 25;

console.log(x);
console.log((x += 5));

console.log(x);
*/

// x**y this means x to the power y.

/*
let age1 = 25;
let age2 = 36;

let age3 = age1 < age2;
console.log(age3);
console.log(age1 > age2);

console.log(typeof age3);

let Name = "Saujal";
let caste = "Karki";

console.log(Name !== caste);

let a = 56;
let b = 36;

let c = a <= b;

console.log(c);
*/

/*--------------------------------Basic Operators Assignments------------------------------------
let populationNepal = 26494504;
// If the country is divided into two halves:
let _1stHalf = populationNepal / 2;
let _2ndHalf = populationNepal - _1stHalf;

console.log(populationNepal);
console.log(_1stHalf);
console.log(_2ndHalf);

let finalPopulationNepal = ++populationNepal;

console.log(finalPopulationNepal);

let populationFinland = 6000000;

let more_population;
more_population = populationNepal > populationFinland;

console.log(more_population);

let population_avrg_country = 33000000;

let lessPopulation;
lessPopulation = populationNepal < population_avrg_country;

console.log(lessPopulation);

let description;
description =
  "'Portugal is in Europe, and its 11 million people speaks portuguese'";
console.log(description);
alert(description);
------------------------------------------------------------------------------------------------*/

/*--------------------------------------------Coding Challange 1---------------------------------
let markWeight, markHeight, johnWeight, johnHeight;
let BMIofMark, BMIofJohn;
let markHigherBMI;

// For Test Data-1---------
markWeight = 78;
markHeight = 1.69;

johnWeight = 92;
johnHeight = 1.95;

BMIofMark = markWeight / markHeight ** 2;
BMIofJohn = johnWeight / johnHeight ** 2;

console.log(BMIofMark, BMIofJohn);

markHigherBMI = BMIofMark > BMIofJohn;
console.log(markHigherBMI);

// For Test Data-2--------
markWeight = 95;
markHeight = 1.88;

johnWeight = 85;
johnHeight = 1.76;

BMIofMark = markWeight / (markHeight * markHeight);
BMIofJohn = johnWeight / (johnHeight * johnHeight);

console.log(BMIofMark, BMIofJohn);

markHigherBMI = BMIofMark > BMIofJohn;
console.log(markHigherBMI);
-----------------------------------------------------------------------------------------------*/

/*
// Backtick is used for strings basically---------
// Tempelate literals stores the line break too...-----------
const name = "Saujal";
const caste = "karki";
const birth_year = 2004;
const year = 2023;
const dream = `entrepreneur`;

const total =
  "I'am " + name + " " + caste + "of age " + (year - birth_year) + ".";
console.log(total);

const Total_total = `I'm ${name} ${caste}. I am ${
  year - birth_year
} years old. My dream job is to be an ${dream}.`;
console.log(Total_total);

let smth;

smth = `Hello my name is Saujal Karki.
My father name is Bijay Karki.
My mother name is Mina Karki.
My brother name is Nischal Karki.`;
console.log(smth);

let smthh;
smthh = "My name is Saujal Karki \rI live in itahari.";
console.log(smthh);
*/

/*-------------------------Strings and Tempelate literals assisgnments--------------------------
let description;
description = `Portugal is in Europe, and it's 11 million people speaks portuguese.`;
console.log(description);
----------------------------------------------------------------------------------------------*/

/*--------------------------------if else statements assisgnments-------------------------------
let NepalPopulation;
NepalPopulation = 26494504;
let averagePopulation;
averagePopulation = 33000000;

if (NepalPopulation > averagePopulation) {
  console.log(`Potugal's population is above average.`);
} else {
  console.log(`Portugal's population is 22 million below average`);
}
----------------------------------------------------------------------------------------------*/

/*-------------------------------------Coding Challange 2--------------------------------------
let markWeight, markHeight, johnWeight, johnHeight;
let BMIofMark, BMIofJohn;
let markHigherBMI;

// For Test Data-1---------
markWeight = 78;
markHeight = 1.69;

johnWeight = 92;
johnHeight = 1.95;

BMIofMark = markWeight / markHeight ** 2;
BMIofJohn = johnWeight / (johnHeight * johnHeight);

console.log(BMIofMark, BMIofJohn);

markHigherBMI = BMIofMark > BMIofJohn;
console.log(markHigherBMI);

// ------------------------------
let announcement = `Mark's BMI (${BMIofMark}) is higher than John's BMI(${BMIofJohn})`;
console.log(announcement);
if (BMIofMark > BMIofJohn) {
  console.log(`Mark's BMI is higher than John's!`);
} else if (BMIofMark == BMIofJohn) {
  console.log(`Their BMI's are equal!`);
} else {
  let final = `John's BMI is higher than Mark's!`;
  console.log(final);
}
----------------------------------------------------------------------------------------------*/

/* -----Type Conversion
const year1 = "2004";
const year2 = Number(year1);
const last_year = year1 + 14;

console.log(year2, year1);
console.log(typeof year2, typeof year1);
console.log(last_year);

let nyear1 = "2005";
nyear1 = Number(nyear1);

console.log(nyear1);
console.log(typeof nyear1);


const late = 453;
const late1 = String(late);

console.log(late, late1);
console.log(typeof late, typeof late1);

let y = "5";
let w = Number(y);
let x = w++;
console.log(x);
*/

/* -----Type coercion
// console.log("I am " + 20 + " years old.");

const smth = "I am " + 20 + " years old.";

console.log(smth);
console.log(typeof smth);

console.log("2" + 2 + "3");
console.log("2" - "2" - "3");
console.log("2" * "2" * "3");
console.log("8" / "2" / "2");

let a = "3" + "8" - 2 + "3" * ("9" / 3);
console.log(a);
console.log(typeof a);

let sm = 2 + 3 + 2 + 1 + "9";
let st = Number(sm);

console.log(sm);
console.log(typeof sm);

console.log(st);
console.log(typeof st);
*/

/*-------Truthy and Falsy value
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(""));
console.log(Boolean(0));
console.log(Boolean(NaN));

console.log(Boolean(263260));
console.log(Boolean("something"));
console.log(Boolean("nischal"));
console.log(Boolean(20));
console.log(Boolean("Saujal" + 2));

let salary = 0;

if (salary) {
  console.log("invest it.");
} else {
  console.log("Go find a job.");
}

let Name = "Saujal";

if (Name) {
  console.log("You have a unique name.");
} else {
  console.log("Do namakaran");
}

let weight;
// weight = 52;
if (weight) {
  console.log("It is good to measure weight oftem.");
} else {
  console.log("Weigh yourself.");
}
*/

/*-----If else if else
let age;
age = Number(prompt("What is your age?"));

console.log(age);
console.log(typeof age);

if (age === 0 || age < 0) {
  console.log("You are not born yet.");
} else if (age === 18 || age < 18) {
  console.log("You are born and in growing phase.");
} else if (age === 50 || age < 50) {
  console.log("You are a grown up human.");
} else if (age === 95 || age < 95) {
  console.log("This is the time for your retirement.");
} else {
  console.log("Print enter a valid number");
}

if (age !== 20) {
  console.log("The age is not 20");
}
*/

/*--------------------------Type Conversion and Coercion Assignments--------------------------
console.log("9" - "5"); //4
console.log("19" - "13" + "17"); //617
console.log("19" - "13" + 17); //23
console.log("123" < 57); //False
console.log(5 + 6 + "4" + 9 - 4 - 2); //1143
--------------------------------------------------------------------------------------------*/

/*---------------------------------Equality Operator Assignments-----------------------------
let numNeighbours = Number(
  prompt("How many neighbour countries does your country have?")
);
if (numNeighbours === 1) {
  console.log("Only 1 border!");
} else if (numNeighbours > 1) {
  console.log("More than 1 border!");
} else {
  console.log("no border!");
}
// === indicates equal to with same data type.
// !== indicates not equal but of same data type.
--------------------------------------------------------------------------------------------*/

/*----------------------------------Logical Operators Assignments----------------------------
let speaksEnglish = false;
let lessPopulation = true;
let notIsland = true;

if (speaksEnglish && lessPopulation && notIsland) {
  console.log("You should live in Nepal.");
} else {
  console.log("Nepal doesn't meet your criteria.");
}
--------------------------------------------------------------------------------------------*/

/*---------------------------------------Coding Challange 3----------------------------------
let averageDolphins;
let averageKoalas;

// Test Data-1
averageDolphins = (96 + 108 + 89) / 3;
averageKoalas = (88 + 91 + 110) / 3;

console.log(averageDolphins, averageKoalas);

if (averageDolphins > averageKoalas) {
  console.log("Dolphins are the winners.");
} else if (averageDolphins === averageKoalas) {
  console.log("The match has been ended by a draw.");
} else {
  console.log("Koalas are the winners.");
}
// Test Data-2-3
let da, db, dc;
let ka, kb, kc;

da = Number(prompt("Enter the value of ka"));
db = Number(prompt("Enter the value of kb"));
dc = Number(prompt("Enter the value of kc"));
ka = Number(prompt("Enter the value of da"));
kb = Number(prompt("Enter the value of db"));
kc = Number(prompt("Enter the value of dc"));

averageDolphins = (da + db + dc) / 3;
averageKoalas = (ka + kb + kc) / 3;
console.log(averageDolphins, averageKoalas);

if (averageDolphins > 100) {
  if (averageDolphins > averageKoalas) {
    console.log("Dolphins are the winners.");
  } else if (averageDolphins === averageKoalas) {
    console.log("The match has been ended by a draw.");
  } else {
    console.log("Koalas are the winners.");
  }
} else if (averageKoalas > 100) {
  console.log("Koalas are the winners");
} else {
  console.log("NoOneWOn- both score below the minimum!");
}
--------------------------------------------------------------------------------------------*/

/*
//------Switch Case Statement
const day = prompt("Enter the day you want the routine of:");

switch (day) {
  case "sunday":
  case "Sunday":
    console.log("The First day of the week.");
    console.log("New Beginning.");
    break;
  case "monday":
  case "Monday":
    console.log("The Second day of the week.");
    console.log("Positive Vibe.");
    break;
  case "tuesday":
  case "Tuesday":
    console.log("The Third day of the week.");
    console.log("Exploration Day.");
    break;
  case "wednesday":
  case "Wednesday":
    console.log("The Fourth day of the week.");
    console.log("Work Hard.");
    break;
  case "Thrusday":
  case "Thrusday":
    console.log("The Fifth day of the week.");
    console.log("Submission Day.");
    break;
  case "friday":
  case "Friday":
    console.log("The Sixth day of the week.");
    console.log("Happy Ending...");
    break;
  case "saturday":
  case "Saturday":
    console.log("The Seventh day of the week.");
    console.log("Chill'in day.......");
    break;
  default:
    console.log("This is the extra day of the leap year. i.e. the 366th day.");
    console.log(
      "This is the day, when  birthday of many people is celebrated."
    );
}


// Same code with if elseif else logic-------
if (day === "sunday" || day === "Sunday") {
  console.log("The First day of the week.");
  console.log("New Beginning.");
} else if (day === "monday" || day === "Monday") {
  console.log("The Second day of the week.");
  console.log("Positive Vibe.");
} else if (day === "tuesday" || day === "Tuesday") {
  console.log("The Third day of the week.");
  console.log("Exploration Day.");
} else {
  console.log("This is the extra day of the leap year. i.e. the 366th day.");
  console.log("This is the day, when  birthday of many people is celebrated.");
}


const name = prompt("Hey! What's your name?");

switch (name) {
  case "Saujal":
    console.log("The name is Saujal.");
    break;
  case "Nischal":
    console.log("The name is Nischal.");
    break;
  case "Nirmal":
    console.log("The name is Nirmal");
    break;
  default:
    console.log("You need to do namakaran.");
}
*/

/*----------------------------------Switch Statement Assignments----------------------------
const language = prompt(
  "What is the language, you want to know about?(IN LOWERCASE)"
);

switch (language) {
  case "nepali":
    console.log("The most unique language.");
    break;
  case "chinese":
  case "mandarin":
    console.log("MOST number of native speakers.");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers.");
    break;
  case "english":
    console.log("3rd place.");
    break;
  case "hindi":
    console.log("Number 4.");
    break;
  case "arabic":
    console.log("5th most spoken language.");
    break;
  default:
    console.log("Great language too:D");
}
--------------------------------------------------------------------------------------------*/

/*
// Ternary/conditional operator--
let age = prompt("Enter your age..");

console.log(
  age >= 18
    ? "You are eligible for driving."
    : "You are not elogible for driving"
);

let populationNepal = Number(prompt("Enter the present population of Nepal."));
console.log(
  `Nepal's population is ${
    populationNepal > 33000000 ? "above" : "below"
  } average.`
);
*/

/*------------------------------------Coding Challange 4-------------------------------------
let billValue = Number(prompt("Enter the amount of bill."));

let tip15, tip20;
tip15 = billValue * 0.15;
tip20 = billValue * 0.2;

let finalValue =
  billValue +
  (billValue < 50 ? billValue*0 : billValue >= 50 && billValue <= 300 ? tip15 : tip20);

console.log(
  `The bill was ${billValue}, the tip was ${
    billValue < 50 ? 0 : billValue >= 50 && billValue <= 300 ? tip15 : tip20
  } and the total value ${finalValue}.`
);


// Same one- with a bit of difference in logic
let billValue = Number(prompt("Enter the amount of bill."));

let tip =
  billValue < 50
    ? billValue*0
    : billValue >= 50 && billValue <= 300
    ? billValue * 0.15
    : billValue * 0.2;

let finalValue = billValue + tip;

console.log(
  `The bill was ${billValue}, the tip was ${tip} and the total value ${finalValue}.`
);
--------------------------------------------------------------------------------------------*/

/*-----------------------------Wrapping up JS Fundamental Part-1-----------------------------*/
