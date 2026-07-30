//window obj
console.log(this)

//window object (non strict mode)
function abc(){
    console.log(this)
}
abc()


// strict mode removes the default window binding
"use strict"
function xyz(){
    console.log(this)
}
xyz();

const student ={
name: "amar",
showName : function(){
console.log(this)
}
}
student.showName();

function showCity(){
    console.log(this.city)
}
const u1 = {
    city:"noida",
    showCity ,
    show : ()=>{
        console.log(this); // yaha window object aayega arrow function this ko nhi use krte 
    }
}
u1.show();
const u2 = {
    city : "vadodara",
    showCity
}
u1.showCity() // noida
u2.showCity() // vadodara

const u3 = {
    name : "Amar",
    address :{
        city: "surat",
        showCity(){
            console.log(this.city);
        }
    }
}
u3.address.showCity()


// { <button id="btn"></button>}

// const btn = document.getElementById("btn")
// btn.addEventListener("click",function(){
//     console.log(this)
// })

// this yaha new object ko point krta hai
function employee(name){
    this.name = name
}


const e1 = new employee("john")
console.log(e1)

const e2 = new employee("bob")
console.log(e2)


const user ={
    fName : "AMAr",
    lName : "verma",
    printFullName: function(){
        console.log(this)
    }
}
user.printFullName()
const printname = user.printFullName
printnamee()


//globally this -> window object milega
// function ko normally call -> window object dega
// object ke andr object hai ->object dega
//object -> normal function ->window object milega
