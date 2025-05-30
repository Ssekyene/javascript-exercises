const findTheOldest = function(people) {
  const oldestPerson = people.reduce(getOldest);
  return oldestPerson;
};

function getOldest(oldestPerson, currentPerson) {
  const oldestAge = getAge(oldestPerson.yearOfBirth, oldestPerson.yearOfDeath);
  const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
  
  return currentAge > oldestAge ? currentPerson : oldestPerson;
}

function getAge(yearOfBirth, yearOfDeath) {
  if (!yearOfDeath) {
    yearOfDeath = new Date().getFullYear();
  }
  return yearOfDeath - yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
