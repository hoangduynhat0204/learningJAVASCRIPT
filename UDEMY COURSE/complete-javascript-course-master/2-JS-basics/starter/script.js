var massOfMark, massOfJohn, heightOfMark, heightOfJohn, BMIOfMark, BMIOfJohn, isBMIOfMarkIsHigherThanJohns;
massOfMark = 50;
massOfJohn = 60;
heightOfMark = 1.5;
heightOfJohn = 1.5;
BMIOfMark = massOfMark / (heightOfMark * heightOfMark);
BMIOfJohn = massOfJohn / (heightOfJohn * heightOfJohn);
isBMIOfMarkIsHigherThanJohns = BMIOfMark > BMIOfJohn;

console.log('Is BMI of Mark higher than John? ' + isBMIOfMarkIsHigherThanJohns);

