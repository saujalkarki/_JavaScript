'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-13T14:11:59.604Z',
    '2023-08-23T17:01:17.194Z',
    '2023-08-26T23:36:17.929Z',
    '2023-08-27T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// Functions

const formatMovementDate = function (date, locale) {
  const calcDaysPassed = function (date1, date2) {
    return Math.round(Math.abs((date2 - date1) / (1000 * 60 * 60 * 24)));
  };
  const daysPassed = calcDaysPassed(new Date(), date);
  if (daysPassed === 0) {
    return 'Today';
  }
  if (daysPassed === 1) {
    return 'Yesterday';
  }
  if (daysPassed <= 7) {
    return `${daysPassed} days ago`;
  }
  // const year = date.getFullYear();
  // const month = `${date.getMonth() + 1}`.padStart(2, '0');
  // const datee = `${date.getDate()}`.padStart(2, '0');

  // return `${datee}/${month}/${year}`;
  return new Intl.DateTimeFormat(locale).format(date);
};

const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const newDate = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(newDate, acc.locale);

    const formattedMov = formatCur(mov, acc.locale, acc.currency);
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formattedMov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency);
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency);

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCur(out, acc.locale, acc.currency);

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, __, _) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency);
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

const startLogOutTimer = function () {
  const tick = function () {
    const min = Math.trunc(time / 60)
      .toString()
      .padStart(2, '0');
    const sec = (time % 60).toString().padStart(2, '0');

    labelTimer.textContent = `${min}:${sec}`;

    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = 'Log in to get started';
      containerApp.style.opacity = 0;
    }

    time--;
  };

  let time = 300;

  // calling the timer every second
  tick();
  const timer = setInterval(tick, 1000);
  return timer;
};

