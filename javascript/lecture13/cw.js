let emp = {
    name: "amar",
    age : 24,
    id : 102
}
let {name: emp_name , age:emp_age, id:emp_id}=emp;
console.log(emp_name);
console.log(emp_age);
console.log(emp_id);


let obj = {
    name : "amar",
    course: "btech",
    id: 234
}

let jsondata = JSON.stringify(obj);  // object to json
console.log(jsondata);

let objdata = JSON.parse(jsondata);
console.log(objdata);

// closure : inner function ko outer function execution ke bad hm access kr skte hai
function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log(count);
  }

  return inner;
}

const counter = outer();

counter(); // 1
counter(); // 2
counter(); // 3

// call method 
//syntax : call(object,agrs1,args2)
const u1 = {
    name: "amar",
    welcome(city,age){
        console.log(city);
        console.log(age);
        console.log("hello "+ this.name);
    }
}
 u1.welcome("indore",100)

const u2 ={
    name:"am",

}
u1.welcome.call(u2,'vadodara',42);


// apply : 
//syntax: apply(object, [args1,args,...]) // pass argument in array format

u1.welcome.apply(u2,["noida",34]);

// bind function : return a function
//syntax:
// newfunction(arg1,args2) = object.method.bind(object)

//let newwelcome("delhi",23) = u1.welcome(u2);