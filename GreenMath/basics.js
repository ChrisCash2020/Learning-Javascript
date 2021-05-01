//difference between let and const refresher
// let luckyNumber = 21;
// console.log(luckyNumber);
// luckyNumber = 13;
// console.log(luckyNumber);

//codingChallenge1
// let averageChecker = () => {
//   let johnAverage = (90 + 81 + 55 + 70 + 80) / 5;
//   console.log(`John's old score: ${johnAverage}`);
//   let meganAverage = (88 + 75 + 87 + 80 + 84) / 5;
//   console.log(`Megan's old score: ${meganAverage}`);

//   johnAverage = 70;
//   console.log(`John's new score: ${johnAverage}`);
//   meganAverage = 70;
//   console.log(`Megan's new score: ${meganAverage}`);

//   if (johnAverage > meganAverage) {
//     console.log(`John's class has a higher average of ${johnAverage}`);
//   } else if (johnAverage < meganAverage) {
//     console.log(`Megan's class has a higher average of ${meganAverage}`);
//   } else {
//     console.log(
//       `both class scores are ${johnAverage} there isn't a higher average`
//     );
//   }
// };
// averageChecker();
//codingChallenge2
let vote = () => {
  let age = 18;
  let isCitizen = false;
  let isRegistered = false;

  //placed the if statement in a function so that my other if statements could run
  //the logical not just flips the value of the variable, the if conditon will only run if that variable is true, so if you want to want to asign false so a varibale so it can be understandable
  //you will also need to appply the ! operator infron so that if statement will run, so basically you are writing a variable for isRaining  for a statement about a good day to jog
  //you would asign that varible false because it makes sense to not want that true when make a good day statement, so to make sure that that statement runs properly you need to place the ! operator so the value returns true and you can write the conditon with no worries also base your if statement on the value you first asign the variables  in the start

  if (age >= 18 && isCitizen && isRegistered) {
    console.log('You can vote!');
    return;
  } else {
    if (age < 18 && !isCitizen && !isRegistered) {
      console.log(`You don't satisfy any criteria, you can't vote`);
      return;
    } else if (age < 18 && !isRegistered) {
      console.log(`You can't vote because of your age & your not registered`);
      return;
    } else if (age < 18 && !isCitizen) {
      console.log(`You can't vote because of your age & your not a citizen`);
      return;
    }
    if (age < 18) {
      console.log(`You can't vote because of your age`);
      return;
    } else if (!isCitizen && !isRegistered) {
      console.log(
        `You can't vote because you are not a citizen and not registered`
      );
      return;
    } else if (!isRegistered) {
      console.log(`You can't vote because your not registered`);
      return;
    } else if (!isCitizen) {
      console.log(`You can't vote because you are not a citizen`);
      return;
    }
  }
};
vote();
//codingChallenge2 My method works and is techincally more effecient but I can learn from the instructors method as well. Its lengthy but I did introduce me to variables inside of if statements

// if (age >= 18 && isCitizen && isRegistered) {
//   console.log('You can vote!');
// } else {
//   let myMessage = "Sorry, you can't vote,";

//   if (age < 18) {
//     myMessage += ' , not old enough to vote';
//   }
//   if (!isCitizen) {
//     myMessage += ' , not a citizen yet';
//   }
//   if (!isRegistered) {
//     myMessage += ' , not registered to vote';
//   }
//   console.log(myMessage);
// }

