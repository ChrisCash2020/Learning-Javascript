function toCamelCase(str) {
  let regex = /(-|_)/g;
  str = str.split(regex);
  let shift = str.shift();
  str = str.map((word) => word[0].toUpperCase() + word.slice(1));
  str.unshift(shift);
  str = str.join('').replace(regex, '');
  console.log(str);
}

//I was tryin to use map but wasn't using charAt(0) method so the result was undefined
console.log(toCamelCase('hello-ms'));
