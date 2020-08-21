var whatYouDo = function(job, firstName){
    switch(job) {
        case 'teacher':
            return firstName + ' teaches kids how to code.';
        case 'driver':
            return firstName + ' drives a car in Lisbon.';
        case 'designer':
            return firstName + ' designs beautiful websites';
        default:
            return firstName + ' does something else.';
    }
}

console.log(whatYouDo('designer' , 'John'));