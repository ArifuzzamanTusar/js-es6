const numbers = [2,5,4,65,4,,75,45,4,4,45,4,454,54,4];


//big number
const greaterThan20 = numbers.filter(Number => Number>20);
// console.log(greaterThan20);


// find 
const find = numbers.find(number => number === 400);
console.log(find);