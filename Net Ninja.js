//Editors note I switched tutorial the last one is basically rubbish but I still remember some basics however I need to be aware that length method basically functions outside the javascript index format and just counts regularly

//loops They are several different types here is one of the begineer ones the {} is just a block that is sectioned off from the rest

/*loops in general: 
loops first start with either a specific keyword for, while, etc
then they have a initialization variable ex: var i that specifys a specific variable*/

//for loops

for (var i = 0; i < 5; i++) {
  console.log("in loop:", i)
}

console.log("loop finished") //you can place this here to show where the loop ends

/*This specific loop:
It has three parts the initialization, conditon, and a final expression  
The i = 0; acts like a counter that keeps track of how many types it cycles through the loop and how many times we run the loop
The i < names.length; is a conditon that evaluates whether something is true or false so if the specific condition is true then it runs the code inside the block and if its false its not going to run the code  this conditon asks whether i is less than the lenth of the variable names 
The i++ is a final expression which is like a statement that executes something at the end afer all the other parts have gone through, from this example is basically revaluates i in the condition each time it loops so that the condition isn't static and it has a set end-point  */

//This specific loop but with data insidee

const names = ["shaun", "mario", "luigi"]

for (var i = 0; i < names.length; i++) {
  let html = `<div>${names[i]}</div>`
  console.log(html)
}

console.log("loop finished")

//You would put names.length in the condition part of the loop bc u would want to be very specific and avoid making up end points
//to get the the value of the data instead of just the inedex number you want to type the variable name of the data you are looping throught and reference that with the function variable i ex: console.log (names[i]);
//In this specific for loop we went a bit more advaced and created a snippet of html for each name that can be used later on.

//while loops   *Do exact same thing as a for loop just different syntax and use case

let c = 0
while (c < 5) {
  console.log(`in loop: `, c)
  c++
}
console.log("loop finished")

//In while loops the syntax is different in that the initialization variable and the final expression aren't stated in the loop () the initialization is stated outside the loop and the final expression is stated in the blook
//IT IS VERY IMPORTANT  not to run while loops until you establish the final expression because they can go on forever and crash your browser
//Don't know the use case for this atm though

//do while loops  *Extension of the while loop

let j = 4
do {
  console.log("val of j is: ", j)
  j++
} while (j < 5)

//Is for when you want to run a code at least once regardless whether the code is true or false compared to the condition in the while loop
//essential you write a do loop with the function you want and the code is run until it reaches the condition stated in the while loop beneath it

//if statements *NOT LOOPS

const age = 20

if (age > 20) {
  console.log("you are over 20 years old")
}

const ninjas = ["shaun", "ryu", "chun-li", "yoshi"]

if (ninjas.length > 3) {
  console.log("that's a lot of ninjas")
}

let password = "pass"

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

//break and continue

const scores = [50, 25, 0, 30, 100, 20, 10]

for (let i = 0; i < scores.length; i++) {
  if (scores[i] === 0) {
    continue
  }
  console.log("your score: ", scores[i])

  if (scores[i] === 100) {
    console.log("congrats, you got the top score!")
    break
  }
}

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

let user = false
if (!user) {
  console.log("you must be logged in to continue")
}

console.log(!true)
console.log(!false)
