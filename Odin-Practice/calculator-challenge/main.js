function add(...num) {
  let total = 0;
  num.forEach((element) => {
    total += element;
  });
  return total;
}
function subtract(...num) {
  let total = num.reduce(function (passinIn, item) {
    return passinIn - item;
  }, num[0] * 2);
  return total;
}
// console.log(subtract(10, 4, 2));
function sum([...num]) {
  if (num.length == 1) {
    return parseInt(num[0]);
  } else {
    let total = 0;
    num.forEach((element) => {
      total += element;
    });
    return total;
  }
}
// console.log(sum([1, 3, 5, 7, 9]));
function multiply([...num]) {
  let total = 1;
  num.forEach((element) => {
    total *= element;
  });
  return total;
}

function power(num1, num2) {
  let isaNumber = parseInt(num1) && parseInt(num2);
  if (isaNumber) {
    if (num1 !== 0) {
      return Math.pow(num1, num2);
    } else {
      return 'Error';
    }
  } else {
    return 'Error';
  }
}
// console.log(power(4, 3));

function factorial(num) {
  let times = 1;
  if (num == 0) {
    return 1;
  } else {
    for (i = 1; i <= num; i++) {
      times *= i;
      if (i == num) {
        return times;
      }
    }
  }
}
console.log(factorial(10));
