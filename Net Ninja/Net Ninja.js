//Editors note I switched tutorial the last one is basically rubbish but I still remember some basics however I need to be aware that length method basically functions outside the javascript index format and just counts regularly

/////////////////loops They are several different types here is one of the begineer ones the {} is just a block that is sectioned off from the rest

/*loops in general: 
loops first start with either a specific keyword for, while, etc
then they have a initialization variable ex: var i that specifys a specific variable*/

//for loops

for (var i = 0; i < 5; i++) {
  console.log("in loop:", i);
}

console.log("loop finished"); //you can place this here to show where the loop ends

/*This specific loop:
It has three parts the initialization, conditon, and a final expression  
The i = 0; acts like a counter that keeps track of how many types it cycles through the loop and how many times we run the loop
The i < names.length; is a conditon that evaluates whether something is true or false so if the specific condition is true then it runs the code inside the block and if its false its not going to run the code  this conditon asks whether i is less than the lenth of the variable names 
The i++ is a final expression which is like a statement that executes something at the end afer all the other parts have gone through, from this example is basically revaluates i in the condition each time it loops so that the condition isn't static and it has a set end-point  */

//This specific loop but with data insidee

const names = ["shaun", "mario", "luigi"];

for (var i = 0; i < names.length; i++) {
  let html = `<div>${names[i]}</div>`;
  console.log(html);
}

console.log("loop finished");

//You would put names.length in the condition part of the loop bc u would want to be very specific and avoid making up end points
//to get the the value of the data instead of just the inedex number you want to type the variable name of the data you are looping throught and reference that with the function variable i ex: console.log (names[i]);
//In this specific for loop we went a bit more advaced and created a snippet of html for each name that can be used later on.

/////////////while loops   *Do exact same thing as a for loop just different syntax and use case

let c = 0;
while (c < 5) {
  console.log(`in loop: `, c);
  c++;
}
console.log("loop finished");

//In while loops the syntax is different in that the initialization variable and the final expression aren't stated in the loop () the initialization is stated outside the loop and the final expression is stated in the blook
//IT IS VERY IMPORTANT  not to run while loops until you establish the final expression because they can go on forever and crash your browser
//Don't know the use case for this atm though

//do while loops  *Extension of the while loop

let j = 4;
do {
  console.log("val of j is: ", j);
  j++;
} while (j < 5);

//Is for when you want to run a code at least once regardless whether the code is true or false compared to the condition in the while loop
//essential you write a do loop with the function you want and the code is run until it reaches the condition stated in the while loop beneath it

/////////////if statements *NOT LOOPS

const age = 20;

if (age > 20) {
  console.log("you are over 20 years old");
}

const ninjas = ["shaun", "ryu", "chun-li", "yoshi"];

if (ninjas.length > 3) {
  console.log("that's a lot of ninjas");
}

let password = "pass";

// if (password.length >= 8) {
//   console.log("that password is long enough")
// }

//IF are statements only run based on whether a condition is true is used to send messages and stuff from what I can tell

//Else Statements *are used in conjunction with if statements to send a backup message if the IF statement condition isn't met

// if (password.length >= 8) {
//   console.log("that password is long enough")
// } else {
//   console.log("password is not long enough")
// }
//In this example the condition isn't met in the if statement but the else statement is there to send backup message for when that statement isn't met
//when these statements are combined only one statement is ever ran not both the other is ignored

//If you want multiple conditions you can do that

// if (password.length >= 12) {
//   console.log("that password is very strong!")
// } else if (password.length >= 8) {
//   console.log("that password is long enough")
// } else {
//   console.log("password is not long enough")
// }
//In this example you essential have to conditions instead of one like the previous one except you have one condition with a else if statement
//the else if statement is used because if you just had two if statements both codes would be run so you need a else if for every extra condition. a else if condtion should go below another else if NEVER a else

////////////////////break and continue

const scores = [50, 25, 0, 30, 100, 20, 10];

for (let i = 0; i < scores.length; i++) {
  if (scores[i] === 0) {
    continue;
  }
  console.log("your score: ", scores[i]);

  if (scores[i] === 100) {
    console.log("congrats, you got the top score!");
    break;
  }
}
///////////////switch statements
const grade = "D";

//Swi

switch (grade) {
  case "A":
    console.log("you got an A!");
    break;
  case "B":
    console.log("you got an B!");
    break;
  case "C":
    console.log("you got an C!");
    break;
  case "D":
    console.log("you got an D!");
    break;
  case "E":
    console.log("you got an A!");
    break;
  default:
    console.log("not a valid grade");
}

