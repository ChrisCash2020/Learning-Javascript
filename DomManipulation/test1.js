let container = document.querySelector('#container');
let p = document.createElement('p');
p.textContent = `Hey I'm red!`;
p.style.color = `red`;
let h3 = document.createElement('h3');
h3.textContent = `I'm a blue h3!`;
h3.style.color = `blue`;
let div2 = document.createElement('div');
div2.style.cssText = `border: black; background-color: pink;`;
let div2_h1 = document.createElement('h1');
div2_h1.textContent = `I'm in a div`;
let div2_p = document.createElement('p');
div2_p.textContent = `ME TOO!`;
div2.appendChild(div2_h1);
div2.appendChild(div2_p);
// container.appendChild(p);
// container.appendChild(h3);
// container.appendChild(div2);

let fastAppend = (parent, ...children) => {
  children.forEach((child) => {
    parent.appendChild(child);
  });
};

fastAppend(container, p, h3, div2);
