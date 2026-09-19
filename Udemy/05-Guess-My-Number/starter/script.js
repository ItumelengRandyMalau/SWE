'use strict';

// read the value of the element with the class 'message' and log it to the console
console.log(document.querySelector('.message').textContent);
// update the text content of the element with the class 'message'
document.querySelector('.message').textContent = '🎉correct number!';
// log the updated value to the console
console.log(document.querySelector('.message').textContent);
// read the value of the element with the class 'number' and log it to the console
console.log(document.querySelector('.number').textContent);
// update the text content of the element with the class 'number'
document.querySelector('.number').textContent = 13;
// log the updated value to the console
console.log(document.querySelector('.number').textContent);
// update the text content of the element with the class 'score'
document.querySelector('.score').textContent = 10;
// log the updated value to the console
console.log(document.querySelector('.score').textContent);
// update the value of the element with the class 'guess'
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
