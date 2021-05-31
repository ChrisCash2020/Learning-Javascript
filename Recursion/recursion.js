function countDown(num) {
  console.log(num);
  if (num > 1) {
    countDown(num - 1);
  }
}

countDown(5);

// Summing array elements

function sum(elems) {
  if (elems.length === 0) {
    //the numbers that are going to be inputted inside the functions are in an array so you can perform the length method
    //this if statement kind of acts like a loop because the function will constantly call back it self until it can fulfill statement
    return 0;
  } else {
    //over here using the destructing assingment the head value is used kinda of like a holder variable adjecent to mySum+= and that value is returned
    //the rest portion of the destructuring assignment is then calledback to run the function again and return that value
    //the recursion doesn't stop until the if staement argument is reached *elems.length === 0* this is reached through all the call backs
    const [head, ...rest] = elems;
    head;
    rest;
    //The way i interpret it the head stays constant and is added onto with each iteration of the sum()
    return head + sum(rest);
  }
}

console.log(sum([1, 2, 3, 4, 5]));
// Calculating the power: 4^4

function power(num, pow) {
  //bc if 3 power 1 equals 3
  if (pow == 1) {
    return num;
  } else {
    //in here num is multiplied my num until the pow == 1
    //since the if statement only targeted pow that value isn't multiplied it instead is just called again and again
    //this problem also shows how recursion problems only iterate to the variables that aren't alterted in if statements
    //for example the head varibale from the previous function wasn't an array so the if statement didn't apply and
    return num * power(num, pow - 1);
  }
}

console.log(power(4, 4));

// Calculating factorial: 5! (5 * 4 * 3 * 2 * 1)

function factorial(num) {
  if (num <= 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

console.log(factorial(5));

// Ughhhh fibonacci kill me now
// 0, 1, 1, 2, 3, 5, 8, 13, 21

function fibonacci(rem, acc = [0, 1]) {
  if (rem <= 2) {
    return acc;
  } else {
    const [second, last] = acc.slice(-2);
    return fibonacci(rem - 1, [...acc, second + last]);
  }
}

console.log(fibonacci(15));

// Trees! ☕️

const root = {
  node: 'arabica',
  children: [
    { node: 'heirloom', children: [] },
    {
      node: 'bourbon',
      children: [
        { node: 'caturra', children: [] },
        { node: 'mokka', children: [] },
      ],
    },
    {
      node: 'typica',
      children: [
        { node: 'kona', children: [] },
        { node: 'java', children: [] },
      ],
    },
  ],
};

function print({ node, children }) {
  console.group(node);
  children.forEach((child) => print(child));
  console.groupEnd(node);
}

print(root);
