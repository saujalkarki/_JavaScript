'use strict';
/*------------------------------------------------Note Before Starting-----------------------------------
The codes in this file may contain same variable names multiple times
so if you are going through this codes please uncomment any one seection first that is inside the multiple line comments
and comment it down again to view another section 
---------------------------------------------------------------------------------------------------------*/

// Data needed for first part of the section

const weekdays = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  [weekdays[5]]: {
    open: 11,
    close: 23,
  },
  [weekdays[weekdays.length - 1]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex,
    time = '20:45',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} 
will be delivered to ${address} at ${time}.`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1} ${ing2} ${ing3}.`);
  },
  orderPizza: function (mainIngredients, ...subIngredients) {
    console.log(mainIngredients);
    console.log(subIngredients);
  },
};

/*
console.log('a+very+nice+string'.split('+'));
console.log('SaujalKarki'.split('a'));
console.log('Saujal Karki'.split(' '));

const [firstName, lastName] = 'Saujal Karki'.split(' ');
console.log(firstName, lastName);

const newName = ['Mr.', firstName, lastName.toUpperCase()].join('_');
console.log(newName);

const capitalizeName = function (theName) {
  const splited = theName.split(' ');
  const nameUpper = [];
  for (const abc of splited) {
    // nameUpper.push(abc[0].toUpperCase() + abc.slice(1));
    nameUpper.push(abc.replace(abc[0], abc[0].toUpperCase()));
  }
  console.log(nameUpper.join(' '));
};

capitalizeName('jessica ann smith davis');
capitalizeName('bijay karki');
capitalizeName('mina karki');
capitalizeName('rama swami Benu gopala iyer');

const message = 'Go to gate 23!';
console.log(message.padStart(25, '+').padEnd(35, '+'));
console.log('Saujal'.padStart(10, '_').padEnd(15, '_'));

const askCreditCard = function (number) {
  const str = String(number);
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(askCreditCard(9815324015));
console.log(askCreditCard('982186132183674086921840982277'));
console.log(askCreditCard(43378463864647384));

const message2 = 'Bad Weather...All Departues Delayed....\n';
console.log(message2.repeat(5));

const planesInline = function (n) {
  return `There are ${n} planes in line ${'✈️'.repeat(n)}!`;
};

console.log(planesInline(5));
console.log(planesInline(2));
console.log(planesInline(15));
console.log(planesInline(0));

const fName = 'Saujal';
console.log(fName.split('').reverse().join(''));
//here the split method splitted the string to an array the reverse reversed the string and the join method joined them agian
*/

/*
const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[2]);
console.log(plane[3]);
console.log('Buddha Air'[4]);
console.log(airline.length);
console.log('airline'.length);

console.log(airline.indexOf('P'));
console.log(airline.lastIndexOf('P'));
console.log(airline.indexOf('Portugal'));

console.log(airline.slice(4));
console.log(airline.slice(4, 9));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(0, -5));

const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log('You got the middle seat😒');
  } else {
    console.log('You got lucky😊');
  }
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// const passenger = 'jOnAs'; //Jonas
// const passengerLower = passenger.toLowerCase();
// console.log(passengerLower);

// const passengerReal = passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerReal);

const passenger1 = passengerName => {
  passengerName = passengerName.toLowerCase();
  const passengerNameReal =
    passengerName[0].toUpperCase() + passengerName.slice(1);
  console.log(passengerNameReal);
};

passenger1('NisCHAl');
passenger1('nirmal');
passenger1('SAUJAL');
passenger1('yuDeEN');

const email = 'hello@smth.io';
const loginEmail = 'Hello@smth.Io \n';

const emailLower = loginEmail.toLowerCase().trim();

if (emailLower === email) {
  console.log('The entered email is correct.');
}

const priceGB = '288,97€';
const priceUS = priceGB.replace(',', '.').replace('€', '$');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement);

// console.log(announcement.replaceAll('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate'));

const plane1 = 'Buddha Air A320neo';
console.log(plane1.includes('A32'));
console.log(plane1.includes('Buddha Air'));
console.log(plane1.startsWith('a32'));
console.log(plane1.startsWith('A32'));

if (plane1.startsWith('Buddha Air') && plane1.endsWith('neo')) {
  console.log('Part of the Buddha Air family');
}

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are not Allowed on the board.');
  } else {
    console.log('welcome abroad!');
  }
};

checkBaggage('I have some laptop, some projects, some enjoying, Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection.');

// const smth = new Set(airline);
// console.log(smth);
*/

