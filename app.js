






// Chatgpt////////



// function generateRandomPassword(length) {
//     const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?';
//     let password = '';

//     for (let i = 0; i < length; i++) {
//         const randomIndex = Math.floor(Math.random() * characters.length);
//         password += characters[randomIndex];
//     }

//     return password;
// }

// // Example usage:
// const passwordLength = 12; // Specify the desired length of the password
// const randomPassword = generateRandomPassword(passwordLength);
// console.log('Generated Password:', randomPassword);

// ///////////////////////////////////////////////////












// My word //////////////////

// var password = "";


// var abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefjhijklmnopqrstuvwxyz0123456789#@!$%^&*()";

// for(var i = 1; i <= 10;i++){

// password+=abc.charAt(Math.floor(Math.random() * abc.length + 1));

// console.log(password);

// }
// /////////////////////////


// Assignment ////////

// Q1

// var multiArray = [
//     [],
//     []
// ];
// var multiArray = [
//     [0, 0, 0],
//     [0, 0, 0],
//     [0, 0, 0]
// ];


// Q2


// var num = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// Q3

// for (var i = 1; i <= 10; i++) {
//     console.log(i);
// }

// Q4

// var number = parseInt(prompt("Enter a number for the multiplication table:"));
// var length = parseInt(prompt("Enter the length of the table:"));


// console.log(`Multiplication Table of ${number}:`);
// for (let i = 1; i <= length; i++) {
//     console.log(`${number} x ${i} = ${number * i}`);
// }

// Q5

// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for (var i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

// Q6


// var counting = [];
// for (var i = 1; i <= 15; i++) {
//     counting.push(i);
// }
// console.log("Counting: " + counting.join(", "));


// var reverseCounting = [];
// for (var i = 10; i >= 1; i--) {
//     reverseCounting.push(i);
// }
// console.log("Reverse counting: " + reverseCounting.join(", "));


// var even = [];
// for (var i = 0; i <= 20; i += 2) {
//     even.push(i);
// }
// console.log("Even: " + even.join(", "));


// var odd = [];
// for (var i = 1; i < 20; i += 2) {
//     odd.push(i);
// }
// console.log("Odd: " + odd.join(", "));


// Q7


// var secretNumber = Math.floor(Math.random() * 10) + 1;
// var userGuess = parseInt(prompt("Guess a number between 1 and 10:"));


// if (userGuess < 1 || userGuess > 10 || isNaN(userGuess)) {
//     alert("Please enter a valid number between 1 and 10.");
// } else {
    
//     if (userGuess === secretNumber) {
//         alert("Congratulations! You guessed the right number!");
//     } else {
//         alert(`Sorry, the secret number was ${secretNumber}.`);
//     }
// }
