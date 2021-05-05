// let keyChange = document.querySelector('body');

document.addEventListener('keydown', function (event) {
  if (event.key === 'a' || event.key === 'A') {
    let play = document.querySelector('#_1');
    play.currentTime = 0;
    console.log(play.duration);
    document.querySelector('#div1').classList.toggle('colorChange');
    return play.play();
  }
  if (event.key === 's' || event.key === 'S') {
    let play = document.querySelector('#_2');
    play.currentTime = 0;
    console.log(play.duration);
    document.querySelector('#div2').classList.toggle('colorChange');
    return play.play();
  }
  if (event.key === 'd' || event.key === 'D') {
    let play = document.querySelector('#_3');
    play.currentTime = 0;
    console.log(play.duration);
    document.querySelector('#div3').classList.toggle('colorChange');
    return play.play();
  }
  if (event.key === 'f' || event.key === 'F') {
    let play = document.querySelector('#_4');
    play.currentTime = 0;
    console.log(play.duration);
    document.querySelector('#div4').classList.toggle('colorChange');
    return play.play();
  }
  if (event.key === 'g' || event.key === 'G') {
    let play = document.querySelector('#_5');
    play.currentTime = 0;
    console.log(play.duration);
    document.querySelector('#div5').classList.toggle('colorChange');
    return play.play();
  }
  if (event.key === 'h' || event.key === 'H') {
    let play = document.querySelector('#_6');
    play.currentTime = 0;
    console.log(play.duration);
    document.querySelector('#div6').classList.toggle('colorChange');
    return play.play();
  }
  if (event.key === 'j' || event.key === 'J') {
    let play = document.querySelector('#_7');
    play.currentTime = 0;
    console.log(play.duration);
    document.querySelector('#div7').classList.toggle('colorChange');
    return play.play();
  }
  if (event.key === 'k' || event.key === 'K') {
    let play = document.querySelector('#_8');
    play.currentTime = 0;
    console.log(play.duration);
    document.querySelector('#div8').classList.toggle('colorChange');
    return play.play();
  }
  if (event.key === 'l' || event.key === 'L') {
    let play = document.querySelector('#_9');
    play.currentTime = 0;
    console.log(play.duration);
    document.querySelector('#div9').classList.toggle('colorChange');
    return play.play();
  }
});

// document.addEventListener('keyup', function (event) {
// let color = document.
// }
