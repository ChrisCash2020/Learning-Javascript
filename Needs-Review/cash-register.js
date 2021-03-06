let cashInDrawer = (x, cidArr, stat) => {
  let tempX = x;
  let drawerEmpty = {
    ['ONE HUNDRED']: 0,
    TWENTY: 0,
    TEN: 0,
    FIVE: 0,
    ONE: 0,
    QUARTER: 0,
    DIME: 0,
    NICKLE: 0,
    PENNY: 0,
  };
  //made an empty array of the cash I will add on to
  let drawerValue = {
    ['ONE HUNDRED']: 100,
    TWENTY: 20,
    TEN: 10,
    FIVE: 5,
    ONE: 1,
    QUARTER: 0.25,
    DIME: 0.1,
    NICKLE: 0.05,
    PENNY: 0.01,
  };
  //these are the cash values i will add together
  let drawerMax = {
    ['ONE HUNDRED']: cidArr[0],
    TWENTY: cidArr[1],
    TEN: cidArr[2],
    FIVE: cidArr[3],
    ONE: cidArr[4],
    QUARTER: cidArr[5],
    DIME: cidArr[6],
    NICKLE: cidArr[7],
    PENNY: cidArr[8],
  };
  //the function accepts an array that houses all the max array values
  let keys = Object.keys(drawerEmpty);
  //got the properties of the array
  for (const key of keys) {
    while (x >= drawerValue[key]) {
      //while the change amount is less than the base cash value I will perform something
      if (drawerEmpty[key] >= drawerMax[key]) delete drawerValue[key];
      //so if the drawerEmpty array grows bigger than the max array value I will delete the drawerValue key so it won't be satisfy this rule
      if (drawerValue[key]) {
        drawerEmpty[key] += drawerValue[key];
        x -= drawerValue[key];
        //so I'm increasing the value of the empty array and decreasing the change value as well
      }
    }
    if (drawerEmpty[key] === 0) delete drawerEmpty[key];
  }
  if (x >= 0.00449 && x < 1) {
    drawerEmpty['PENNY'] += 0.01;
  }
  let objValuesSum = Object.values(drawerEmpty).reduce((a, b) => a + b);
  if (objValuesSum.toFixed(2) == tempX) {
    stat = 'OPEN';
    return { status: stat, change: Object.entries(drawerEmpty) };
  } else {
    stat = 'INSUFFICIENT_FUNDS';
    return { status: stat, change: [] };
  }
  // return Object.entries(drawerEmpty)
};
function checkCashRegister(price, cash, cid) {
  let changeArr;
  let status;
  let change = cash - price;
  let cidArr = cid.map((item) => item[1]);
  let cidTotal = cidArr.reduce((a, b) => a + b);
  if (cidTotal == change) {
    (status = 'CLOSED'), (changeArr = cid);
    return { status: status, change: changeArr };
  } else {
    changeArr = cashInDrawer(change, cidArr.reverse(), status);
  }
  return changeArr;
}
console.log(
  checkCashRegister(19.5, 20, [
    ['PENNY', 1.01],
    ['NICKEL', 2.05],
    ['DIME', 3.1],
    ['QUARTER', 4.25],
    ['ONE', 90],
    ['FIVE', 55],
    ['TEN', 20],
    ['TWENTY', 60],
    ['ONE HUNDRED', 100],
  ])
);
