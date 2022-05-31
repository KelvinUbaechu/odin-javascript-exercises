function getAge(person) {
    let yearOfDeath = person.yearOfDeath || new Date().getFullYear();
    return yearOfDeath - person.yearOfBirth;
}

const findTheOldest = function(people) {
    return people.reduce((p1, p2) => getAge(p1) > getAge(p2) ? p1 : p2);
};

// Do not edit below this line
module.exports = findTheOldest;
