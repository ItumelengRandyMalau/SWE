// 'use strict';

// // read the value of the element with the class 'message' and log it to the console
// console.log(document.querySelector('.message').textContent);
// // update the text content of the element with the class 'message'
// document.querySelector('.message').textContent = '🎉correct number!';
// // log the updated value to the console
// console.log(document.querySelector('.message').textContent);
// // read the value of the element with the class 'number' and log it to the console
// console.log(document.querySelector('.number').textContent);
// // update the text content of the element with the class 'number'
// document.querySelector('.number').textContent = 13;
// // log the updated value to the console
// console.log(document.querySelector('.number').textContent);
// // update the text content of the element with the class 'score'
// document.querySelector('.score').textContent = 10;
// // log the updated value to the console
// console.log(document.querySelector('.score').textContent);
// // update the value of the element with the class 'guess'
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

// building a simple number guessing game

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  //we convert the value of the input field to a number using the Number() function, since the value of an input field is always a string
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!';

    // when player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.number').textContent = secretNumber;

    // change the background color of the body to green when the player wins
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // when guess is too high
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
    }
  }
});

//play again
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = '💥 You lost the game!';
//     }

//     // when guess is too low
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = '📉 Too low!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = '💥 You lost the game!';
//     }
//   }
// });

//play again
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
