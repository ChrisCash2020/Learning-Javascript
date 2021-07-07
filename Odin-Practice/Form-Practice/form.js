let inputs = document.querySelectorAll('input');
function validate(value, input) {
  if (value === true) {
    input.className = 'valid';
  } else {
    input.className = 'invalid';
  }
}
function passValidate(original, confirm) {
  let originalVal = original.value;
  let confirmVal = confirm.value;
  if (originalVal === confirmVal) {
    confirm.className = 'valid';
  } else {
    confirm.className = 'invalid';
  }
}
inputs.forEach((input, i) => {
  input.addEventListener('keyup', (e) => {
    e.preventDefault();
    if (i === 4) {
      let ogInput = inputs[3];
      let compareInput = input;
      passValidate(ogInput, compareInput);
    } else {
      validate(input.checkValidity(), input);
    }
  });
});