/* 
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct Answer💥'],
  [false, 'Try Again🚫'],
]);

console.log(question);

console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

for (const [key, value] of question) {
  if (typeof key === 'number') {
    console.log(`${key}:`, value);
  }
}

const answer = Number(
  prompt(
    `${question.get('question')}\n1.${question.get(1)}\n2.${question.get(
      2
    )}\n3.${question.get(3)}`
  )
);

console.log(question.get(question.get('correct') === answer));

console.log([...question]);
console.log([...question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);
*/

/*
// About the Maps data structures
const rest = new Map();
rest.set('kname', 'Majheri');
rest.set(1, 'Itahari, Dharan');
console.log(rest.set(2, 'Damak, jhapa'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 21)
  .set(true, 'We are open')
  .set(false, 'We are close');

console.log(rest.get('kname'));
console.log(rest.get(true));
console.log(rest.get(2));
console.log(rest.get('categories'));

const time = 15;
console.log(rest.get(time >= rest.get('open') && time <= rest.get('close')));

console.log(rest.has('categories'));
console.log(rest.delete(1));
console.log(rest);
console.log(rest.size);

// rest.clear();
// console.log(rest);
// console.log(rest.size);

const arr = [1, 2];
rest.set(arr, 'test');
console.log(rest);
console.log(rest.get(arr));

rest.set(document.querySelector('p'), 'heading');
console.log(rest);
*/

/*
// About the Sets data structures
const orderSets = new Set([
  'Saujal',
  'Nischal',
  'Nirmal',
  'Yudeen',
  'Saujal',
  'Nirmal',
  'Saujal',
  'Nirmal',
  'Nischal',
]);

console.log(orderSets);

const newSetthis = new Set('KathmanduisthecapitalcityofNepal.');
console.log(newSetthis);

//This property clears all the values of the sets
// orderSets.clear();
// console.log(orderSets);

console.log(orderSets.size);
console.log(newSetthis.size);
console.log(orderSets.has('Saujal'));
console.log(orderSets.has('saujal'));
orderSets.add('Yukesh');
orderSets.add('Yukesh');
console.log(orderSets);
orderSets.delete('Yudeen');
console.log(orderSets);

for (const smth of orderSets) {
  console.log(smth);
}

// example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
console.log(new Set(staff).size);
const setsNew = new Set(staff);
console.log(setsNew);

const setsNew1 = [...setsNew];
console.log(setsNew1);
console.log(setsNew1.length);
*/

/*
// The looping object using Object.(keys, values, entries)
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days.`;

for (const day of Object.keys(openingHours)) {
  console.log(day);
  openStr += ` ${day},`;
}
console.log(openStr);

const values = Object.values(openingHours);
console.log(values);

for (const value of values) {
  console.log('open:', value.open);
  console.log('close:', value.close);
  console.log('');
}

const obj = Object.entries(openingHours);
console.log(obj);

for (const [key, { open, close }] of obj) {
  console.log(`On ${key}, we open at ${open} and close at ${close}`);
}
*/

/*
if (restaurant.openingHours && restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
}

// optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

for (const day of days) {
  console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? 'doesnot exist');
console.log(restaurant.orderDaal?.(0, 1) ?? 'doesnot exist');

// Arrays
const users = [
  {
    name: 'Saujal',
    email: 'Saujalk@gmail.com  ',
  },
];

console.log(users[0]?.caste ?? 'User array Empty');
*/

/*
// looping array-the for of loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) {
  console.log(item);
  console.log('');
}
console.log('');
console.log('');
console.log('');

for (const item of menu.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`);
}

for (const item of menu.entries()) {
  console.log(item);
}

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
*/

/*
// The logical Assignment Operator---
const rest1 = {
  name: 'cape',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'Vape',
  owner: 'ish',
};

// the OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// rest1.owner = rest1.owner && 'anonymous';
// rest2.owner = rest2.owner && 'anonymous';

rest1.owner &&= 'anonymous';
rest2.owner &&= 'anonymous';

console.log(rest1);
console.log(rest2);
*/

