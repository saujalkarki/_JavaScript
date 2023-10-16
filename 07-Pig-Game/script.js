'use script';
/*------------------------------------------------Note Before Starting-----------------------------------
The codes in this file may contain same variable names multiple times
so if you are going through this codes please uncomment any one seection first that is inside the multiple line comments
and comment it down again to view another section 
---------------------------------------------------------------------------------------------------------*/

// The Dice Roll game
/*
const namePlayer = document.querySelectorAll('.name');
const playerFinalScore = document.querySelectorAll('.score');
const playerCurrentScore = document.querySelectorAll('.current-score');
const dicePng = document.querySelector('.dice');
const diceRollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const newGameBtn = document.querySelector('.btn--new');
let currentScore = 0;

// Initalization of the page..
const initialize = () => {
  dicePng.classList.add('hidden');
  for (let i = 0; i <= 1; i++) {
    playerFinalScore[i].textContent = 0;
  }
  for (let j = 0; j < playerCurrentScore.length; j++) {
    playerCurrentScore[j].textContent = 0;
  }
};

initialize(); //Initalized

//on clicking the button ROLL DICE
diceRollBtn.addEventListener('click', function () {
  let rolledNumber = Math.trunc(Math.random() * 6) + 1;
  console.log(rolledNumber);
  if (rolledNumber === 1) {
    playerFinalScore[0].textContent = 1;
    playerCurrentScore[0].textContent = 0;
    document.querySelector('.dice').classList.remove('hidden');
    document.querySelector('.dice').src = `dice-${rolledNumber}.png`;
  } else {
    for (let k = 1; k < playerCurrentScore.length; k++) {
      currentScore += rolledNumber;
      playerCurrentScore[k].textContent = currentScore;
    }
  }
});

// On clicking the HOLD button
holdBtn.addEventListener('click', function () {
  playerFinalScore[0].textContent = playerCurrentScore[0].textContent;
});

// On clicking the  NEW GAME button
newGameBtn.addEventListener('click', initialize);
*/

// The Dice Roll game

const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
const player1FinalScore = document.querySelector('#score--0');
const player2FinalScore = document.getElementById('score--1');
const dicePng = document.querySelector('.dice');
const player1CurrentScore = document.querySelector('#current--0');
const player2CurrentScore = document.getElementById('current--1');
const rollDiceBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const newGameBtn = document.querySelector('.btn--new');

let currentScore, activePlayer, finalScore, playing;

// Initialization
const initialization = () => {
  currentScore = 0;
  activePlayer = 0;
  finalScore = [0, 0];
  playing = true;

  player1FinalScore.textContent = 0;
  player2FinalScore.textContent = 0;
  dicePng.classList.add('hidden');
  player1CurrentScore.textContent = 0;
  player2CurrentScore.textContent = 0;
};

initialization();

// change player function
const changePlayer = () => {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player1.classList.toggle('player--active');
  player2.classList.toggle('player--active');
};

//On clicking the button ROLL DICE
rollDiceBtn.addEventListener('click', function () {
  if (playing) {
    let rolledNumber = Math.trunc(Math.random() * 6) + 1;
    dicePng.classList.remove('hidden');
    dicePng.src = `dice-${rolledNumber}.png`;
    if (rolledNumber !== 1) {
      currentScore += rolledNumber;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      changePlayer();
    }
  }
});

//On clicking the button HOLD
holdBtn.addEventListener('click', function () {
  if (playing) {
    finalScore[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      finalScore[activePlayer];
    if (finalScore[activePlayer] >= 100) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      dicePng.classList.add('hidden');
    } else {
      changePlayer();
    }
  }
});

// On clicking the button NEW GAME
newGameBtn.addEventListener('click', () => {
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  document.querySelector(`.player--0`).classList.add('player--active');
  initialization();
});
