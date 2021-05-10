let palindromes = function (string) {
  let newString;
  let val;
  let reverseString = '';
  let result = !!string.match(/^[.,:!?]/);
  if (result) {
    let tempString = string.replace(/[^\w\s]|_/g, '');
    tempString;
    newString = tempString.toLowerCase().split('').slice();
    newString;
    for (i = 0; i <= string.length - 2; i++) {
      reverseString += newString.pop();
      reverseString;
      if (i == string.length - 2) {
        reverseString;
        val = reverseString == tempString.toLowerCase() ? true : false;
        val;
      }
    }
    return val;
  } else if (!result) {
    let test = string.indexOf();
    test;
    newString = string.toLowerCase().split('').slice();
    for (i = 0; i <= string.length - 1; i++) {
      reverseString += newString.pop();
      if (i == string.length - 1) {
        val = reverseString == string.toLowerCase() ? true : false;
        val;
      }
    }
    return val;
  }

  //   if (1 + 1 == 2) {
  //     for (i = 0; i <= string.length - 1; i++) {
  //       reverseString += newString.pop();
  //       if (i == string.length - 1) {
  //         val = reverseString == string.toLowerCase() ? true : false;
  //         val;
  //       }
  //     }
  //     return val;
  //   }
};

console.log(palindromes('Racecar!'));
