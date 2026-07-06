function cal(x,y,operator){
  console.log(operator(x,y))
}
function add(a,b){
    return a+b;
}
function subt(a,b){
    return a-b;
}
function multi(a,b){
    return a*b;
}
function division(a,b){
    return a/b;
}
cal(3,5,add);
cal(3,5,subt);
cal(3,5,multi);
cal(3,6,division)