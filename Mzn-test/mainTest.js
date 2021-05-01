let i = 500;
let para = document.createElement('p');

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}
while (i <= 500) {
  if (!isPrime(i)) {
    i--;
  } else {
    para.innerText += `${i} \n`;
    i--;
    if (i < 2) {
      break;
    }
  }
}

let section = document.querySelector('section');
section.appendChild(para);
