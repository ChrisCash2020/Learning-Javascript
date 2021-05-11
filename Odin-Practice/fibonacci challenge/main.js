const fibonacci = function (num) {
  num;
  let val = [];
  let total = [];
  if (num <= 2) {
    return 1;
  } else if (num > 2) {
    for (i = 0; i <= num; i++) {
      val.push(i);
      let num1 = val[0];
      let num2 = val[1];
      let nxt = num1 + num2;
      if (i == num) {
        val;
        for (i = 2; i <= num; i++) {
          let nxt = num1 + num2;
          num1 = num2;
          num2 = nxt;
          total.push(nxt);
          if (i == num) {
            let returnTotal = total.pop();
            return returnTotal;
          }
        }
      }
    }
  }
};
console.log(fibonacci(8));
