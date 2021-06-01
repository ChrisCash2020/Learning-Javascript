function arrayDiff(arr1, arr2) {
  if (arr1.length <= 0) return [];

  if (arr2.length <= 0) return arr1;

  if (arr1.length >= 1 && arr2.length >= 1) {
    arr2.forEach((element) => {
      while (arr1.includes(element)) {
        arr1.splice(arr1.indexOf(element), 1);
      }
    });
    return arr1;
  }
}
