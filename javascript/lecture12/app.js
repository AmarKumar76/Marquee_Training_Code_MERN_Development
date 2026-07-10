 //hoisting
 console.log(name);
 var name = "shreyansh";
 console.log(name);
 
 // Hoisting :- JavaScript moves declarations to the top of their scope before executing the code. This behavior is called hoisting.
 

 //  console.log(name); // it give name cannot access
 //  let name = "Amar";
 // console.log(name);

//TDZ: = temporary dead zone;
// console.log(age);
// let age = 100;
// console.log(age);

//
// Hi()

// var hi = function (){
//     console.log("hello")
// }

// Hi()

// let hi = function (){
//     console.log("hello")
// }

let user1 = {
    name: "bob",
    greet: function(){
        //console.log("hello " + user1.name)  
        console.log("hello " + this.name);
    }
}
let user2 = {
    name: "JOHN",
    // greet: function(){
    //     console.log("hello " + user2.name)
    // }
    //instead of above function copy
    greet: user1.greet
}
user1.greet();
user2.greet();


// Object destructring 
 let book ={
     name: "Do and die",
     author: "shreyansh",
     update: "upcoming"
 }
 const bookname = book.name
 const bookauthor = book.author

 let{name1, author,update }=book
 console.log(name);
 console.log(author);
 console.log(update);
