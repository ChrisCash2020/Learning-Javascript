const lastName = "Olowokere";
const lastLetterOfLastName = lastName[lastName.length - 1];
console.log(lastLetterOfLastName);

const nextInLine = (arr, item) => {
  arr.push(item);
  return arr.shift();
};
const testArr = [1, 2, 3, 4, 5];



///This is a if statement in a function so it works like this
//the parameter is a boolean and is true  so you just write out the rest of the if statements and if you call the function and that value is false or true a specific message will be sent 
// const trueOrFalse = function (wasThatTrue) {
//     if (wasThatTrue) {
//       console.log("Yes that was True");
//   } else{
//     console.log("No, That was False");
//   }
// };
// trueOrFalse(2)
const caseInSwitch = (val) => {
  // var answer = ""
  switch (val) {
    case "1":
      console.log("alpha");
      break;
  }
};

caseInSwitch("1")