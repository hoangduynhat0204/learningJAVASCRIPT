var firstPointOfJohn = 119;
var secondPointOfJohn = 120;
var thirdPointOfJohn = 103;
var firstPointOfMike =116;
var secondPointOfMike = 94;
var thirdPointOfMike = 2223;
var averagePointOfJohn = (firstPointOfJohn + secondPointOfJohn + thirdPointOfJohn) / 3;
var averagePointOfMike = (firstPointOfMike + secondPointOfMike + thirdPointOfMike) / 3;

if(averagePointOfJohn > averagePointOfMike){
    console.log('John is the winner with ' + averagePointOfJohn + ' points')
}
else if(averagePointOfJohn == averagePointOfMike) {
    console.log('They are draw.')
}
else {
    console.log('Mike is the winner with ' + averagePointOfMike + ' points')
}