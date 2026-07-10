let student1 = {
    name: "amar",
    age : 20
}

student2 = student1
student2.name = "sagar"
console.log(student1);
console.log(student2);

// both object name property changed because object1 are created in heap 
//and object to point object1 and did not created new object


let emp = {
    name : "shrey",
    depart: "cse"
}

let emp2 = {...emp}
emp2.depart = "electrical";

console.log(emp);
console.log(emp2);

// the original object did  or did not change because using spread operator 
//copy the first level property  
// spread operator new object me sare first level property ko copy kr de rha hai

//
let user = {
    name : "a",
    address: {
        city : 'giridih',
        pincode: 815301
        }
}
  
 let user2 = {...user};
 user2.address.city = "hazaribagh"
  console.log(user);
  console.log(user2);

  //object show the same city because spread operator only copy first level property


  let user3 = structuredClone(user)
  user3.address.pincode= 815312;

  console.log(user)
  console.log(user3)

  // here use deep operator so that copy all level property of object hence changed the address




  let bankaccount = {
    accountholder : "abc",
    balance : 358304,
   deposit: function(amount){
      this.balance = this.balance+amount;
    },
    withdraw: function(amount){
    this.balance = this.balance-amount;
  }
}
bankaccount.deposit(500);
console.log(bankaccount.balance);
bankaccount.withdraw(500);
console.log(bankaccount.balance)