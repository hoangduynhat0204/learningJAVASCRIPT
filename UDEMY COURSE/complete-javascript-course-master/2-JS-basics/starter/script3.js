function calculateAge(birthYear) {
    return 2020 - birthYear;
}

var ageJohn = calculateAge(1997);
var ageMike = calculateAge(1947);
var ageAllen = calculateAge(1999);

console.log(ageJohn, ageMike, ageAllen);

function yearUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    console.log(firstName + ' retires in ' + retirement + ' years.');
}

yearUntilRetirement(1990, 'Harry');