///////////////////////////////////////
// Event handlers
let currentAccount, timer;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // experimenting with the API
    const now = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
      // weekday: 'long',
    };
    // const locale = navigator.language;

    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Timer
    if (timer) {
      clearInterval(timer);
    }
    timer = startLogOutTimer();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const dateRN = new Date().toISOString();
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // updating the date
    currentAccount.movementsDates.push(dateRN);
    receiverAcc.movementsDates.push(dateRN);

    // Update UI
    updateUI(currentAccount);
  }

  // Timer
  clearInterval(timer);
  timer = startLogOutTimer();
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  // const amount = +inputLoanAmount.value.toFixed(0);
  const amount = Math.floor(inputLoanAmount.value);
  const dateRN = new Date().toISOString();

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    setTimeout(function () {
      // Add movement
      currentAccount.movements.push(amount);

      // updating the date
      currentAccount.movementsDates.push(dateRN);

      // Update UI
      updateUI(currentAccount);
    }, 3000);
  }
  inputLoanAmount.value = '';

  // Timer
  clearInterval(timer);
  timer = startLogOutTimer();
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;

  //Timer
  clearInterval(timer);
  timer = startLogOutTimer();
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
/*
console.log(23 === 23.0);

console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);

// converting to number
console.log(Number('23'));
console.log(+'23');

// converting to Integer
console.log(Number.parseInt('30px', 10));
console.log(Number.parseInt('px30', 10));
console.log(Number.parseInt('30.1'));

// converting to floating point number
console.log(Number.parseFloat('12'));
console.log(Number.parseFloat('2.5rem'));
console.log(Number.parseInt('2.5rem'));

// checking if NaN or not (Not a Number)
console.log(Number.isNaN(20));
console.log(Number.isNaN('20'));
console.log(Number.isNaN(+'20x'));
console.log(Number.isNaN(20 / 0));

// checking if finite or not
console.log(Number.isFinite(+'23x'));
console.log(Number.isFinite(+'23'));
console.log(Number.isFinite(23 / 0));

// checking if Integer or not
console.log(Number.isInteger('20'));
console.log(Number.isInteger(+'20.0'));
console.log(Number.isInteger(20));
console.log(Number.isInteger(20.0));
console.log(Number.isInteger(23.2));
console.log(Number.isInteger(23 / 0));

// calculating the root value
console.log(Math.sqrt(4));
console.log(Math.sqrt(25));
console.log(Math.sqrt(625));
console.log(Math.cbrt(64));
console.log(Math.cbrt(8));
console.log(625 ** (1 / 2));
console.log(8 ** (1 / 3));

// getting maxm and minm value
console.log(Math.max(2, 9, -5, 7, 12, -4, 8, 45));
console.log(Math.min(2, 9, -5, 7, 12, -4, 8, 45));

console.log(Math.max(2, 9, -5, '7', 12, '-4', 8, '45'));
console.log(Math.min(2, 9, '-5', '7', 12, -4, 8, '45'));

console.log(Math.min(2, 9, '-5', '7px', 12, -4, 8, '45'));
console.log(Math.min(2, 9, '-5', '7', 12, -4, '8px', '45'));

//constans on Math
console.log(Math.PI);
console.log(Math.PI * Number.parseFloat('10px') ** 2);

// creating random numbers in jss
console.log(Math.floor(Math.random() * 6) + 1);

const randomInt = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

console.log(randomInt(5, 10));

// rounding integers
console.log(Math.trunc(23.3));
console.log(Math.round(23.3));
console.log(Math.round(23.9));
console.log(Math.round(23.5));

console.log(Math.ceil(23.2));
console.log(Math.ceil(23.8));

console.log(Math.floor(23.4));
console.log(Math.floor(23.7));

console.log(Math.trunc(-23.4));
console.log(Math.round(-23.4));
console.log(Math.ceil(-23.4));
console.log(Math.floor(-23.4));

// rounding floating point numbers
console.log((2.4).toFixed(0));
console.log(+(2.4).toFixed(0));
console.log((4.7).toFixed(3));
console.log((4.78).toFixed(3));

// remainder operator
console.log(5 % 2);
console.log(8 % 2);
console.log(8 % 3);

const checkEvenOdd = function (num) {
  return `The given number is ${
    num % 2 === 0 ? 'even'.toUpperCase() : 'odd'.toUpperCase()
  } number.`;
};

// console.log(checkEvenOdd(+prompt('Enter the number you want to check.')));
console.log(checkEvenOdd(4));
console.log(checkEvenOdd(0));
console.log(checkEvenOdd(3));
console.log(checkEvenOdd(7));

labelBalance.addEventListener('click', function () {
  [...document.querySelectorAll('.movements__row')].forEach(function (
    value,
    key
  ) {
    if (key % 2 === 0) {
      value.style.backgroundColor = 'orangered';
    } //#ff585f

    if (key % 3 === 0) {
      value.style.backgroundColor = 'blue';
    } //#9be15d
  });
});

// numeric seperator
const diameter = 287_460_000_000;
console.log(diameter);

const priceInCents = 345_99;
console.log(priceInCents);

const transferFee1 = 15_00;
const transferFee2 = 1_500;

console.log(transferFee1);
console.log(transferFee2);

const PI = 3.1415;
console.log(PI);

console.log(Number('230000'));
console.log(parseInt('230_000'));

console.log(45_67);

// working with bigInt's
console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);
console.log('Max_safe_number');
console.log(2 ** 53);
console.log(2 ** 53 - 1);
console.log(2 ** 53 + 0);
console.log(2 ** 53 + 1);
console.log(2 ** 53 + 2);

console.log(3742934783571829127487238923748978n);
console.log(typeof 3742934783571829127487238923748978n);
console.log(BigInt(2387597293747957847398782748578734));
console.log(10000n + 10000n);
console.log(32875878238748971293890128958467362847589n * 10000000n);

console.log(Math.sqrt(16));
// console.log(Math.sqrt(16n));

const huge = 23749329874878475874578753983475983n;
const num = 23n;
console.log(huge * BigInt(num));

console.log(20n < 25);
console.log(20n == 20);
console.log(20n == '20');
console.log(20 == '20');
console.log(20n === 20);

console.log(typeof 20n);
console.log(huge + ' is one of the biggest Integer.');

console.log(10 / 3);
console.log(10n / 3n);

// creating dates in js
const now1 = new Date();

console.log(now1);

console.log(new Date('Aug 28 2023 12:28:36'));
console.log(new Date('January 10, 2020'));
console.log(new Date(account1.movementsDates[0]));
console.log(new Date(2037, 10, 19, 15, 23, 5));
console.log(new Date(2037, 10, 31));
console.log(new Date(2037, 11, 33));
console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000));

// working with dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime());

console.log(new Date(future.getTime(2142236280000)));
console.log(new Date(future.getTime()));

future.setMonth(12);
console.log(future);


const future = new Date(2037, 10, 19, 15, 23);
console.log(+future);

const calcDaysPassed = function (date1, date2) {
  return Math.abs((date2 - date1) / (1000 * 60 * 60 * 24));
};

const day1 = calcDaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 4));

console.log(day1);
*/

