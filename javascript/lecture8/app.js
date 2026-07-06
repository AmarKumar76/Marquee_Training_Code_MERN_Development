let arr = [2,4,5,5,6]

let bikes = ["a","b","c","d"];
let fb = bikes[0];
let sb = bikes[0];
let tb = bikes[0];

console.log(fb);
console.log(sb);
console.log(tb);

let[fbs,sbs,tbs]=bikes;
console.log(fbs);
console.log(sbs);
console.log(tbs);

let [a,,c]=bikes;
console.log(a);
console.log(c)

let arr5= [10,20,30,40,50];
let [d,e,...rest1]=arr5;
console.log(d);
console.log(e);
console.log(rest1)


 let prices = [300 ,400, 550, 600, 650];
 let total = prices.reduce((acc ,e)=> acc +e ,0);
 console.log(total);



 // object:  Object ek collection hota hai key-value pairs ka.
 const student ={
 name: "amar",
 id : 12,
course: "btech"
}
//for access
//student.id  // for static key
//student[id] // dynamic key
console.log(student);
console.log(student.id);
console.log(student["name"]);



