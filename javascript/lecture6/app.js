
//slice
let arr3 = [1,2,3,4,5,7,8];
console.log(arr3.slice(1,4));
console.log(arr3)
let hostel = ["ramu",'sohan',"john","satya"]
let hostel2= hostel.slice(1,3);
console.log(hostel);
console.log(hostel2)


// splice : original array Modify hoti hai;
// array_name.splice(start,deletecount ,item1 ,item2)
let num1 = [1,3,4,5,6,7,8];
num1.splice(1,3);
console.log(num1);
num1.splice(4,0,4,5)
console.log(num1);

let student =["amar","sagar","shakti","vivek","gaurav"];
console.log(student)
console.log(student.splice(2,3));
console.log(student)



// reverse Array

let arr = [1,2,3,4,5,6,5,5];
console.log("before: "+arr);
arr.reverse();
console.log("after: "+arr);

let multi = arr.map((r)=>(2*r))
console.log(multi);


// sort : 
arr.sort()
console.log(arr)

arr.sort((a,b)=>b-a)
console.log(arr)
 
let frontend = ["HTML","CSS","js"];
let backend =["Nodejs","expressjs"]
let fullstack = frontend.concat(backend)
console.log(fullstack)


//\
let employe =[
    {
        id : 101,
        name: "a",
        salary: 30000
    },
    {
        id : 102,
        name: "b",
        salary: 30000
    },
    {
        id : 103,
        name: "c",
        salary: 30000
    },
    {
        id : 104,
        name: "d",
        salary: 30000
    }
]

let names = employe.map((r)=>(
    r.name
))
console.log(names);

let marks = [10,30,30,47];
let result = marks.map((m => m*2));
console.log(result);

//internal work
for(let i=0;i<marks.length;i++){
    result.push(marks[i]*2);
}

//filter
let n = [2,2,35,5,65,67,788];
let even = n.filter(n=>n%2===0)
console.log(even)