function sumTwoSmallestNumbers(numbers) {
  return (numbers = numbers
    .sort((a, b) => a - b)
    .slice(0, 2)
    .reduce((a, b) => a + b));
}
console.log(sumTwoSmallestNumbers([23, 71, 33, 82, 1]));