//switch statements funtion in a "In Case" format. So its not looking for a conditon or number but instead a someting that satisfys a === equality ie: same value/character and same data type
//the case section is where you input a value that functions in a sort of in case this variable is equal to this do this
//You also need to put a break statement so that after the code runs it doesn't loop through the other code.
//the default statement doesn't requirce a break and its functionality is that if a data points doesn't match any of the case statements, you are able to send a default message or input a default code
//switch statements as mentioned before are === so they are strict about the characters matching and the data type matching

//Break is used to stop the loop when it reaches a determinied point and continue is used to continue is  used to not show a specific value but instead skip it unaware of the use case atm tho

//logical operators if you want to add multiple conditions in one if or else if statement for example most passwords require that you have special characters

// password = "p@ssw"

// if (password.length >= 12 && password.includes("@")) {
//   console.log("that password is very strong!")
// } else if (password.length >= 8 || password.includes("@") && password,length >= 5) {
//   console.log("that password is long enough")
// } else {
//   console.log("password is not long enough")
// }

//In this example I'm using a && symbol, functions like the word And so it means both condition x and condition y need to be true to get this message, the condition here is that the password needs to include a @ string character
//The other log operator is the || which means either one condition or the other needs to be true to get the message the or seprate two condtions and one part of the condition can have a && condition along with it

//Logical Not (!) For when you want to execute code when something is The opposite

//If statements only run when a condition is met ie: when that condition is true the exclamation can be add to a if statement to change that behavior to run when a condition isn't met ie: when a condtion is false
//the use case of this is when like a user is not logged in the website behaves and looks differently because a code isn't running based on that information

// let user = false
// if (!user) {
//   console.log("you must be logged in to continue")
// }

// console.log(!true)
// console.log(!false)

///////////////Variables & block scope

const age2 = 30;

// let age2 = 50; can't be done will give a error because you can't redifine a variable, you could do age = 50 and that would work because it is let

if (true) {
  const age2 = 40;
  console.log("inside !st code block: ", age2);
  if (true) {
    const age2 = 50;
    console.log("inside 2nd code block: ", age2);
  }
}

console.log("outside code block: ", age2);

//In this example you can see the variable age2 as global scope so it is able to be accessed from inside the code block and outside the code block
//you are allowed to redefine a variable inside a block, and its only creating that specific code inside the block that wont effect the outside value of the code
//any variable you define inside the scope it is only accessable inside the code block
//you can place other staements insde a code block as well and any variable defined inside is the variable It will use opposed to the     global one
//you if you can also redefine variables again and again as long as they are inside a specific code block

////////Function

//Function Declaration
// function great() {
//   console.log("hello there");
// }
//to declare a function type out the pharase function and input a function name you would like, place parenthesis after wards and make a block code by by ending it with a {}

//function expression
// const speak = function () {
//   console.log("good day!");
// };
//for when you store a function inside a variable
//both expressions and declaration functions operate the same way its just that declared function are hoisted (loaded) first compared to expressions

////////////More info on hoisting so practically since declared functions are hoisted (loaded) first you can write a function at the bottom of the js file and still call for it at the top of the file, this isn't possible with expressions you will receive an error
//It is advised to write functions in expressions however as to keep a consistene flow and neatness, essesential just to drive in the point to decalare something first and then call it

//Calling a function *The way to do it for both a declaration and a expression
// great();
// great();
// great();
// speak();
// speak();
// speak();

//a function expression calls the function whereas just declaring a function won't output anything onto the consolse or wherever
//to call a function just write the function name along with parenthesis

////arguments and parameters

const speak = function (f = "Son", l = "Goku") {
  console.log(`Good day ${f} ${l}! `);
};
// speak("Mario", "Judah");
// console.log(f, l);
// speak();
///For when you would like to pass a value into a function
//So you would name the function value and create a code (console.log) with a `` template that references the function value name from before, Finally when you are ready to call the function you can input the value you prefer
//the value you input inside the function() is known as a parameters and the value you input to the speak() is known as the argument but in theory they are just names and whats most important is the idea and functionality
//You are also capable of inputting different values inside the parameter and argument, just be aware to seperate them by commas and to do onto to one that you do onto the other, basically if you have two parameters you need to have two arguments unless the output will be undefined and also you when typing out your argument when calling the function you need to order your inputs accorduing to the parameter set
//also you can't access the function value outside the block since its a local variable
//You can input plaacholders for your function parameters by adding a = 'x' and thats what it will fallback to
//IF YOU HAVE A FALLBACK SET YOU CAN CHOOSE TO ONLY INPUT ONE VARIABLE BUT BE CAREFUL BECAUSE THE ORDER IS STILL STRICT