//codingChalleng3
//the tutorial hasn't introduced arrays yet I just made one to iterate between each option faster, but understanding how it can be done without an array really makes me understand the use case of arrays
let foodReceipt = () => {
  let arrayFood = ['Hamburger', 'Lasagna', 'Steak'];
  let arrayBeverage = ['Water', 'Soda', 'Beer'];
  let arryService = ['bad', 'good', 'excellent'];

  let foodType = arrayFood[1];
  let beverageType = arrayBeverage[1];
  let foodPrice;
  let beveragePrice;
  let serviceType = arryService[2];
  let tipVal;

  switch (foodType) {
    case 'Hamburger':
      foodPrice = 8;
      break;
    case 'Lasagna':
      foodPrice = 15;
      break;
    case 'Steak':
      foodPrice = 20;
      break;
  }

  //foodType switch statement as ternary:
  //  foodPrice = foodType === "Hamburger"? 8: foodType === "Lasagna"? 15 : 20;

  switch (beverageType) {
    case 'Water':
      beveragePrice = 0;
      break;
    case 'Soda':
      beveragePrice = 3;
      break;
    case 'Beer':
      beveragePrice = 5;
      break;
  }

  //beverageType switch statement as a ternary:
  // beveragePrice = beverageType === 'Water' ? 0 : beverageType === 'Soda' ? 3: 5;

  switch (serviceType) {
    case 'bad':
      tipVal = 0.05;
      break;
    case 'good':
      tipVal = 0.15;
      break;
    case 'excellent':
      tipVal = 0.2;
      break;
  }

  //serviceType switch statement as a ternary:
  // tipVal = serviceType === 'bad' ? .05 : serviceType === 'good' ? .15 : .2;

  let subtotal = foodPrice + beveragePrice;
  let tax = subtotal * 0.08;
  let tip = tipVal * subtotal;
  let finalBill = (subtotal + tax + tip).toFixed(2);
  // console.log(tipVal)
  // console.log(subtotal);
  // console.log(tax)
  // console.log(tip)
  // console.log(finalBill)

  console.log(`Food: ${foodType}: $${foodPrice}
Beverage: ${beverageType}: $${beveragePrice}
Subtotal: $${subtotal}
Tax: $${tax}
Tip: $${tip}
Total: $${finalBill}`);

  console.log(
    `my order was a ${foodType} and ${beverageType}, the service was ${serviceType} so my total was $${finalBill}`
  );
};
foodReceipt();

//actually working with functions now I need to find tenary practice sources to get the syntax embedded in my head

let studentResult = (firstName, test1, test2, test3, test4) => {
  const average = (test1 + test2 + test3 + test4) / 4;
  const hasPassed = average >= 70 ? true : false;
  const letterGrade =
    average >= 90
      ? 'A'
      : average >= '80'
      ? 'B'
      : average >= '70'
      ? 'C'
      : average >= '60'
      ? 'D'
      : 'F';
  return `${firstName} ${
    hasPassed ? 'has passed' : 'has failed'
  } with an average score of ${average} and a letter grade of ${letterGrade}`;
  console.log(`this will never run`); ///anything after return will never run
};
const chrisScore = studentResult('Chris', 70, 90, 100, 95);

console.log(chrisScore);
//since the function has parameters listed and there is no console log inside i have to console log it too see the value, placing inside a differenct variable is optional you would normally just assign the function to an event listener like onclick, or combine it with another function

// const month = new Date().getDate();
// alert(month);
// console.log(month)

//codingChalleng4
//how I did it
// let getHours =(day)=> +day * 24;
// let getMinutes =(day) => +day*24*60;
// let getSeconds = (day)=> +day*24*60*60;

// console.log(getHours(1))

//How he did it
let getHours = (day) => 24 * day;
let getMinutes = (day) => getHours(day) * 60;
let getSeconds = (day) => getMinutes(day) * 60;

// let dayConversion = (day) => `${day} day(s) converts to ${getHours(day)} hours, or ${getMinutes(day)} minutes, or ${getSeconds(day)} seconds.`;
// dayConversion()
// console.log(dayConversion('10'));

// let isANumber = (num)=>{
//  let numConversion = +(num)
// if(!numConversion){
//   return `Enter a number`
// }else{
//   return dayConversion(num);
// }
// }
// console.log(isANumber('hi'))

let dayConversion = (day) => {
  let isANumber = parseInt(day);
  if (!isANumber || day == ' ') {
    return 'Enter a Number';
  } else {
    return `${day} day(s) converts to ${getHours(day)} hours, or ${getMinutes(
      day
    )} minutes, or ${getSeconds(day)} seconds.`;
  }
};

console.log(dayConversion());

