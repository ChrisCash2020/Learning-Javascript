let palindromes = function (string) {
  let newString = string.toLowerCase().split('').slice();
  let removeFromString = newString.filter(function (letter) {
    return letter.replace(/[^\w\s]|_/g, '');
  });
  let join = removeFromString.join('');
  join;
  let whitespace = join.replace(/ /g, '');
  whitespace;
  let length = removeFromString.length;
  length;
  let val;
  let reverseString = '';

  if (typeof string === 'string') {
    for (i = 0; i <= length - 1; i++) {
      reverseString += removeFromString.pop();
      reverseString;
      if (i == length - 1) {
        let reverse = reverseString.replace(/ /g, '');
        reverse;
        val = reverse == whitespace ? true : false;
        val;
      }
    }
    return val;
  } else if (typeof string !== '') {
    return `Enter a word`;
  }
};

console.log(palindromes('A car, a man, a maraca.'));
