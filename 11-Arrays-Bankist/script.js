'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

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

// Displaying the transactions
const displayTransactions = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (value, key) {
    const type = value > 0 ? 'deposit' : 'withdrawal';
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      key + 1
    } ${type}</div>
        <div class="movements__value">${value}€</div>
      </div>`;
    containerMovements.insertAdjacentHTML('afterBegin', html);
  });
};

// Displaying the total balance
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce(function (acc, value) {
    return acc + value;
  }, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

// Displaying the total deposits and withdrawals
const displayInOut = function (acc) {
  // For Total In's
  const totalDeposits = acc.movements
    .filter(value => value > 0)
    .reduce((acc, value) => acc + value, 0);
  labelSumIn.textContent = totalDeposits + '€';

  // For total Out's
  const totalWithdrawals = acc.movements
    .filter(function (value) {
      return value < 0;
    })
    .reduce(function (acc, value) {
      return acc + value;
    }, 0);
  labelSumOut.textContent = Math.abs(totalWithdrawals) + '€';

  // For total interest
  const totalInterest = acc.movements
    .filter(value => value > 0)
    .map(value => value * (acc.interestRate / 100))
    .filter(value => value >= 1)
    .reduce((acc, value) => acc + value, 0);
  labelSumInterest.textContent = `${totalInterest}€`;
};

// Adding userName to each user accounts showcasing map method
accounts.forEach(function (value) {
  let eachOwner = value['owner'];

  let eachOwner1 = eachOwner
    .toLowerCase()
    .split(' ')
    .map(function (value1) {
      return value1[0];
    });

  value.userName = eachOwner1.join('');
});

const updatedUI = function (acc) {
  displayTransactions(acc.movements); // displaying Transactions
  calcDisplayBalance(acc); // displaying Balance
  displayInOut(acc); // displaying inOut and interests
};

// Implementing login--------------------
let currentAccount;
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();

  const validCredentials = accounts.some(function (value) {
    return (
      inputLoginUsername.value === value.userName &&
      Number(inputLoginPin.value) === value.pin
    );
  });

  if (validCredentials) {
    currentAccount = accounts.find(function (value) {
      return (
        value.userName === inputLoginUsername.value &&
        value.pin === Number(inputLoginPin.value)
      );
    });

    labelWelcome.textContent = `Welcome, ${
      currentAccount.owner.split(' ')[0]
    }!`;
    containerApp.style.opacity = 100;

    // updating the UI
    updatedUI(currentAccount);
  }

  // clearing input fields
  inputLoginUsername.value = inputLoginPin.value = '';
  inputLoginPin.blur();
});

// Transfer request--------------------
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  let amountTransfered = Number(inputTransferAmount.value);
  let receiverAccount = accounts.find(function (value) {
    return inputTransferTo.value === value.userName;
  });

  // sending the value and receiving
  if (
    amountTransfered > 0 &&
    receiverAccount &&
    Number(amountTransfered) <= currentAccount.balance &&
    receiverAccount.userName !== currentAccount.userName
  ) {
    currentAccount.movements.push(-amountTransfered);
    receiverAccount.movements.push(amountTransfered);
  }

  // Updated UI
  updatedUI(currentAccount);

  // clearing the input fields
  inputTransferTo.value = inputTransferAmount.value = '';
  inputTransferAmount.blur();
});

// Loan request---------------------
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const requestedLoan = Number(inputLoanAmount.value);
  const validLoan = currentAccount.movements.some(function (value) {
    return value > requestedLoan * 0.1;
  });

  // checking validity for loan validity
  if (requestedLoan > 0 && validLoan) {
    currentAccount.movements.push(requestedLoan);
    updatedUI(currentAccount);
  }

  // cleaning the text field
  inputLoanAmount.value = '';
  inputLoanAmount.blur();
});

// Close account---------------------
btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.userName &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    //using findIndex method
    const index = accounts.findIndex(function (value) {
      return value.userName === currentAccount.userName;
    });

    // deleting account
    accounts.splice(index, 1);

    // hiding the UI
    containerApp.style.opacity = 0;

    // deleting the welcome message
    labelWelcome.innerHTML = '<p class="welcome">Log in to get started</p>';
  }

  // clearing the input field
  inputCloseUsername.value = inputClosePin.value = '';
  inputClosePin.blur();
});

// Sorting transactions----------------
let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();

  displayTransactions(currentAccount.movements, !sorted);
  sorted = !sorted;
});

// const moements = [1, 22.2, 4151, 51, 5, 15, 61, 61, 68, 16];
// let movements = moements.slice();

// console.log(moements);
// console.log(movements);

/////////////////////////////////////////////////
/////////////////////////////////////////////////

/*----------------------------------------------------------#Coding Challange 1----------------------------------------------
// let studyJulia = [];
// let studyKate = [];

const checkDogs = function (dogsJulia, dogsKate) {
  let correctedJulia = dogsJulia.slice(1, -2);

  let overAll = [...correctedJulia, ...dogsKate];

  overAll.forEach(function (dogAge, dogNum) {
    if (dogAge >= 3) {
      console.log(
        `Dog Number ${dogNum + 1} is an adult, and is ${dogAge} years old.🐕`
      );
    } else {
      console.log(`Dog Number ${dogNum + 1} is still a puppy.🐶`);
    }
  });
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
----------------------------------------------------------------------------------------------------------------------------*/

/*----------------------------------------------------------#Coding Challange 2----------------------------------------------
const juliaStudy = [];
const kateStudy = [];


// Method 2
const calcAverageHumanAge = function (ages) {
  const humanAge = ages.map(function (value) {
    return value <= 2 ? 2 * value : 16 + value * 4;
  });
  // console.log(humanAge);
  const adultDogs = humanAge.filter(function (value) {
    return value >= 18;
  });
  // console.log(adultDogs);

  const averageAge =
    adultDogs.reduce(function (acc, value, i, entries) {
      return acc + value;
    }, 0) / adultDogs.length;

  // const averageAge = adultDogs.reduce(function (acc, value, i, entries) {
  //   return acc + value / entries.length;
  // }, 0);
  console.log(averageAge);
};

// // Method 1
// const calcAverageHumanAge = function (ages) {
//   let humanAge;
//   const abc = ages
//     .map(function (value) {
//       return value <= 2 ? (humanAge = 2 * value) : (humanAge = 16 + value * 4);
//     })
//     .filter(function (value) {
//       return value >= 18;
//     })
//     .reduce(function (acc, value, i, entries) {
//       return acc + value / entries.length;
//     }, 0);

//   console.log(abc);
// };

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
----------------------------------------------------------------------------------------------------------------------------*/

/*----------------------------------------------------------#Coding Challange 3----------------------------------------------
const calcAverageHumanAge = ages => {
  const daInHumanYears = ages
    .map(values => (values <= 2 ? 2 * values : 16 + values * 4))
    .filter(values => values >= 18)
    .reduce((acc, values, keys, entries) => {
      return acc + values / entries.length;
    }, 0);

  console.log(daInHumanYears);
};

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
----------------------------------------------------------------------------------------------------------------------------*/

/*----------------------------------------------------------#Coding Challange 4------------------------------------------------
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// challange no.1
dogs.forEach(function (value) {
  value.recommendedFood = Math.trunc(value.weight ** 0.75 * 28);
});

console.log('1:', dogs);

// challange no.2
dogs.find(function (value) {
  if (value.owners.includes('Sarah')) {
    console.log(
      `2: Sarah's dog is eating too ${
        value.curFood > value.recommendedFood ? 'much' : 'little'
      }.`
    );
  }
});

// challange no.3 and 4
const ownersEatTooMuch = dogs
  .filter(function (value) {
    return value.curFood > value.recommendedFood;
  })
  .flatMap(function (value) {
    return value.owners;
  });

const ownersEatTooLittle = dogs
  .filter(function (value) {
    return value.curFood < value.recommendedFood;
  })
  .flatMap(function (value) {
    return value.owners;
  });

console.log('3:', `${ownersEatTooMuch.join(' and ')}'s dogs eat's too much!`);
console.log(
  '3:',
  `${ownersEatTooLittle.join(' and ')}'s dogs eats too little!`
);