/*
const num = 3884764.23;

const options1 = {
  style: 'unit',
  unit: 'kilometer-per-hour',
};
const options2 = {
  style: 'unit',
  unit: 'celsius',
  useGrouping: false,
};
const options3 = {
  style: 'percent',
  unit: 'celsius',
  useGrouping: true,
};
const options4 = {
  style: 'currency',
  unit: 'kilometer-per-hour',
  currency: 'INR',
  useGrouping: false,
};

console.log(
  'USA         :',
  new Intl.NumberFormat('en-US', options1).format(num)
);
console.log(
  'South Africa:',
  new Intl.NumberFormat('af-ZA', options1).format(num)
);
console.log(
  'India       :',
  new Intl.NumberFormat('hi-IN', options1).format(num)
);
console.log(
  'Finland     :',
  new Intl.NumberFormat('sv-FI', options1).format(num)
);
console.log(
  'Ukraine     :',
  new Intl.NumberFormat('uk-UA', options1).format(num)
);

console.log(
  'USA         :',
  new Intl.NumberFormat('en-US', options2).format(num)
);
console.log(
  'South Africa:',
  new Intl.NumberFormat('af-ZA', options2).format(num)
);
console.log(
  'India       :',
  new Intl.NumberFormat('hi-IN', options2).format(num)
);
console.log(
  'Finland     :',
  new Intl.NumberFormat('sv-FI', options2).format(num)
);
console.log(
  'Ukraine     :',
  new Intl.NumberFormat('uk-UA', options2).format(num)
);

console.log(
  'USA         :',
  new Intl.NumberFormat('en-US', options3).format(num)
);
console.log(
  'South Africa:',
  new Intl.NumberFormat('af-ZA', options3).format(num)
);
console.log(
  'India       :',
  new Intl.NumberFormat('hi-IN', options3).format(num)
);
console.log(
  'Finland     :',
  new Intl.NumberFormat('sv-FI', options3).format(num)
);
console.log(
  'Ukraine     :',
  new Intl.NumberFormat('uk-UA', options3).format(num)
);

console.log(
  'USA         :',
  new Intl.NumberFormat('en-US', options4).format(num)
);
console.log(
  'South Africa:',
  new Intl.NumberFormat('af-ZA', options4).format(num)
);
console.log(
  'India       :',
  new Intl.NumberFormat('hi-IN', options4).format(num)
);
console.log(
  'Finland     :',
  new Intl.NumberFormat('sv-FI', options4).format(num)
);
console.log(
  'Ukraine     :',
  new Intl.NumberFormat('uk-UA', options4).format(num)
);

console.log(
  `${navigator.language}       :`,
  new Intl.NumberFormat(navigator.language).format(num)
);
*/

/*
// setTimeout
const ingredients = ['olives', 'spinach'];

const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2}.🍕`),
  3000,
  'mushroom',
  'cheese'
);
console.log('waiting');

if (ingredients.includes('spinach')) {
  clearTimeout(pizzaTimer);
}

// setInterval
setInterval(function () {
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();
  console.log(now);
  console.log(`Hour:${hour.toString().padStart(2, '0')}
Minute:${minute.toString().padStart(2, '0')}
Second:${second.toString().padStart(2, '0')}
  `);
}, 2000);
*/
