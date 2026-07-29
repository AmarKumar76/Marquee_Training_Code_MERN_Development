// classList.add() -> Add
// classList.remove() -> Remove
// classList.toggle() -> Add if not present, remove if present
// classList.contains() -> Check if present
// classList.replace() -> Replace a class with another class

const box = document.querySelector(".box");
const add = document.querySelector(".add");
const remove = document.querySelector(".remove");
const toggle = document.querySelector(".toggle");
const replace = document.querySelector(".replace");
const contains = document.querySelector(".contains");

add.addEventListener("click", function () {
  box.classList.add("red");
});

remove.addEventListener("click", function () {
  box.classList.remove("red");
});

toggle.addEventListener("click", function () {
  box.classList.toggle("circle");
});

replace.addEventListener("click", function () {
  box.classList.replace("circle", "red");
});

contains.addEventListener("click", function () {
  console.log(box.classList.contains("red"));
});

// function xyz(){
//   console.log(this);
// }

// xyz(); // returns window object

// const User = {
//   name: "John",
//   printname: function(){
//     console.log(this.name);
//   }
// };

// User.printname(); // returns John

// function Student(name, age){
//   this.name = name;
//   this.age = age;
// }

// const s1 = new Student("John", 20);
// console.log(s1.name); // returns John
// console.log(s1.age); // returns 20

// razorpay - 30-35lpa
// paypal - 30-35lpa
// servicenow - 45lpa
// microsoft - 60-65lpa