// challange no.5
const dogsEatingExact = dogs.some(function (value) {
  return value.curFood === value.recommendedFood;
});

console.log('5:', dogsEatingExact);

// challange no.6
// const ifOkay = dogs.some(function (value) {
//   return (
//     value.curFood >= value.recommendedFood * 0.9 &&
//     value.curFood <= value.recommendedFood * 1.1
//   );
// });

// console.log('6:', ifOkay);
const okEatingDogs = function (dog) {
  return (
    dog.curFood >= dog.recommendedFood * 0.9 &&
    dog.curFood <= dog.recommendedFood * 1.1
  );
};

console.log('6:', dogs.some(okEatingDogs));

// challange no.7
console.log('7:', dogs.filter(okEatingDogs));

// challange no.8
const inAscend = dogs.slice().sort(function (a, b) {
  return a.recommendedFood - b.recommendedFood;
});

console.log('8:', inAscend);
-----------------------------------------------------------------------------------------------------------------------------*/

/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

/*Basics array methods
let arr = ['a', 'b', 'c', 'd', 'e'];

console.log(arr.slice(0, arr.length));
console.log(arr.slice(2));
console.log(arr.slice(1, 3));
console.log(arr.slice(-2));
console.log(arr.slice(0, -2));
console.log(arr.slice());
console.log(arr.slice(1, 2));
console.log([...arr]);
console.log(arr);
// slice method doesn't change or mutate the original array

let arr1 = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr1.splice(-arr.length));
// console.log(arr1.splice(2));
// console.log(arr1.splice(0, arr1.indexOf('c')));
console.log(arr1.splice(1, 3));
console.log(arr1);
// splice method change or mutate the original array

let arr2 = ['a', 'b', 'c', 'd', 'e'];
const arr3 = ['j', 'i', 'h', 'g', 'f'];

console.log(arr3.reverse());
console.log(arr3);
// reverse method also change or mutate the original array

const letters = arr2.concat(arr3);
console.log(letters);
console.log([...arr2, ...arr3]);
// concated

console.log(letters.join('-'));
console.log(letters.join(' '));
console.log(letters.join('\n'));
// Joined
*/

