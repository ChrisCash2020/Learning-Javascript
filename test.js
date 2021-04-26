// let name = 'ace';
// const color = 'red';

// const blockScope = () => {
//   let name = 'mike';
//   const color = 'blue';
//   console.log(`name: ${name}, color: ${color}`);
// };

// //Js.info funtion basics
// const num1 = +prompt('enter a number');
// const num2 = +prompt('enter another number');
// const pow = (x, n) => {
//   return x ** n;
// };
// if (num2 < 1 || num1 < 1) {
//   alert('only positive numbers are permitted');
// } else {
//   alert(pow(num1, num2).toFixed(0));
// }

// //this function ruturns the exponential solution of two numbers
// I'm wondering how the prompt value was able to be transferred to the function called
// I figured out that the if statement is what enables the transfer
// the if statement makes a conditions for the variables prompted
// and when that conditon was met two things were displayed
// the first thing was a error alert since I only want positve numbers
// next second thing displayed was for when that condition wasn't met
// when this condtion wasn't met i alerted the function and inputted my prompt variables inside
// the function being called, this cause those values to be replaced with the (x,n) parameters and undergo the function of pow
// this did not alter the function either, it can be reused

// Odin Project Practice Fundamentals pt 3
// let add7 = (addSeven) => {
//   return +addSeven + 7;
// };
// let multiply = (numTimes1, numTimes2) => {
//   return +numTimes1 * +numTimes2;
// };
// let capitalize = (capString) => {
//   return capString[0].toUpperCase() + capString.slice(1);
// };
// let lastLetter = (lastString) => {
//   return lastString[lastString.length - 1];
// };

//Odin Project Problem Solving
//FIzz Buzz notes:
// Okay so the user is going to be inputing numbers that have a specific range
// I need to make a function with two parameters for the user inputs
// There will be a function that counts the first parameter until it reaches the second parameter
// I need to then make a condition that attaches the string "fizz" to any number in that range that is divisible
// by three and then a string that attaches a string "buzz" to any number divisible by five and lastly a
// string that says "fizzbuzz" for strings that are divisible by three and five

const userInput = +prompt('Enter a number to start FizzBuzz algorithm');

for (i = 1; i <= userInput; i++) {
  if (i % 5 == 0 && i % 3 == 0) {
    console.log('FizzBuzz');
  } else if (i % 5 == 0) {
    console.log('Buzz');
  } else if (i % 3 == 0) {
    console.log('Fizz');
  } else {
    console.log(i);
  }
}

//okay just spent way to long trying to figure this out just to find out you don't put it in a function
//the pain i feel is immense
