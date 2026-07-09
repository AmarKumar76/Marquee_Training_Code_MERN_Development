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
 