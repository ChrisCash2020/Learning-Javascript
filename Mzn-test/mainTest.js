// let i = 500;
// let para = document.createElement('p');

// function isPrime(num) {
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }

//   return true;
// }
// while (i <= 500) {
//   if (!isPrime(i)) {
//     i--;
//   } else {
//     para.innerText += `${i} \n`;
//     i--;
//     if (i < 2) {
//       break;
//     }
//   }
// }

// let section = document.querySelector('section');
// section.appendChild(para);

// for (let i = 1; i < 11; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   } else {
//     console.log('---------');
//   }
// }

// let i = 0;
// while (i < 3) {
//   console.log(`number ${i}!`);
//   i++;
// }

// let num;
// do {
//   num = console.log('Enter a number greater that 100?', 0)
// } while(num<= 100 && num)

// function isPrime(num) {
//   if (num < 2) {
//     return false;
//   }
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return `${num} is a prime number`;
// }

// console.log(isPrime(11));

//Odin exercise 2
// let repeatString = (word, number) => {
//   let myWord = word;
//   if ((myWord = parseInt(word))) {
//     return `Not a string`;
//   } else if ((myWord = word.toString())) {
//     for (i = 1; i < number; i++) {
//       myWord += word;
//     }
//   }
//   return myWord;
// };
// console.log(repeatString(3, 5));

//Odin exercise 3
// let reverseString = (word) => {
//   let word2 = word.split('');
//   let myWord = '';
//   for (i = 0; i < word.length; i++) {
//     let pop = word2.pop();
//     myWord += pop;
//     console.log(myWord);
//     if (i == word.length - 1) {
//       return myWord;
//     }
//   }
//   // return myWord;
// };
// console.log(reverseString('yikes'));

//revisted this exercise and I really could have just finished way faster if I just returned the last iteration of pop; and now I know I can return a value of I by setting up a if statement

//Odin exercise 4

// let removeFromArray = (array, ...argToRemove) => {
//   array;
//   argToRemove;
//   let modifiedArray = array;
//   modifiedArray;
//   for (element = 0; element <= argToRemove.length; element++) {
//     if ((isIncluded = array.includes(argToRemove[element] === true))) {
//       modifiedArray = array.splice(element, 1);
//       return console.log(modifiedArray);
//     } else if ((isIncluded = array.includes(argToRemove[element] === false))) {
//       continue;
//     }
//   }
// };
// console.log(removeFromArray([1, 2, 3, 4], 1, 2, 3, 7));

// console.log('hello');
// const removeFromArray = function (firstArray, ...toRemove) {
//   let modifiedArray = [...firstArray];

//   for (i = 0; i < firstArray.length; i++) {
//     if (modifiedArray.includes(toRemove[i])) {
//       modifiedArray.splice(modifiedArray.indexOf(toRemove[i]), 1);
//     }
//   }
//   return modifiedArray;
// };

// let removeFromArray =(array, num)=>{
//   array;
//   num;
//   myArray = [...array];
//   myArray;

//   if(myArray.includes(num)){
//     myArray.splice(array.indexOf(num),1)
//     return myArray;
//   }else{
//     return myArray;
//   }
// }

// console.log(removeFromArray([1, 2, 3, 4], 3));

// const sumAll = (...a)=> {

//  let newA = a.reduce(function (accumulator, currentValue) {

//   console.log(  typeof accumulator);
//   // if(accumulator<currentValue){

//   // }

//   return accumulator + currentValue;
// }, 0);
// return newA
// };

//OdinProject Exercise 5
let sumAll = (...num) => {
  let isANumber = parseInt(num[0]);
  isANumber;
  let myPop = 0;
  if (num[0] > 0 && num[1] > 0 && isANumber) {
    if (num[1] < num[0]) {
      for (i = 1; i <= num[0]; i++) {
        let pop = i;
        pop;
        myPop += pop;
        myPop;
        if (i == num[0]) {
          return myPop;
        }
      }
    } else {
      for (i = 1; i <= num[1]; i++) {
        let pop = i;
        pop;
        myPop += pop;
        myPop;
        if (i == num[1]) {
          return myPop;
        }
      }
    }
  } else {
    return 'Error';
  }
};

console.log(sumAll('hi'));

//can get the same result with forEach 😠

let sumAlltwo = (...a) => {
  let isANumber = parseInt(a[0]);
  isANumber;
  let counterSum = 0;
  if (isANumber) {
    a.forEach(function (element, index, array) {
      if (array[0] < array[1]) {
        if (index === 0) {
          for (i = 0; i <= array[1]; i++) {
            counterSum += i;
            if (i == array[1]) {
              return counterSum;
            }
          }
        }
      } else if (array[0] > array[1]) {
        if (index === 1) {
          for (i = 0; i <= array[0]; i++) {
            counterSum += i;
            if (i == array[0]) {
              return counterSum;
            }
          }
        }
      }
    });
    return counterSum;
  } else {
    return 'Error';
  }
};
console.log(sumAlltwo(123, 1));

const leapYears = (year) => {
  let isaNumber = parseInt(year);
  if (isaNumber % 2 == 0) {
    if (isaNumber % 100 == 0) {
      if (isaNumber % 400 == 0) {
      }
    }
    return true;
  } else {
    return false;
  }
};

console.log(leapYears(1996));

const ftoc = (num) => {
  let answer = (num - 32) * (5 / 9);
  return answer.toFixed(1);
};
console.log(ftoc(-100));
console.log('-------------');
const ctof = (num) => {
  let answer = num * (9 / 5) + 32;
  return answer.toFixed(1);
};
console.log(ctof(-10));
