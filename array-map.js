// Basic problem make square of array elemets

//decalre an array
const array = [2,4,6,8,10];
// lets make a function for square
const square = number => number*number;


// Traditional way to solve the problem 
let new_array= [];
for(const element of array){
    const Result = square(element);
    new_array.push(Result);
}
// console.log(new_array);


/*
With ES6 array map function, 
1. loop through the array element
2. for each element call the provided function
3. Result for each element will be stored in the array
*/


//Map usages case
const square_array = array.map(square);
// console.log(square_array);

// ------------


const friends = ['Tom Cruise','John Doe','John Abraham','Tom Brandy'];
const friendList = friends.map(friend => friend); //returns all element as array
const friendsLength = friends.map(friend => friend.length); //returns all elements length


console.log(friendsLength);