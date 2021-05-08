let form = document.querySelector('.form');
let storyText = document.querySelector('.gen-text');
let usCheck = document.getElementById('us');
let ukCheck = document.getElementById('uk');
let climate = 94;
let ukClimate = Math.floor((climate - 32) * (5 / 9));
console.log(ukClimate);
let randomName = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
let location1 = ['soup kitchen', 'Disneyland', 'White House'];
let circumstance = [
  'melted into a puddle on the sidewalk',
  'turned into a slug and crawled away',
  'spontaneously combusted',
];
form.addEventListener('submit', function (e) {
  let name = document.querySelector('#subName');
  nameVal = name.value;
  console.log(nameVal);
  if (usCheck.checked == true) {
    randomName1 = randomName[Math.floor(Math.random() * randomName.length)];
    location2 = location1[Math.floor(Math.random() * location1.length)];
    circumstance1 =
      circumstance[Math.floor(Math.random() * circumstance.length)];
    storyText.textContent = `It was ${climate} outside, so ${randomName1} went for a walk, When they got to the ${location2}, they stared in horror for a few moments, then ${circumstance1}. ${
      nameVal == '' ? 'Bob' : nameVal
    } saw the whole thing, but was not surprised —— ${randomName1} weighs 300 pounds, and it was a hot day.`;
  } else if (ukCheck.checked == true) {
    randomName1 = randomName[Math.floor(Math.random() * randomName.length)];
    location2 = location1[Math.floor(Math.random() * location1.length)];
    circumstance1 =
      circumstance[Math.floor(Math.random() * circumstance.length)];
    storyText.textContent = `It was ${ukClimate} outside, so ${randomName1} went for a walk, When they got to the ${location2}, they stared in horror for a few moments, then ${circumstance1}. ${
      nameVal == '' ? 'Bob' : nameVal
    } saw the whole thing, but was not surprised —— ${randomName1} weighs 300 pounds, and it was a hot day.`;
  }
  form.reset();
  e.preventDefault();
});
