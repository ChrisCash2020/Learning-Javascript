function list(names) {
  let result;
  if (names.length === 0) result = '';
  else {
    names = names.map((key) => key.name);
    if (names.length === 1) return names.join();
    let popped = names.pop();
    names = names.join(', ');
    names += ` & ${popped}`;
    result = names;
  }
  return result;
}
console.log(list([{ name: 'Bart' }]));
