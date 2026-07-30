// constructor function 

// A CF is a special func used to create multiple object with the same structure 

// construtor function = bluprint of house

// why we need CF

const e1 = {
    name: "abc",
    age : 40,
    city : "delhi"
}
const e2 = {
    name: "bcd",
    age : 42,
    city : "bokaro"
}
const e3 = {
    name: "ef",
    age : 43,
    city : "surat"
}
const e4 = {
    name: "ag",
    age : 34,
    city : "kota"
}

// esa kuch bna de {
//name
//city
// age
//}

// 
// normal function
function Student(name){
    let name = name
}
student("amar")

// agr hm normal function bna rha hu to hm func name hai uska alpha small hoga
function Person(name ,age){
     this.username = name
     this.age = age;

}

const p1 = new Person("amar", 23)
const p2 = new Person("sagr", 20)
const p3 = new Person("amar", 34)
const p4 = new Person("amar", 33)

function Employee(name,age,salary,skill){
    this.name = name
    this.age = age
    this.salary = salary
    this.skill = skill
}
// new ak empty object bna deta hai 
// this empty object ko point krta hai
//step 3 -> Constructor function execute hoga

const e1 = new Employee("shakti",32,340000,"java");
const e1 = new Employee("amar",22,3340,"python");
const e1 = new Employee("munna",62,34000,"hmtl,css");

//yaisa bn jayega
//step 4
// {
// name :shakti
// age : 34
// salary : 340000
// skill : "java"
// }

// step 5

//  e1 = {
// name :shakti
// age : 34
// salary : 340000
// skill : "java"
// }

function BankAccount(customerName,balance){
    this.customerName = customerName
    this.accountNumber = Date.now();
    this.balance =balance

    this.deposit = function(amount){
        this.balance+=amount;
    }
    this.withdraw = function(amount){
        this.balance -= amount;
    }
}
const ramkumar = new BankAccount("ramKumar",1100)
const rakesh = new BankAccount("rakesh",1700)
rakesh.balance = 1500
rakesh.deposit(1000);
ramkumar.withdraw(100);
console.log(ramkumar,rakesh);



