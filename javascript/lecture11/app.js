 // 2 Types:
// 1. Shallow Copy
//2. Deep Copy
let a = 10
let b = a
b=20;
console.log(a) // 10
console.log(b) // 20

let user1= {
    name : "shreyansh"

}
let user2=user1;
user2.name = "shrey" // yaha sirf useer2 me change hona chayiye but user1 me bhi ho jayega 
console.log(user1.name);
console.log(user2.name);

//shollow Copy : A shallow copy copies only first level ,nested objects still the share the same memmory

let emp1={
    name:"shreyansh",
    age : 25,
    salary: 20000,
    address: {
        city : "noida",
        pincode : 323322
    }
 }
//  let emp2 = emp1; // esse dono me change ho jata hai kyuki same object ko point kr raha 
//  emp2.salary = 30000; 
//  console.log(emp1);
//  console.log(emp2);


// shallow copy 
let emp2 = { ...emp1};

emp2.address.city = 'indore'

// console.log(emp1.address.city); // ye next level ka property isliye affect ho rha hai
// console.log(emp2.address.city);


let emp3 = {
    name : "ema",
    age: 30,

}
let copy = Object.assign({},emp3);
copy.name= "wana"
console.log(copy.name);
console.log(emp3)


//deep copy : - deep copy copies the everything ,including all nested object ans arrays

let emp4 = {
    name : "rohan",
    age : 34,
    address: {
        city : 'bhopal',
        pincode: 343534
    }
}
// structurClone() this fun is use for deep copy

let emp5 = structuredClone(emp4);

emp5.name="johan"
emp5.address.city="noida"


console.log(emp4.name);
console.log(emp5.name);
console.log(emp4.address.city);
console.log(emp5.address.city);
