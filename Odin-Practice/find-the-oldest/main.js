const people = [
  {
    name: 'Carly',
    yearOfBirth: 1066,
  },
  {
    name: 'Ray',
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: 'Jane',
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];
let findTheOldest = function (people) {
  let d = new Date();
  let birth, death, name, age;
  let ageArry = people.map(function (person) {
    birth = person.yearOfBirth;
    //    death = person.yearOfDeath;
    if ('yearOfDeath' in person) {
      death = person.yearOfDeath;
    } else {
      death = d.getFullYear();
    }
    age = death - birth;
    return age;
  });
  let test = ageArry.reduce(function (a, b) {
    return Math.max(a, b);
  });
  let index = ageArry.indexOf(test);
  let nameArry = people.map(function (person) {
    name = person.name;
    return name;
  });
  return nameArry[index];
};

console.log(findTheOldest(people));
