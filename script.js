'use strict';

/*
console.log(document.querySelector('.message').textContent);  

document.querySelector('.message').textContent = '🎉 Correct Number!' 

document.querySelector('.number').textContent = 13; 
document.querySelector('.score').textContent = 10; 

document.querySelector('.guess').value = 23; 
console.log(document.querySelector('.guess').value); 
*/

//TODO: for the ⛔️ No Number!, its occurs when we input 0. What if we wanted the game to between 0 and 20. How would we make the application work?

// Initial game variables
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// Utility functions
const displayMessage = (message) => document.querySelector('.message').textContent = message;
const setScore = (value) => document.querySelector('.score').textContent = value;
const setBodyStyle = (property, value) => document.querySelector('body').style[property] = value;
const setNumberBox = (property, value) => document.querySelector('.number').style[property] = value;

// Check button event listener
document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage('⛔️ No Number!');
  } 
  else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    setBodyStyle('backgroundColor', '#60b347');
    setNumberBox('width', '30rem');
    document.querySelector('.number').textContent = secretNumber;

    if (score > highScore) { 
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } 
  else {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      setScore(score);
    } else {
      displayMessage('💥 You lost the game!');
      setScore(0);
    }
  }
});

// Again button event listener
document.querySelector('.again').addEventListener('click', () => {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  setScore(score);
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';

  setBodyStyle('backgroundColor', '#222');
  setNumberBox('width', '15rem');
  document.querySelector('.number').textContent = '?';
});
