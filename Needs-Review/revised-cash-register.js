let cashInDrawer = (x, cidArr, stat) => {
  let tempX = x;
  //going to edit the change value but still need a copy for comparison
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
  //made three objects with the same keys, one mutable, one for the value of the key/currency, one for the max currency
  let keys = Object.keys(drawerValue);
  for (const key of keys) {
    drawerEmpty[key] = Math.floor(x / drawerValue[key]);
    //dividing the change value by the currency value and storing in mutable object
    //the value gotten from here is the max amount of a currency that can be given as change
    //so if the change amount is less than the currency  it will just be zero
    drawerMax[key] = Math.floor(drawerMax[key] / drawerValue[key]);
    //did the same for the max value for comparison
    if (drawerEmpty[key] > drawerMax[key]) drawerEmpty[key] = drawerMax[key];
    //so if the empty object value is greater than the max value I replace it with the max value
    drawerEmpty[key] = drawerEmpty[key] * drawerValue[key];
    //need to convert the key value back to its currency
    x -= drawerEmpty[key];
    //x is going to assure the key value i get isn't over the previous one
    if (x >= 0.00449 && x < 1) drawerEmpty['PENNY'] += 0.01;
    //javascript math makes x into .009 for some reason 🤷‍♂️
    if (drawerEmpty[key] === 0) delete drawerEmpty[key];
    //so if the empty key value just equaled three I just removed the key from the object
  }
  // console.log(drawerEmpty)
  let objValuesSum = Object.values(drawerEmpty).reduce((a, b) => a + b);
  console.log(objValuesSum);
  //Object prototype to get the key values, then used to reduce to sum them
  if (objValuesSum.toFixed(2) == tempX) {
    //I'm asking whether the sum of the object keys I collected is equal to the change amount given;
    //essential the reduce sums up all the currency that can be possibly given and if it doesn't equal the that sum doesn't equal the change value the the register has insufficent funds
    stat = 'OPEN';
    return { status: stat, change: Object.entries(drawerEmpty) };
  } else {
    stat = 'INSUFFICIENT_FUNDS';
    return { status: stat, change: [] };
  }
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
  checkCashRegister(3.26, 100, [
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
