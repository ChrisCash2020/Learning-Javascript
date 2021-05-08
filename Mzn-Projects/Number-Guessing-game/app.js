let fastAppend = (parent, ...children) => {
  children.forEach((child) => {
    parent.appendChild(child);
  });
};

let fastRemove = (parent, ...children) => {
  children.forEach((child) => {
    parent.removeChild(child);
  });
};
let body = document.querySelector('body');
let p1 = document.createElement('p');
let h1 = document.createElement('h1');
let label = document.createElement('label');
let input = document.createElement('input');
let sumbitInput = document.createElement('input');
let inptContainer = document.createElement('form');
h1.textContent = 'Number guessing game';
p1.textContent = `We have selected a random number between 1 and 100. See if you can guess it in 10 turns or fewer. We'll tell you if your guess was too high or too low.`;
label.textContent = `Enter a guess:`;
input.style.width = `200px`;
sumbitInput.placeholder = `Sumbmit guess`;
sumbitInput.type = `submit`;
inptContainer.style.cssText = `display:flex; flex-direction:row; width:350px; justify-content:space-between; align-items:flex-start;`;
fastAppend(inptContainer, label, input, sumbitInput);

fastAppend(body, h1, p1, inptContainer);
let val = 0;
let p2 = document.createElement('p');
let result = document.createElement('p');
let resultMsg = document.createElement('p');
let counterlog = document.createElement('p');
let div = document.createElement('div');
div.style.height = `100px`;
div.style.display = `none`;
div.style.width = `400px`;
fastAppend(div, p2, result, resultMsg, counterlog);
body.appendChild(div);
let randomNum = Math.floor(Math.random() * 100);
console.log(randomNum);
let storeVal = '';
let counter = 0;

inptContainer.addEventListener('submit', function (e) {
  counter++;
  console.log(counter);
  if (counter == 10) {
    div.style.cssText = `display:flex; flex-direction:column; align-items: center; justify-content: center;`;
    p2.textContent = `Game Over`;
    let tryAgain = document.createElement('input');
    tryAgain.value = `Try Again`;
    tryAgain.type = `button`;
    tryAgain.addEventListener('click', function () {
      location.reload();
    });
    fastRemove(div, result, resultMsg, counterlog);
    fastAppend(div, tryAgain);
  } else {
    let valInput = input.value;
    val = valInput;
    storeVal += [val] + ' ';
    div.style.display = `block`;
    p2.textContent = `Previous guess: ${storeVal}`;
    if (randomNum == val) {
      console.log(randomNum);
      result.textContent = `Correct!`;
      result.style.color = `white`;
      p2.style.display = `none`;
      result.style.backgroundColor = `lightGreen`;
      resultMsg.textContent = `That guess was correct`;
      counterlog.textContent = `You won in ${counter} turns`;
    } else if (randomNum != val) {
      console.log(randomNum);
      result.textContent = `Wrong!`;
      result.style.color = `white`;
      result.style.backgroundColor = `Red`;
      counterlog.textContent = `Current Turn is ${counter}`;

      if (
        randomNum - val <= 5 ||
        (randomNum - val <= -5 && randomNum - val >= 0)
      ) {
        resultMsg.textContent = `That guess is really close`;
      } else if (randomNum < val) {
        resultMsg.textContent = `That guess was to high`;
      } else if (randomNum > val) {
        resultMsg.textContent = `That guess was to low`;
      }
    }
  }
  inptContainer.reset();
  e.preventDefault();
});