//Okay So I now figured out how to retun a error message per say if the user input isn't the correct value
// this varaible can be considered a data type converter that you can label 'isANumber' 'isAString'
//so if you want the user to input a number you will create a variable that is equal to parsInt('parameter')
//if you want the user to input a string you will create a variable that is equal to String('parameter')
//after creating that variable you will just make a if statement with the first statement asking whether or not the value
//when i say value I mean the result, so wheter or not the result of a user input is equal to the varaible converter type by putting the logical not operator (!)
//if the user Input isn't equivalent to the data choice you want you can send them a message such as
//"Not a Number" or "Not a String", but if the data the user inputs is correct then you can send them the code that you wanted to send in the first place
//so In this example I wanted to send a message that would convert the amount of days into smaller units, but I needed the user to input a integer
//so that the message wouldn't return stupuid shit like  (dayCoversion('hi')) -> "hi days converts to NaN hours...etc"

const storeItems = [
  'Butter',
  'Chicken',
  'Beer',
  'Steak',
  'Corn',
  'Potatoes',
  'Tomatoes',
  'Rice',
];
// console.log(storeItems.shift())
const itemPrices = [2, 4, 5, 10, 2, 1, 1, 2];

const groceryList = [
  'Butter',
  'Beer',
  'Steak',
  'Cereal',
  'Milk',
  'Bananas',
  'Corn',
];

//set up a function that is going to take in a grocerylist and search through a store item list and send a message wheter they have the item or not
//how i figured out how to do it
let getItem = (groceryList, storeItems, itemPrices) => {
  const myItem = groceryList.shift();
  const storeItem = storeItems.indexOf(myItem);
  const itemPrice = itemPrices[storeItem];
  if (storeItem !== -1) {
    return `We have ${myItem} in stock. the price is $${itemPrice}.`;
  } else {
    return `We don't have ${myItem} in stock.`;
  }
};
//always put a return statement after you last else statement or it will log the else condtion as undefined

while (groceryList.length !== 0) {
  console.log(getItem(groceryList, storeItems, itemPrices));
}

//  in his example he made a unnessassary conditon, the condtion was just gonna be used in the while loop anyway so I decided not tho include it but since it din't
//  effect the solution
// let getItem = (groceryList, storeItems, itemPrices) => {
// if (groceryList.length !== 0){
// const myItem = groceryList.shift();
// const storeItem = storeItems.indexOf(myItem)
// const itemPrice = itemPrices[storeItem];
//  if (storeItem !== -1) {
//    return `We have ${myItem} in stock. the price is $${itemPrice}.`;
//  } else {
//    return `We don't have ${myItem} in stock.`;
//  }
// }
// }

const games = [
  'Fortnite',
  'GTA',
  'Minecraft',
  'Overwatch',
  'Call of Duty',
  'Halo',
  'Tetris',
  'Super Mario Bros',
];
console.log(games.includes('Minecraft'));

const allStudents = [
  'Marry',
  'Jacob',
  'Beth',
  'David',
  'Harry',
  'Gary',
  'Alison',
  'Ned',
  'Jennifer',
  'Jessica',
];

const honorRoll = ['Jacob', 'Beth', 'Harry', 'Jennifer', 'Jessica'];
allStudents.push('Chris');
honorRoll.push('Chris');

let honorRollChecker = () => {
  const student = allStudents.shift();
  const honorStudent = honorRoll.includes(student);
  if (honorStudent === true) {
    return `${student} is on the honor roll.`;
  } else {
    return `${student} is not on the honor roll.`;
  }
};
while (allStudents.length !== 0) {
  console.log(honorRollChecker());
}

const dinerFoods = [
  'Hamburgers',
  'Pizza',
  'Fried Chicken',
  'Lamb',
  'Pancakes',
  'Fries',
  'Bacon',
  'Waffles',
  'Meatballs',
  'Pasta',
  'Fried Rice',
  'Mashed Potatoes',
];

const myFoods = [
  'Lamb',
  'Pasta',
  'Bagels',
  'Smoked Pork',
  'Fried Rice',
  'Orange Chicken',
];

let favFoodChecker = () => {
  const myFood = myFoods.shift();
  const dinerFood = dinerFoods.includes(myFood);
  if (!dinerFood) {
    return `The local diner doesn't have ${myFood} one of my favorite foods`;
  } else {
    return `The local diner has ${myFood} one of my favorite foods`;
  }
};
// console.log( favFoodChecker());
while (myFoods.length !== 0) {
  console.log(favFoodChecker());
}

