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

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  //we convert the value of the input field to a number using the Number() function, since the value of an input field is always a string
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // check if the guess is a valid number
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = '📈 Too high!';
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = '📉 Too low!';
  }
});
