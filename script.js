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

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;


document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //When there is no Input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No Number!';
  }
    //When player wins
    else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('body').style.backgroundColor = ' #60b347';

    document.querySelector('.number').style.width = '30rem'
    document.querySelector('.number').textContent = secretNumber;
    
    if (score > highScore) {
        highScore = score; 
        document.querySelector('.highscore').textContent = highScore; 
    }

 
     //When guess is too high 
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }

    //When guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';

      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function(){
    //Creates another random number
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    //Reset the score
    score = 20; 
    document.querySelector('.score').textContent = 20; 

    //Clears the input
    document.querySelector('.guess').value = ''; 

    //Resets the background
    document.querySelector('body').style.backgroundColor = '#222'; 

    //Resets the mystery number box width
    document.querySelector('.number').style.width = '15rem';

    //Resets the message 
    document.querySelector('.message').textContent = 'Start guessing...'
    
    //Hides the secret number
    document.querySelector('.number').textContent = '?';
}); 