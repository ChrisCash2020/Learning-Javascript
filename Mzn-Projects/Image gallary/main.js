let fastAppend = (parent, ...children) => {
  children.forEach((child) => {
    parent.appendChild(child);
  });
};
const displayedImage = document.querySelector('.displayed-img');

const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
btn.addEventListener('click', function () {
  if (btn.textContent == 'Darken') {
    btn.textContent = 'Lighten';
    displayedImage.style.filter = 'brightness(70%)';
  } else if (btn.textContent == 'Lighten') {
    btn.textContent = 'Darken';
    displayedImage.style.filter = 'brightness(100%)';
  }
});
const overlay = document.querySelector('.overlay');
let img1 = document.createElement('img');
img1.src = `images/pic1.jpg`;
let img2 = document.createElement('img');
img2.src = `images/pic2.jpg`;
let img3 = document.createElement('img');
img3.src = `images/pic3.jpg`;
let img4 = document.createElement('img');
img4.src = `images/pic4.jpg`;
let img5 = document.createElement('img');
img5.src = `images/pic5.jpg`;

fastAppend(thumbBar, img1, img2, img3, img4, img5);

document.querySelectorAll('.thumb-bar > img').forEach(function (el) {
  el.addEventListener('click', function (e) {
    displayedImage.src = `${e.target.src}`;
  });
});

let imgArray = [img1, img2, img3, img4, img5];

let rightArrow = document.querySelector('.arrow-right');
let leftArrow = document.querySelector('.arrow-left');
let counter = 0;
rightArrow.addEventListener('click', function () {
  counter++;
  if (counter == -1 || counter == 5) {
    counter = 0;
    displayedImage.src = `${imgArray[0].src}`;
  } else if (counter == 0) {
    displayedImage.src = `${imgArray[0].src}`;
  } else if (counter == 1) {
    displayedImage.src = `${imgArray[1].src}`;
  } else if (counter == 2) {
    displayedImage.src = `${imgArray[2].src}`;
  } else if (counter == 3) {
    displayedImage.src = `${imgArray[3].src}`;
  } else if (counter == 4) {
    displayedImage.src = `${imgArray[4].src}`;
  }
});
leftArrow.addEventListener('click', function () {
  counter--;
  if (counter == -1 || counter == 5) {
    counter = 4;
    displayedImage.src = `${imgArray[4].src}`;
  } else if (counter == 0) {
    displayedImage.src = `${imgArray[0].src}`;
  } else if (counter == 1) {
    displayedImage.src = `${imgArray[1].src}`;
  } else if (counter == 2) {
    displayedImage.src = `${imgArray[2].src}`;
  } else if (counter == 3) {
    displayedImage.src = `${imgArray[3].src}`;
  } else if (counter == 4) {
    displayedImage.src = `${imgArray[4].src}`;
  }
});
