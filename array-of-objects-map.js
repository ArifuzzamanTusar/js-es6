// declare and array with objects 
const products = [
    {
        name: 'water bottle',
        price: 50,
        color: 'red',
    },
    {
        name: 'water bottle2',
        price: 100,
        color: 'blue',
    },
    {
        name: 'water bottle3',
        price: 150,
        color: 'green',
    },
    {
        name: 'water bottle4',
        price: 200,
        color: 'white',
    },
    {
        name: 'water bottle5',
        price: 250,
        color: 'pink',
    },

];

// extracts with traditional way 


// With ES6 array map function 

// getting all product name 
const productNames = products.map(product =>product.name);
console.log(productNames);
