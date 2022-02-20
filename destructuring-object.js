// Object destructuring assigns the properties of an object to variables with the same names by default.

const employee = {
    id: 58,
    name: "John doe",
    age: 21,
    address:"Rajshahi",
    salary: 210,
};


// Destructuring Object
let {id,name,age,address,salary} = employee;

// console.log(id,name,age,address,salary,);



// Nested Object 
const company ={
    name : "Grameenphone",
    ceo:{
        ceoId:1,
        ceoName: 'loremipsum',
        stack:'mern'
    },
    web:{
        work:'Frontend Development',
        employer:121,
        framework: 'react',
    }
}

const {ceoId,ceoName,stack} = company.ceo;
const {web,employer,framework} = company.web;
console.log(stack);