/*
console.log('----------OR----------');
// use any data type, return any data type, short-circuiting
console.log(3 || 'Saujal');
console.log('' || 'Saujal');
console.log(false || true);
console.log(null || undefined);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guest2 = restaurant.numGuests || 10;
console.log(guest2);

console.log('----------AND----------');
console.log(23 && 'Saujal');
console.log(undefined && 'Saujal');

console.log('hello' && 23 && null && 'jons');

if (restaurant.orderPizza) {
  restaurant.orderPizza('cheese', 'mushrooms');
}

restaurant.orderPizza && restaurant.orderPizza('mushroom', 'cheese', 'mionees');

// Nullish Coalescing  Operator: Nullish value includes null and undefined only
restaurant.numGuests1 = 0;
const guest = restaurant.numGuests1 || 10;
console.log(guest);

const guestCorrect = restaurant.numGuests1 ?? 10;
console.log(guestCorrect);
*/

/*
// Destructuring
//This become the SPREAD ooperator because it is in the RHS of the  equal = operator
// const arr = [1, 2, ...[3, 4]];
const arr = [1, 2, 3, 4];

//This become the REST operator because it is in the LHS of the equal = operator
const [a, b, ...others] = [1, 2, 3, ...arr];

console.log(arr, a, b, others);

const [x, y, , ...menu] = [...restaurant.mainMenu, ...restaurant.starterMenu];

console.log(x, y, menu);

// objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// Functions
const add = function (...numbers) {
  console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 3);
add(5, 7, 6, 9);
add(6, 1, 3, 8, 4, 9, 6, 3, 7, 1, 5, 3, 5, 1, 5);

const l = [2, 5, 8, 9];
add(...l);

restaurant.orderPizza(
  'cheese',
  'mionees',
  'cSause',
  'tSause',
  'onion',
  'capsicum'
);
restaurant.orderPizza(
  'cheese',
  prompt('Enter the 1st ingredients you want in your pizza'),
  prompt('Enter the 2nd ingredients you want in your pizza'),
  prompt('Enter the 3rd ingredients you want in your pizza'),
  prompt('Enter the 4th ingredients you want in your pizza')
);
/*

/*
// The spread operator..
const arr = [7, 8, 9, [6, 9, 3]];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Khana', , ...arr];
console.log(newMenu);

// copy array

const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

const menu = [
  ...restaurant.starterMenu,
  ...restaurant.mainMenu,
  ...restaurant.categories,
];
console.log(menu);

// Iterables are objects, strings, maps, sets. NOT objects
const str = 'jonas';
const letters = [...str, '', 's.'];
console.log(letters);
console.log(...str);

// const ingedrients = [
//   prompt(`let's make pasta! Ingedrient 1?`),
//   prompt(`let's make pasta! Ingedrient 2?`),
//   prompt(`let's make pasta! Ingedrient 3?`),
// ];
// console.log(ingedrients);

// restaurant.orderPasta(...ingedrients);

// objects
const newRestaurant = {
  founder: 'Saujal',
  estd: 2075,
  ...restaurant,
  employees: ['Dines', 'Sushant', 'Manish'],
};

console.log(newRestaurant);
console.log(restaurant.mainMenu);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Kp sharma oli';
console.log(restaurantCopy.name);
console.log(restaurant.name);
*/

/*
// restaurant.orderDelivery(1, 0, '20:30', 'itahari');

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Itahari',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// Destructuring the objects
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, hours, tags);

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);

console.log(a, b);

// nested objects
const {
  fri: { open: o, close: c },
} = openingHours;

console.log(o, c);
*/

/*------------------------------------------------------------------------
// Destructuring the arrays
const arr = [2, 3, 4, 5, 6];
const a = arr[0];
const b = arr[1];
const c = arr[2];

console.log(a, b, c);

const [x, y, z, , v] = arr;
const j = [x, y, z, , v];

console.log(x, y, z, v);
console.log(j);

let [main, , secondary] = restaurant.categories;

console.log(main, secondary);

// switching the elements of array by destructuring the array
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested destructuring
const nested = [2, 4, [5, 6]];

const [q, , [w, e]] = nested;
console.log(q, w, e);

// Default calues
const [p = 1, i = 1, r = 1] = [8];
console.log(p, i, r);
*/

