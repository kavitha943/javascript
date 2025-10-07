'use strict'

let secretNumber = Math.trunc(Math.random() * 20) + 1;

//console.log(secretNumber);
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
}
const bodyColor = function (color) {
  document.querySelector('body').style.backgroundColor = color
}
const displayScore = function (score) {
  document.querySelector('.score').textContent = score
}
const displaySecretNumber = function (width, secretNumber) {
  document.querySelector('.number').style.width = width;
  document.querySelector('.number').textContent = secretNumber;
}
document.querySelector('.js-check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //when there is no input
  if (!guess) {
    displayMessage('⛔ No number!');
    //when guess is too high and too low
  } else if (guess != secretNumber) {

    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈Too High' : '📉Too Low');
      score--;

      displayScore(score);
    } else {
      displayMessage('😕 You lost the Game!');
      displayScore(0);
    }
    //when guess is too low
  } /* else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the Game!';
      document.querySelector('.score').textContent = 0;
    }
  }  */else if (guess === secretNumber) {

    displayMessage('🎉 correct number!');
    bodyColor('#60b347');
    displaySecretNumber('30rem', secretNumber);
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  displayScore(20);
  displaySecretNumber('15rem', '?');
  document.querySelector('.guess').value = '';
  bodyColor('#222');

})