/*at method
const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

console.log(arr[arr.length - 1]);
console.log(arr.at(arr.length - 1));
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));
console.log(arr.at(-2));

console.log('Saujal'.at(0));
console.log('Saujal'.at(1));
console.log('Saujal'.at(-1));
*/

/* Looping an array with for each method
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (let mntElm of movements) {
for (let [i, mntElm] of movements.entries()) {
  if (mntElm > 0) {
    console.log(
      `Transaction ${i + 1}: The user has deposited the sum of Rs.${mntElm}.`
    );
  } else {
    // mntElm = Number(String(mntElm).replace('-', ''));
    // console.log(`The user has withdrawn the sum of Rs.${mntElm}.`);
    console.log(
      `Transaction ${i + 1}: The user has withdrawn the sum of Rs.${Math.abs(
        mntElm
      )}.`
    );
  }
}
console.log('------FOREACH------');
movements.forEach(function (mntElm, i) {
  // const i = movements.indexOf(mntElm);
  // in case (mntElm, i, arr) in the function parameter try doing console.log(arr);
  if (mntElm > 0) {
    console.log(
      `Transaction ${i + 1}: The user has deposited the sum of Rs.${mntElm}.`
    );
  } else {
    console.log(
      `Transaction ${i + 1}: The user has withdrawn the sum of Rs.${Math.abs(
        mntElm
      )}.`
    );
  }
});
*/