// let favFoodChecker = (foodsList, cravingslist) => {
//   if(cravingslist.length !== 0){
//   const myFood = foodsList.shift();
//   const dinerFood = cravingslist.includes(myFood);
//   if (!dinerFood) {
//     return `The local diner doesn't have ${myFood} one of my favorite foods`;
//   } else {
//     return `The local diner has ${myFood} one of my favorite foods`;
//   }
// }
// };
// console.log(favFoodChecker(myFoods, dinerFoods));

//His example as the same outcome and same drawbacks I feel like we haven't touched on something yet because this sems ineffecient, or I don't understand the use case

//while loops
//scores is the array you will pass in
//i acts like a counter so its going to iterate in the while loop, so you set it equal to 0
//sumScores is going to take in the array item so you set it to 0 so the array item value is untempered with
//the scores.length enables that the loop as a endpoint
//the scores[i] is what actually sets off the counter, so the input array will find the index number correlated to the i varible
//so it will start of with 0 and then increase by one because of the i++, this function will loop endlessly until it reaches the endpoint
//remember the endpoint was i<scores.length.
//they are other while loop iteration formulas i can't process in my mind what they could be but in this example it is average
//most loops will have the same condtion but the statement will be different depending on the objective,
//the objective here was average so he did a while statement that will get the sum of the array
//after getting the sum from a while loop iteration he returned the sum calculated in the while loop by the array length because this is how you calculate average
//
let calAverage = (scores) => {
  let i = 0,
    sumScores = 0;
  while (i < scores.length) {
    sumScores += scores[i];
    i++;
  }
  return sumScores / scores.length;
};

const jennyScore = calAverage([99, 75, 83, 93]);
console.log(jennyScore);

const shows = [
  'Bridgerton',
  'Fate',
  'Alon',
  'Lupin',
  'Spycraft',
  '3%',
  'The Society',
  'The Rain',
  'You',
];

let myList = '',
  i = 0;
while (i < shows.length - 1) {
  myList += shows[i] + ', ';
  i++;
}
myList += `and ${shows[shows.length - 1]}.`;
console.log(`I really want to watch ${myList}`);

//This is an example of a loop string so he st myList to a string type with ''  placed it in the basica counter statement
//he made the variable equal the array input values  but seperated by commas,
//he also stopped the endpoint before the full length so it wouldn't include the last string
//this was done so that he could re-add it later with myList += `and [last string]`
//adding this staement and makes it look clean and instead of putting the index number he used the length property minus
//one to get the most up to date value

for (let i = 0; i < 5; i++) {
  if (i % 2 === 0) {
    console.log(`The number ${i} is an even number.`);
  } else {
    console.log(`The number ${i} is an odd number.`);
  }
}

// for(let i = 0; i<49; i++){
//   if( Math.sqrt(i) % 1 === 0 && Math.cbrt(i) % 1 === 0){
//     console.log(`The number ${i} is a perfect square and a perfect cube`)
//   }else if (Math.sqrt(i) % 1 === 0){
//     console.log(`The number ${i} is a perfect square`)
//   }else if (Math.cbrt(i) % 1 === 0 ){
//     console.log(`the number ${i} is a pefect cube`)
//   }
// }

//codingChallenge6

const malelifters = [
  ['Jamie', 1050],
  ['Mark', 1020],
  ['Steven', 990],
  ['Max', 980],
  ['Gerald', 970],
  ['Brad', 955],
  ['Alex', 920],
];
const femalelifters = [
  ['Jenny', 400],
  ['Megan', 385],
  ['Alice', 365],
  ['Beth', 350],
  ['Becky', 320],
  ['Amanda', 300],
  ['Candice', 290],
  ['Jessica', 250],
  ['Mary', 220],
  ['Linda', 200],
];

const allLifters = malelifters.concat(femalelifters);

// console.log(allLifters)
let lifterResults = (array) => {
  let myMsg = '';
  for (let i = array.length - 1; i > -1; i--) {
    myMsg += `Coming in ${i + 1}${
      i > 2 ? 'th' : i === 2 ? 'rd' : i === 1 ? 'nd' : 'st'
    } place ${array[i][0]} lifted ${array[i][1]} pounds ${i === 0 ? '🏆' : ''}`;
    if (i > 0) {
      myMsg += '\n';
    }
  }
  return myMsg;
};

console.log(lifterResults(allLifters));
