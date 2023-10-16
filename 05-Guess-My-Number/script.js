'use strict';
/*------------------------------------------------Note Before Starting-----------------------------------
The codes in this file may contain same variable names multiple times
so if you are going through this codes please uncomment any one seection first that is inside the multiple line comments
and comment it down again to view another section 
---------------------------------------------------------------------------------------------------------*/

// Guess the number- 1st ever game made on Js by me.....
//Coding Challange 1 lies within here----------------------------------------------

/*
// Done some basics before starting--------
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 15;
console.log(document.querySelector('.guess').value);

document.querySelector('.check').addEventListener('click', function () {
  console.log(document.querySelector('.guess').value);
});
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.score').textContent = score;
document.querySelector('.highscore').textContent = highScore;

document.querySelector('.check').addEventListener('click', () => {
  const guessedNumber = Number(document.querySelector('.guess').value);
  if (!guessedNumber || guessedNumber > 20 || guessedNumber < 1) {
    document.querySelector('.message').textContent = '⛔️ No Number!';
  } else if (guessedNumber < secretNumber) {
    score -= 1;
    if (score > 0) {
      document.querySelector('.message').textContent = '📉 Too Low!';
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥The game is Over!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guessedNumber > secretNumber) {
    score -= 1;
    if (score > 0) {
      document.querySelector('.message').textContent = '📈 Too high!';
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥The game is Over!';
      document.querySelector('.score').textContent = 0;
    }
  } else {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.number').textContent = guessedNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  }
});

document.querySelector('.again').addEventListener('click', () => {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
