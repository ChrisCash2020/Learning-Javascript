// let tags = 'web design,web development,progaraming';
// let val;

// val = tags.split(',');

// val.forEach((element, index) => {
//    element;
//    index;
// });
// console.log(val);

// let val;
// //sort numerically
// let numbers = [5, 23, 36, 43, 44, 56, 100];
// val = numbers.sort((x, y) => {
//   return x - y;
// });
// val;

// val = numbers.sort((x, y) => {
//   return y - x;
// });

// val;

// const people = [
//   { name: 'John', age: 30 },
//   { name: 'Mike', age: 23 },
// ];
// people.forEach((element) => {
//   let ul = document.querySelector('ul');
//   let p = document.createElement('p');
//   p.textContent = element.name;
//   let p2 = document.createElement('p');
//   p2.textContent = element.age;
//   ul.appendChild(p);
//   ul.appendChild(p2);
// });

// const users = [
//     {id: 1, name: 'John'},
//     {id: 2, name: 'Sara'},
//     {id: 3, name: 'Karem'}

// ];

// const ids = users.map(function(user){
//     return user.name;
// })

// ids;

//look into the for in loop
console.log('*disclaimer elements refered to means html element*\n\n\n');
console.log('loop method of altering multiple elements\n-----------------');
// let listItems = document.querySelector('ul').getElementsByClassName('item');

// // listItems[0].textContent = 'hello world';
// // let i = 0;
// // do {
// //   listItems[i].textContent = 'Hello world';
// //   i++;
// // } while (i < 4);

// for (i = 0; i < 4; i++) {
//   if (i % 2 == 0) {
//     listItems[i].textContent = 'Hello World';
//   } else {
//     listItems[i].textContent = 'Bitch';
//   }
// }

console.log(
  'making elements into an array and using foreach\n----------------'
);

// listItems = Array.from(listItems);
// // listItems.reverse();

// listItems.forEach((element, index) => {
//   if (index % 2) {
//     element.textContent = `${index + 1}: Hello World`;
//   } else {
//     element.textContent = `${index + 1}: Goodbye World`;
//   }
// });

console.log('querryAll array and using foreach\n----------------');

// let listItems2 = document.querySelectorAll('ul li.item');
// // console.log(listItems2);

// listItems2.forEach((element, index) => {
//   if (index % 2) {
//     element.textContent = `${index + 1}: Hello Node`;
//   } else {
//     element.textContent = `${index + 1}: Goodbye Node`;
//   }
// });

console.log('querrySelector nodelist method\n---------------');
let listItems = document.querySelector('ul');

listItems.parentElement.style.cssText =
  'background-color:#ccc;display:flex;flex-direction:column;align-items:center;justify-content:center;width:50%;';
listItems.parentElement.parentElement.style.cssText =
  'display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:100vh;';
//some cool methods are .nextElementSibling, .previousElementSibling,
// listItems.children[3].innerHTML = `<i class = "fa fa-remove "></i>`;

for (i = 0; i < 4; i++) {
  if (i % 2 == 0) {
    // listItems.children[i].textContent = `Hello Node`;
    listItems.children[i].textContent = 'Hello Node';
  } else {
    listItems.children[i].textContent = 'Hello Node';
    listItems.children[
      i
    ].innerHTML = ` Goodbye Node <i class = "fa fa-remove "></i>`;
  }
}

console.log('Event Listeners\n---------------');

// document.querySelector('#taskBtn').addEventListener('click', (e) => {
//   listItems.parentElement.removeChild(listItems);
//   console.log(e.offsetY);
//   console.log(e.offsetX);
// });

///to get coordinates relative to self use offsetX; offsetY

console.log('Mouse Listeners\n---------------');

listItems.parentElement.addEventListener('mousemove', (e) => {
  //   document.body.style.cssText = `display:flex;flex-direction:column;align-items:center;justify-content:center;background-color:rgb(${e.offsetX}, ${e.offsetY},40);`;
  listItems.parentElement.parentElement.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY},80)`;
  listItems.parentElement.parentElement.style.transition = `background-color ease-in-out 200ms`;
});

console.log('Input and KeyBoard Listeners\n---------------');
// add a e.preventDefault()
//make a variable for the input you need and and add a .value to the name of said variable to recieve the info

console.log('delete item onclick\n---------------');

// document.querySelector('#taskBtn').addEventListener('click', (e) => {
//   //   console.log(e.target.parentElement.children[0].remove());
//   e.target.parentElement.children[0].remove();
// });

///since you removed the listitems:ul their functions stopped
console.log('font-size event\n---------------');

let p = document.querySelector('p');
p.style.fontSize = '25px';
// p.style.alignItems = 'center';

p;
document.addEventListener('keydown', function (e) {
  let val = parseInt(p.style.fontSize, 10);
  let x = e.key;
  if (x === 'ArrowUp') {
    val += 10;
  } else if (x === 'ArrowDown') {
    if (p.style.fontSize == '5px') {
      val -= 5;
    } else {
      val -= 10;
    }
  } else if (x === 'ArrowLeft') {
    p.style.justifyContent = 'flex-start';
  } else if (x === 'ArrowRight') {
    p.style.justifyContent = 'flex-end';
  } else if (x === 'Backspace') {
    p.style.justifyContent = 'center';
  }
  p.style.fontSize = val + 'px';
});
