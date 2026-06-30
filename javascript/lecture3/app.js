for(let i = 2;i<=2*10;i+=2){
    console.log(i);
}
let i = 1;
let sum =0;
while(i<25){
    sum+=i;
    i++;
}
console.log(sum);

let k = 89
do{
 console.log(k);
 k++;
}
while(k<24);
   console.log(k);

console.log(add(6,10));
function add(a ,b){
    return a+b;
}

/*
function : function is block of code that  perform  the specific task;

*/
//5 callback function: a function passed as an argument to another function;
function welcome(){
    console.log("welcome");
}
function execute(callback){
    callback()
}
execute(welcome)

//6. Immediately Invoked function(IIFE)
//invoke : function call krna
//runs immediately after created 
// syntax:
(function(){
    code
})();
(function(){
    console.log("type of function")
})();