/*Looping maps with forEach method
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, entries) {
  console.log(key);
  console.log(value);
  console.log(entries);
  console.log(`${key}: ${value}.`);
});

const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
// In set the index is equals to the value
currenciesUnique.forEach(function (value, _, entries) {
  console.log(_);
  console.log(value);
  console.log(entries);
});
*/

/*The map method
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const euroToUsd = 1.1;

const movementsUsd = movements.map(mov => Math.trunc(mov * euroToUsd));

console.log(movementsUsd);
console.log(movements);

const movementsUsdfor = [];
for (const mov of movements) {
  movementsUsdfor.push(mov * euroToUsd);
}

console.log(movementsUsdfor);

const theNew = movements.map((value, key) => {
  // return `Movement ${key + 1}: You ${
  //   value > 0 ? 'deposited' : 'withdrew'
  // } ${Math.abs(value)}`;

  if (value > 0) {
    return `Movement ${key + 1}: You deposited ${value}`;
  } else {
    return `Movement ${key + 1}: You withdrew ${Math.abs(value)}`;
  }
});

console.log(theNew);

const abc = [2, 4, 6, 8, 10];
const mul = 4;

const newArr = abc.map(function (value, key) {
  return `The No.${key + 1} calculation is: ${value * mul}.`;
});

console.log(newArr);
console.log(...newArr.join('\n'));
*/

/*The filter method
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposits = movements.filter(function (value) {
  return value > 0;
});

const withdrawals = movements.filter(function (value) {
  return value <= 0;
});

const correctedWithdrawals = withdrawals.map(function (value) {
  return Math.abs(value);
});

console.log(withdrawals);
console.log(correctedWithdrawals);
console.log(deposits);
console.log(movements);
*/

/*The reduce method
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const balance = movements.reduce((acc, value) => {
  return acc + value;
}, 0);
console.log(balance);

let balance2 = 0;
for (let mov of movements) {
  balance2 += mov;
}
console.log(balance2);

// printing the highest value of the array
// const movements = [500, -55, 56161, -21616, 116, 321, 30651, 60, 16];
// const movements = [1, 5, 9, -8, -3, 0, 1, 7, -5, 25, -2, 56, 15, 17, 19, -265];
const checked = movements.reduce(function (acc, value) {
  let crntMaxm;
  acc > value ? (crntMaxm = acc) : (crntMaxm = value);
  return crntMaxm;
}, 0);

console.log(checked);
 */

/* The find method
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const firstWithdrawal = movements.find(value => {
  return value < 0;
});
console.log(firstWithdrawal);

// Works well in objects
console.log(accounts);

const account = accounts.find(function (value) {
  return value.userName === 'stw';
});
console.log(account);

// Using for of loop

for (const account of accounts) {
  if (account.userName === 'ss') {
    console.log(account);
  }
}
*/

/*some method
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(movements);
console.log(movements.indexOf(-130));
console.log(movements.includes(-130));

// some method
const sm = movements.some(function (value) {
  return value < -700;
});

console.log(sm);
 */

/* every method
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(movements);
console.log(movements.indexOf(-130));
console.log(movements.includes(-130));

const sm = movements.every(function (value) {
  return value <= 3000;
});

console.log(sm);

const depo = value => value > 0;

console.log(movements.some(depo));
console.log(movements.every(depo));
console.log(movements.filter(depo));
 */

/*flat and flatMap method
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [[[0, 1, 2], 3], [4, [5, 6]], 7, 8, [12, 6, 9, 5, 8]];
console.log(arrDeep.flat());
console.log(arrDeep.flat(2)); // argument 1 is default

// using flat method
const overallBalance = accounts
  .map(function (value) {
    return value.movements;
  })
  .flat()
  .reduce(function (acc, value) {
    return acc + value;
  }, 0);

console.log(overallBalance);
 */

