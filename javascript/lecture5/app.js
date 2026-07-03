/// array in js

//method 1
let arr =[20,30,40]
console.log(arr)

//method 2
let arr2 = new Array(70,80,90)
console.log(arr2)

//Array can store anything 
//such that number,string ,null, undefined,object ,array ,boolean

let detail = [
    301103,'amar',true,undefined,null,{
        city: "indore"
    },
    [1,3,3]
]
console.log(detail)


let fruits = ["aam","papita","kiwi","chiku","santra"]
console.log(fruits);
console.log(fruits[2]);
console.log(fruits[4]);
console.log(fruits[9]); // undefined reason index exits nhi krti hai
console.log(fruits.length);


fruits[2]= "orange"
console.log(fruits);


let bike = ["hunter","bullet","KTM","Ninja"];
for(let i=0;i<bike.length;i++){
    console.log(bike[i]);

}

for(let val of bike){ // ye sirf value access kr pata hai
    console.log(val);
}

let num = [10,20,30];
num.push(40);
console.log(num);
num.pop()
console.log(num)
num.shift(); // remove the first element of arr
console.log(num)
num.unshift(24);
console.log(num)





const std ={
    name: "amar",
    roll_no: 34
}
console.log(std);
