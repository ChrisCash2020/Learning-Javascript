function digPow(n, p) {
  let arr = [];
  intArr = Array.from(String(n), (num) => Number(num));
  intArr.map((num) => {
    arr.push(num ** p);
    p++;
  });
  let result = arr.reduce((a, b) => a + b) / n;
  result % 1 === 0 ? result : (result = -1);
  return result;
}
console.log(digPow(46288, 3));