/* using flat method
const overallBalance1 = accounts
  .flatMap(function (value) {
    return value.movements;
  })
  .reduce(function (acc, value) {
    return acc + value;
  }, 0);

console.log(overallBalance1);
*/

/*sorting arrays using sort method
const owners = ['Saujal', 'Nischal', 'Yukesh', 'Yudeen', 'Nirmal'];

console.log(owners);
console.log(owners.sort());
console.log(owners);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// console.log(movements);
// console.log(movements.sort());
console.log(movements);

// ascending order

// movements.sort(function (a, b) {
//   if (a > b) {
//     return 1;
//   }
//   if (b > a) {
//     return -1;
//   }
// });
movements.sort((a, b) => a - b);
console.log(movements);

// descending order

// movements.sort(function (a, b) {
//   if (a > b) {
//     return -1;
//   }
//   if (a < b) {
//     return 1;
//   }
// });
movements.sort((a, b) => b - a);
console.log(movements);
 */

/* some more array methods
// new Array and fill method
const ab = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(new Array(1, 2, 3, 4, 5, 6, 7, 8, 9));

console.log(ab);

const x = new Array(7);
console.log(x);

x.fill(4);
x.fill(5, 3);
x.fill(2, 1, 5);

ab.fill(2, 3, 6);

console.log(x);
console.log(ab);

// Array.from() method
const y = Array.from({ length: 7 }, function () {
  return 1;
});

const z = Array.from({ length: 9 }, function (_, key) {
  return key + 1;
});

console.log(y);
console.log(z);

const randomRolls = Array.from({ length: 100 }, function () {
  return Math.trunc(Math.random() * 6 + 1);
});

console.log(randomRolls);

labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    function (value) {
      return Number(value.textContent.replace('€', 'dlr '));
    }
  );
  console.log(movementsUI);
});

console.log(document.querySelectorAll('.movements__value'));
 */

/* practice for different array methods
// 1.
const bankDepositSums = accounts
  .flatMap(function (value) {
    return value.movements;
  })
  .filter(value => value > 0)
  .reduce((acc, value) => acc + value, 0);

const bankDepositSums1 = accounts
  .flatMap(function (value) {
    return value.movements;
  })
  .reduce(function (acc, value) {
    if (value > 0) {
      acc += value;
    }
    return acc;
  }, 0);

const bankWithdrawalSums = accounts
  .flatMap(function (value) {
    return value.movements;
  })
  .reduce(function (acc, value) {
    if (value < 0) {
      acc += value;
    }
    return acc;
  }, 0);

console.log(bankDepositSums);
console.log(bankDepositSums1);
console.log(bankWithdrawalSums);

// 2.
// const numDeposit1000 = accounts
//   .flatMap(function (value) {
//     return value.movements;
//   })
//   .filter(function (value) {
//     return value >= 1000;
//   }).length;

const numDeposit1000 = accounts
  .flatMap(function (value) {
    return value.movements;
  })
  .reduce(function (acc, value) {
    return value >= 1000 ? acc + 1 : acc;
  }, 0);

console.log(numDeposit1000);

// 3.
const sums = accounts
  .flatMap(function (value) {
    return value.movements;
  })
  .reduce(
    function (acc, value) {
      // value > 0 ? (acc.deposits += value) : (acc.withdrawals += value);
      acc[value > 0 ? 'deposits' : 'withdrawals'] += value;
      return acc;
    },
    { deposits: 0, withdrawals: 0 }
  );

console.log(sums);

// 4.
// title case examples: this is a nice title -> This Is a Nice Title

const convertTitleCase = function (title) {
  const capatilize = function (str) {
    return str[0].toUpperCase() + str.slice(1);
  };

  const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(function (value) {
      return exceptions.includes(value) ? value : capatilize(value);
    })
    .join(' ');

  return capatilize(titleCase);
};

console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('and here is another title with an EXAMPLE'));
 */
