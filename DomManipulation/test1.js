// let container = document.querySelector('#container');
// let p = document.createElement('p');
// p.textContent = `Hey I'm red!`;
// p.style.color = `red`;
// let h3 = document.createElement('h3');
// h3.textContent = `I'm a blue h3!`;
// h3.style.color = `blue`;
// let div2 = document.createElement('div');
// div2.style.cssText = `border: black; background-color: pink;`;
// let div2_h1 = document.createElement('h1');
// div2_h1.textContent = `I'm in a div`;
// let div2_p = document.createElement('p');
// div2_p.textContent = `ME TOO!`;
// div2.appendChild(div2_h1);
// div2.appendChild(div2_p);
// // container.appendChild(p);
// // container.appendChild(h3);
// // container.appendChild(div2);

// let fastAppend = (parent, ...children) => {
//   children.forEach((child) => {
//     parent.appendChild(child);
//   });
// };

// fastAppend(container, p, h3, div2);
// let p = document.querySelector('p');
// p.style.fontSize = '25px';

let p = document.querySelector('p');

document.addEventListener('keydown', function (e) {
  let val = parseInt(p.style.fontSize, 10);
  let x = e.key;
  if (x === 'ArrowUp') {
    val += 10;
  } else if (x === 'ArrowDown') {
    val -= 10;
  }
  p.style.fontSize = val + 'px';
});
// let box = document.createElement('div');
// box.style.cssText = `height: 200px width: 200px `;

// document.addEventListener('mousemove', function (e) {
//   if (e.clientX >= 400 && e.clientY >= 400) {
//     box.classList.add('trail');
//   }
// });

// let screenLog = document.querySelector('#screen-log');
// //  let box = document.createElement('div');
// // screenLog.appendChild(box)
// document.addEventListener('mousemove', logKey);
// let box = document.querySelectorAll('div');
// let char = 0;
// function logKey(e) {
//   screenLog.innerText = `
//     Screen X/Y: ${e.screenX}, ${e.screenY}
//     Client X/Y: ${e.clientX}, ${e.clientY}`;

//   // screenLog.appendChild(box);
//   // box.classList.add('trail')[char];
//   // char++;
//   box.forEach((element) => {
//     if (e.clientX > 400 && e.clientX < 600) {
//       console.log(Element);
//     }
//   });

// }

// let scroll = document.querySelector('.scrollbar');
// scroll.addEventListener('mousemove', createDiv);

// function createDiv(e) {
//   let d = document.createElement('DIV');
//   let div = document.querySelector('#hope');
//   // let screenLog = document.getElementById('screen-log');
//   d.setAttribute(
//     'style',
//     'margin:10px;width:140px;height:140px;background-color: lightgreen;border:2px solid blue;'
//   );
//   scroll.innerText = `
//       Screen X/Y: ${e.screenX}, ${e.screenY}
//       Client X/Y: ${e.clientX}, ${e.clientY}`;

//     if (e.clientX >50% && e.clientX < 60%) {
//       div.appendChild(d);
//     }
//     if (e.clientX < 250) {
//       div.removeChild(d);
//     }
// }

console.log('tabs\n-----------------');
let togText = document.getElementById('togText');

let containerList = document.querySelector('tab-panel');

console.log(containerList.childElementCount);
for (i = 0; i < containerList.childElementCount; i++) {
  if (i == 0) {
    containerList.children[i].addEventListener('click', function () {
      togText.innerHTML = `<h1>This is Tab one</h1> <p>Enjoy you stay</p>`;
      togText.style.opacity = '1';
    });
  } else if (i == 1) {
    containerList.children[i].addEventListener('click', function () {
      togText.innerHTML = `<h1>This is Tab two</h1> <p>Enjoy you stay</p>`;
      togText.style.opacity = '1';
    });
  } else if (i == 2) {
    containerList.children[i].addEventListener('click', function () {
      togText.innerHTML = `<h1>This is Tab three</h1> <p>Enjoy you stay</p>`;
      togText.style.opacity = '1';
    });
  }
}
