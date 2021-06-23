function comp(array1, array2) {
  if (array1 == null || array2 == null) return false;
  array1 = array1.sort((a, b) => a - b);
  array2 = array2.sort((a, b) => a - b);
  return array1.map((num) => num ** 2).every((num, i) => num === array2[i]);
}

console.log(
  comp(
    [121, 144, 19, 161, 19, 144, 19, 11],
    [121, 14641, 20736, 361, 25921, 361, 20736, 361]
  )
);