/////returning values when you want to return a value
const calcArea = function (radius) {
  let area = 3.14 * radius ** 2;
  // console.log(area);
  return area;
};
// calcArea(5); //just doing this won't output anything noticeable you need to perform the declaration below then log the function, It seems monotonous but you need to perform this step to be able to store a function outside the block and have it usuable later on
const a = calcArea(5);
console.log(a);
//You don't want to log this function because it's not stored in the memory so you won't be able to use the formula inside later on, so instead of log you should do return so that the function variable is useable outside the block
//also the naming isn't strict so for the (let area) and (return area) you don't need to call the variable your using to call the function area

//*********
///You can also write the return value expression like this *THE WAY I AM GOING TO WRITE IT FROM NOW ON
const calcArea2 = function (radius2) {
  return 3.14 * radius2 ** 2;
};
const a2 = calcArea2(5);
console.log(a2);
//*********

//////////The benefits of return values is that you can take an area calculated and use it with other functions
const calcVol = function (a2) {};
calcVol(a2);
//////essentially you can reuse values with this function

///arrrow function
const calcArea3 = (radius3) => 3.14 * radius3 ** 2;
const a3 = calcArea3(5);
console.log("area is: ", a3);

//The function similar to other functions its just a shorter way to type it
//Its shorter in that you don't need to type function and if there is ONLY ONE parameter you don't need parenthesis IF THERE IS ZERO OR MORE THAN ONE YOU NEED A PARENTHEIS
//Also if you just have a single return (formula/funciton) in a arrow function you don't need the return key word and you can take away the code block {}
//Sometimes arrow functions shouldn't be used He will explain that later

////////////Practice Arrow Function
// const greet = () => "hello, world";
// const result = greet();
// console.log(result);

// const bill = (products, tax) => {
//   let total = 0;
//   for (let i = 0; i < products.length; i++) {
//     total += products[i] + products[i] * tax;
//   }
//   return total;
// };

//functions

const greet = () => "hello";

let resultOne = greet();
console.log(resultOne);

//methods
const name = "shaun";
const resultTwo = name.toUpperCase();
console.log(resultTwo);

////////callbacks and foreach
//they are basically functions that you callback to be used as arguments or parameters in another function
// const myFunc = (callbackFunc) => {
//   //do something
//   let value = 50;
//   callbackFunc(value);
// };
// myFunc((value) => console.log(value));
//So to begin in the first function you are declaring a value for a function through like a formula or whatever then you declare that function in a sense my writing the name and inputing the variable function you created
//In the next part You do a function expression and put the callback function inside, not entirely aware of the use case though
//////////////Using a built in array method
// let people = ["Mario", "Luigi", "Ryu", "Shaun", "Chun-li"];
// people.forEach(function (person) {
//   console.log(person);
// });
//In this example we are using an array and we want to run a method to similar to the for method (i= 0, i> x.length, i++) but for this method functions like a callback so you need to create a function and label the parameter
//by doing this the callback function iterates through all the values in the array

//Here is an exmaple of the foreach methods similarity to that for (i= 0, i> x.length, i++) funciton
// let people = ["Mario", "Luigi", "Ryu", "Shaun", "Chun-li"];
// people.forEach((person, index) => {
//   console.log(`${index} - hello ${person}`);
// });
//as you can tell its similar to the names FOR statement log before don't understand when or why to use one over the other yet though
//also If you want to return the index number of each function you can just write index and it will return that value

//A more advanced callback It has the same outcome but looks cleaner when you have very large functions
// let people = ["Mario", "Luigi", "Ryu", "Shaun", "Chun-li"];
// const logPerson = (person, index) => {
//   console.log(`${index} - hello ${person}`);
// };
// people.forEach(logPerson);
//In the end callback functions are just functions that you can place inside another function

// const ul = document.querySelector(".people");
// const people = ["Mario", "Luigi", "Ryu", "Shaun", "Chun-li"];

// let html = ``;

// people.forEach((person) => {
//   html += `<li>${person}</li>`;
// });
// console.log(html);
// ul.innerHTML = html;

