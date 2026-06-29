//data type in javascript
// data type : what kind of value store in variable;
//type of datatype:-
    //1. premitive:- //immuttable
            //number
            //bigint
            //string;
            //


    // 2. reference // objects:
    //

let a = 30;
console.log(typeof(a));
var b = 30;
console.log(typeof(b));
const c =60;
console.log(typeof(c))

var d = 23.5;
console.log(typeof(d));

var e = "amar"
console.log(typeof(e));

var f;
console.log(typeof(f));

var g = null;
console.log(typeof(g));

var k = false;
console.log(typeof(k))

const std ={
    name: "amar",
    roll_no: 24
}
console.log(typeof(std));
console.log(std.instanceof);

let arr = [1,3,3]
console.log(arr[2])
let num = arr;
num.pop();
console.log(arr);
console.log(num);

console.log("5"+1);///concat
console.log(5+1)

console.log(Number.MAX_SAFE_INTEGER);
let n =Number.MAX_SAFE_INTEGER;
 n +=300059;
console.log(n)
console.log(typeof(n))
console.log(BigInt.MAX_SAFE_INTEGER);


//operator : operator is a symbol that perform the operation between variable;
/*
    arthimetic
    assignment
    logical
    relatinal/comparison
    bitwise
    ternary
    unary


// == it only compare the value;
// === it compares the value and datatype
*/


let y = 2024;
if(y%4==0){
    if(y%100==0 && y%400==0){
        console.log("leafyear");
    }else{
        console.log("not leaf year");
    }
}else{
    console.log(" not leaf year");
}
let p = prompt("enter a number");
console.log(p);