/*--------------------------------------------Coding Challange 1-----------------------------------------
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1
const [players1, players2] = game.players;
console.log(players1);
console.log(players2);

// 2
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// 3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

// 5
const {
  odds: { team1, x: draw, team2 },
} = game;
// const team1 = game.odds.team1;
// const draw = game.odds.x;
// const team2 = game.odds.team2;

console.log(team1);
console.log(draw);
console.log(team2);

// 6
const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`);
};

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals('Davies', 'Muller');
printGoals(...game.scored);

// 7
team1 < team2 && console.log(`Team 1 is more likely to win.`);
team1 > team2 && console.log(`Team 2 is more likely to win.`);
--------------------------------------------------------------------------------------------------------*/

/*----------------------------------------------Coding Challange 2----------------------------------------
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  something: [15, 25, 29, 65, 48, 76],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1
for (const [numGoals, players] of game.scored.entries()) {
  console.log(`Goal ${numGoals + 1}: ${players}`);
}

// 2
const dariya = Object.values(game.odds);
let total = 0;
for (const vals of dariya) {
  total += vals;
}
const avg = total / dariya.length;
console.log(avg);

// 3
for (const [victoryTeamName, oddScore] of Object.entries(game.odds)) {
  const teamStr =
    victoryTeamName === 'x' ? 'draw' : `victory ${game[victoryTeamName]}`;
  console.log(`Odd of ${teamStr}: ${oddScore} `);
}

// 4
const scorers = {};

for (const playersName of game.scored) {
  scorers[playersName] ? scorers[playersName]++ : (scorers[playersName] = 1);
}

console.log(scorers);
---------------------------------------------------------------------------------------------------------*/

/*--------------------------------------------Coding Challange 3-------------------------------------------
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔀 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔀 Substitution'],
  [64, '🟨 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔀 Substitution'],
  [72, '🔀 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🟨 Yellow card'],
]);

console.log(gameEvents);

// 1
console.log(gameEvents.values());
const events = new Set(gameEvents.values());
console.log(events);

// 2
// gameEvents.delete(64);
console.log(gameEvents);

// 3
for (const [time, eventH] of [...gameEvents]) {
  console.log(`A ${eventH} happened, on average, ${time} minutes!`);
}

const finalTime = [...gameEvents.keys()].pop();
console.log(
  `An event happened, on average, every ${finalTime / gameEvents.size} minutes`
);

// 4
for (const [gtime, gevent] of gameEvents) {
  console.log(`[${gtime <= 45 ? 'FIRST' : 'SECOND'} HALF] ${gtime}: ${gevent}`);
}
----------------------------------------------------------------------------------------------------------*/

/*--------------------------------------------Coding Challange 4-------------------------------------------
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const toChange = document.querySelector('textarea').value;
  const rows = toChange.split('\n');
  console.log(rows);
  for (const elms of rows) {
    const camelCase = (
      elms.slice(0, elms.indexOf('_')).toLowerCase() +
      elms[elms.indexOf('_') + 1].toUpperCase() +
      elms.slice(elms.indexOf('_') + 2).toLowerCase()
    ).trim();
    console.log(
      `${camelCase.padEnd(20, ' ')} ${'✅'.repeat(rows.indexOf(elms) + 1)}`
    );
  }
});
----------------------------------------------------------------------------------------------------------*/

/*--------------------------------------------Coding Challange 5-------------------------------------------
const flights = `_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30`;
const specificFlights = flights.split('+');

for (const flightDetails of specificFlights) {
  const specificFlightDetails = flightDetails.split(';');

  const detail1 = `${
    specificFlightDetails[0].startsWith('_Delayed') ? '🔴' : ''
  }${specificFlightDetails[0].replaceAll('_', ' ')}`.padStart(20, ' ');
  const detail2 = specificFlightDetails[1].replace(/[0-9]/g, '').toUpperCase();
  const detail3 = specificFlightDetails[2].replace(/[0-9]/g, '').toUpperCase();
  const detail4 = specificFlightDetails[3].replace(':', 'h');

  console.log(`${detail1} from ${detail2} to ${detail3} (${detail4})`);

  console.log(`\n`);
}
----------------------------------------------------------------------------------------------------------*/
