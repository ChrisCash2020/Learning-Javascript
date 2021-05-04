console.log('-----difference between let and const refresher-----\n');
let luckyNumber = 21;
console.log(luckyNumber);
luckyNumber = 13;
console.log(luckyNumber);

console.log('\n----codingChallenge1---');
let averageChecker = () => {
  let johnAverage = (90 + 81 + 55 + 70 + 80) / 5;
  console.log(`John's old score: ${johnAverage}`);
  let meganAverage = (88 + 75 + 87 + 80 + 84) / 5;
  console.log(`Megan's old score: ${meganAverage}`);

  johnAverage = 70;
  console.log(`John's new score: ${johnAverage}`);
  meganAverage = 70;
  console.log(`Megan's new score: ${meganAverage}`);

  if (johnAverage > meganAverage) {
    console.log(`John's class has a higher average of ${johnAverage}`);
  } else if (johnAverage < meganAverage) {
    console.log(`Megan's class has a higher average of ${meganAverage}`);
  } else {
    console.log(
      `both class scores are ${johnAverage} there isn't a higher average`
    );
  }
};
averageChecker();

console.log('\n----codingChallenge2----\n');
let vote = () => {
  let age = 18;
  let isCitizen = false;
  let isRegistered = false;

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
console.log('---codingChallenge2 different example below---\n');
//My method works and is techincally more effecient but I can learn from the instructors method as well. Its lengthy but I did introduce me to variables inside of if statements

// // if (age >= 18 && isCitizen && isRegistered) {
// //   console.log('You can vote!');
// // } else {
// //   let myMessage = "Sorry, you can't vote,";

// //   if (age < 18) {
// //     myMessage += ' , not old enough to vote';
// //   }
// //   if (!isCitizen) {
// //     myMessage += ' , not a citizen yet';
// //   }
// //   if (!isRegistered) {
// //     myMessage += ' , not registered to vote';
// //   }
// //   console.log(myMessage);
// // }

console.log('\n---codingChallenge3---\n');
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

console.log('\n----Misc exercises---\n');
console.log(
  '-----*can now be more dynamic with the reduce method notes below*---'
);
//to make it more dynamic you can define the first parameter and then make an spread array for the rest they create a reduce mehod;
//method will go as follows:
// let studentResult = (firstName, ...array) => {
// const average = array.reduce((acc, cur) => acc + cur) / array.length; ////The rest of the function is fine

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

// //since the function has parameters listed and there is no console log inside i have to console log it too see the value, placing inside a differenct variable is optional you would normally just assign the function to an event listener like onclick, or combine it with another function

console.log('\n----codingChallenge4---\n');
//How he did it
let getHours = (day) => 24 * day;
let getMinutes = (day) => getHours(day) * 60;
let getSeconds = (day) => getMinutes(day) * 60;

let dayConversion = (day) =>
  `${day} day(s) converts to ${getHours(day)} hours, or ${getMinutes(
    day
  )} minutes, or ${getSeconds(day)} seconds.`;
dayConversion();
console.log(dayConversion('10'));

console.log('----Improved codingChallenge4---');

let dayConversion2 = (day) => {
  let isANumber = parseInt(day);
  if (!isANumber || day == ' ') {
    return 'Enter a Number';
  } else {
    return `${day} day(s) converts to ${getHours(day)} hours, or ${getMinutes(
      day
    )} minutes, or ${getSeconds(day)} seconds.`;
  }
};

console.log(dayConversion2());
console.log('\n---codingChallenge5--\n');
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

// // let favFoodChecker = (foodsList, cravingslist) => {
// //   if(cravingslist.length !== 0){
// //   const myFood = foodsList.shift();
// //   const dinerFood = cravingslist.includes(myFood);
// //   if (!dinerFood) {
// //     return `The local diner doesn't have ${myFood} one of my favorite foods`;
// //   } else {
// //     return `The local diner has ${myFood} one of my favorite foods`;
// //   }
// // }
// // };
// // console.log(favFoodChecker(myFoods, dinerFoods));

// //His example as the same outcome and same drawbacks I feel like we haven't touched on something yet because this sems ineffecient, or I don't understand the use case

console.log('\n---codingChallenge6--\n');

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
console.log('\n----codingChallenge7---\n');

function Receipt(first, last, subtotal, tax, service) {
  this.firstName = first;
  this.lastName = last;
  this.subTotal = subtotal;
  this.taxRate = tax;
  this.serviceLevel = service;
  this.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
  this.getTip = function () {
    return this.subTotal * (this.serviceLevel == 'excellent' ? 0.25 : 0.18);
  };
  this.getTax = function () {
    return this.taxRate * this.subTotal;
  };
  this.getTotalBill = function () {
    return `Bill for: ${this.getFullName()} \nSubtotal: $${
      this.subTotal
    } \nTax: $${this.getTax()} \nTip: $${this.getTip()} \nTotal Bill: $${
      this.subTotal + this.getTax() + this.getTip()
    }`;
  };
}

const customer1 = new Receipt('Mary', 'Beth', 200, 0.1, 'excellent');
console.log(customer1.getTotalBill());
const customer2 = new Receipt('Becky', 'Anderson', 100, 0.05, 'good');
console.log('--------------------------');
console.log(customer2.getTotalBill());

console.log('\n----codingChallenge8---\n');
class Bank {
  constructor(customer, balance) {
    this.customer = customer;
    this.balance = balance;
  }
  depositMoney(a) {
    let isANumber = parseInt(a);
    if (a > 0 && isANumber) {
      this.balance += a;
      if (this.balance > 0) {
        return `$${this.balance}`;
      } else if (this.balance < 0) {
        let add = this.balance;
        return ` Just deposited $${a} your account ballance is negative $${
          add * -1
        } needed to be positive`;
      }
    } else {
      return `Error Deposit Money`;
    }
  }
  withdrawMoney(a) {
    this.balance -= a;
    let isANumber = parseInt(a);
    if (a > 0 && isANumber) {
      let difference = this.balance;
      return ` ${this.customer} ${
        difference > 0
          ? '$' + difference
          : 'your balance is in the red deposit $' + difference * -1
      }`;
    }
  }
  getAcctStatement() {
    return `${this.customer}  ${
      this.balance > 0
        ? ' balance is $' + this.balance
        : 'your balance is negative $' + this.balance * -1
    }`;
  }
}

let bankCustomer1 = new Bank('Larry Jacobs', 500);
console.log(bankCustomer1.depositMoney(1200));
console.log(bankCustomer1.withdrawMoney(600));
console.log(bankCustomer1.getAcctStatement());
console.log('-----------------------\n-----------------------');
let bankCustomer2 = new Bank('Beth Smith', 1900);
console.log(bankCustomer2.depositMoney(2400));
console.log(bankCustomer2.withdrawMoney(1200));
console.log(bankCustomer2.getAcctStatement());
console.log('-----------------------\n-----------------------');
let bankCustomer3 = new Bank('Brad Owens', 350);
console.log(bankCustomer3.depositMoney(30));
console.log(bankCustomer3.withdrawMoney(550));
console.log(bankCustomer3.getAcctStatement());

console.log('\n-----codingChallenge9-------\n');

class Item {
  constructor(itemName, amount) {
    this.itemName = itemName;
    this.amount = amount;
  }
  // calcAmountTotal() {
  //   let indexCounter = 0;
  //   for (let i = 0; i < this.itemName.length; i++) {
  //     indexCounter += this.itemName[i].amount;
  //     if (i === this.itemName.length - 1) {
  //     return indexCounter;
  //     }
  //   }
  //   return indexCounter;
  // }
  // summaryStatement(){
  //   return `Total Expense: ${this.calcAmountTotal()}`
  // }
}

const officeExp = [
  new Item('Supplies', 30),
  new Item('Computer', 900),
  new Item('Utilities', 150),
  new Item('Software', 200),
];
const travelExp = [
  new Item('Meals', 800),
  new Item('Entertainment', 500),
  new Item('Car Rentals', 700),
  new Item('Flights', 900),
];
const payroll = [
  new Item('Jacobs', 900),
  new Item('Bryan', 900),
  new Item('Davis', 900),
  new Item('Edison', 900),
  new Item('Brown', 600),
];
const fees = [
  new Item('state', 300),
  new Item('federal', 600),
  new Item('city', 900),
];

let allBusinessExpenses = [].concat(officeExp, travelExp, payroll, fees);
let test = 0;
let summaryStatement = allBusinessExpenses.forEach((element, index, array) => {
  test += element.amount;
  console.log(`${element.itemName} : $${element.amount}`);
});
console.log(`\nTotal Expenses: ${test}`);

console.log('\n-----codingChallenge10-----\n');

const jennifer = ['Tacos', 'Hamburgers', 'Meatballs'];
const max = ['Tuna', 'Veal', 'Chicken'];
const ben = ['Eggrolls', 'Salad', 'Fried Rice'];
const menuItems = [
  'Eggrolls',
  'Chips with Salsa',
  'Pork Dippers',
  'Meatballs',
  'Tacos',
  'Salad',
  'Hamburgers',
  'Tuna',
  'Veal',
  'Pizza',
  'Chicken',
  'Fried Rice',
  'Pasta',
];

let modifiedMenu = (...array) => {
  const [...items] = array;
  let test = [].concat(...items);
  test.forEach((element) => {
    if (menuItems.includes(element)) {
      menuItems.splice(menuItems.indexOf(element), 1);
    }
  });
  return menuItems;
};

console.log(modifiedMenu(jennifer, max, ben));

console.log('----Object Destructuring----');

const mall = {
  mallName: 'Mall of Irvine',
  address: {
    street: '555 Main Street',
    city: 'Irvine',
    state: 'CA',
    zip: '92620',
  },
  anchorStores: ["Macy's", 'Sears', "Dick's Sporting Goods", 'JCPenny'],
  fastFood: ['Panda Express 🐥', 'Subway 🥪', 'Burger King 🍔'],
  restaurants: [
    'Red Lobster',
    'Cheesecake Factory',
    'California Pizza Kitchen',
  ],
};

const { mallName: localMall, address: mallAdress } = mall;

console.log(mallAdress.street);

console.log('\n-----codingChallenge11-----\n');
class Student {
  constructor(
    firstName,
    lastName,
    age,
    scoreSAT,
    currentGPA,
    extraCurriculars,
    recommendations,
    apClasses
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.scoreSAT = scoreSAT;
    this.currentGPA = currentGPA;
    this.extraCurriculars = extraCurriculars;
    this.recommendations = recommendations;
    this.apClasses = apClasses;
  }
  collegeAdmission() {
    let {
      firstName,
      lastName,
      age,
      scoreSAT,
      currentGPA,
      extraCurriculars,
      recommendations,
      apClasses,
    } = this;
    if (
      (age < 17,
      scoreSAT >= 1500,
      currentGPA >= 3.8,
      extraCurriculars.length >= 3,
      recommendations.length >= 3,
      apClasses.length >= 3)
    ) {
      return `Congratulations you are admitted to a top tier university`;
    } else if (
      (age < 17,
      scoreSAT >= 1250,
      currentGPA >= 3.0,
      extraCurriculars.length >= 1,
      recommendations.length >= 1,
      apClasses.length >= 1)
    ) {
      return `Congratulations you are admitted to a state university`;
    } else if ((age < 17, scoreSAT >= 1000, currentGPA >= 2.5)) {
      return `Congratulations you are admitted to the community collge`;
    } else {
      return `Sorry you don't qualify yet`;
    }
  }
}

const teststudent1 = new Student(
  'Jennifer',
  'Davis',
  17,
  1400,
  3.5,
  ['Swim Team', 'Debate', 'Chess Club'],
  ['Steven Grier', 'Larry Fitzgerald', 'Beth Owens'],
  ['AP Economics']
);

const teststudent2 = new Student(
  'Megan',
  'Brown',
  17,
  1500,
  4,
  ['Golf', 'English Club', 'Math Club', 'Chess Club'],
  ['Steven Grier', 'Nancy Holcomb', 'Betty Smith', 'Jack Morgan'],
  ['AP Economics', 'AP Calculus', 'AP English']
);
const teststudent3 = new Student(
  'Brad',
  'Jenkins',
  18,
  1000,
  2.5,
  ['Football', 'Track and Field'],
  ['Coach Smith', 'Coach Quill'],
  []
);
const teststudent4 = new Student('Alvin', 'Andrews', 19, 800, 1.9, [], [], []);
const teststudent5 = new Student(
  'Linda',
  'Edwards',
  16,
  1100,
  2.9,
  ['Writing Club'],
  ['Betty Smith'],
  ['AP English']
);
console.log(teststudent1.collegeAdmission());

console.log('\n-----codingChallenge12-----\n');
class Student1 {
  constructor(fullName, lvl, tests) {
    this.fullName = fullName;
    this.lvl = lvl;
    this.tests = tests;
  }
  getSummary() {
    this.average = Math.round(
      this.tests.reduce((acc, cur) => acc + cur) / this.tests.length
    );
    this.passed = this.average >= 70 ? 'passed' : 'failed';
    this.letterGrade =
      this.getAverage >= 90
        ? 'A'
        : this.average >= 80
        ? 'B'
        : this.average >= 70
        ? 'C'
        : this.average >= 60
        ? 'D'
        : 'F';

    return `${this.fullName} has ${this.passed} the ${this.lvl} year of school with an average of ${this.average} and a letter grade of ${this.letterGrade}.`;
  }
}
const student1 = new Student1('Michael Fisher', 'Junior', [
  91,
  79,
  82,
  85,
  97,
  75,
]);
const student2 = new Student1('Sean Payne', 'Senior', [65, 90, 71, 62, 60, 80]);
const student3 = new Student1('Jessica Wilkins', 'Freshman', [
  100,
  91,
  95,
  90,
  89,
  80,
  92,
  97,
]);
const student4 = new Student1('Vanessa Nolan', 'Sophomore', [
  80,
  60,
  55,
  51,
  60,
  42,
]);
const student5 = new Student1('Gary Anderson', 'Freshman', [
  80,
  75,
  77,
  70,
  71,
]);
const student6 = new Student1('Kim Lee', 'Junior', [99, 98, 100, 94, 90]);
const student7 = new Student1('Rachel Smith', 'Freshman', [
  50,
  41,
  43,
  90,
  81,
  55,
  57,
  91,
]);
const student8 = new Student1('Stephanie Nolan', 'Senior', [
  95,
  80,
  85,
  70,
  100,
  100,
]);
const myClass = [
  student1,
  student2,
  student3,
  student4,
  student5,
  student6,
  student7,
  student8,
];

myClass.forEach((element) => {
  element.getSummary();
  console.log(element.getSummary());
});

const highestAverage = myClass.reduce(
  (acc, cur) => (acc > cur.average ? acc : cur.average),
  myClass[0].average
);
