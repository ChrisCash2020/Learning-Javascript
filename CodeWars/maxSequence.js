var maxSequence = function (arr) {
  let solution = arr[0];
  for (let i = 1; i < arr.length; i++) {
    arr[i] = Math.max(arr[i], arr[i] + arr[i - 1]);
    solution = Math.max(solution, arr[i]);
  }
  return solution;
};
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
