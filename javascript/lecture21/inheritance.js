/*
Person
name
age


student
id

Teacher
salary
*/

//Inheritance means one class use the properties and method of another class

function BankAccount(customerName,balance){
    this.customerName = customerName
    this.accountNumber = Date.now();
    this.balance =balance;
}

BankAccount.prototype.deposit = function(amount){
     this.balance+=amount;
}

BankAccount.prototype.withdraw = function(amount){
     this.balance-=amount;
}


function CurrentAccount(customerName,balance){
    // this.customerName = customerName
    // this.accountNumber = Date.now();
    // this.balance =balance;
    BankAccount.call(this,customerName,balance)
    this.transitionLimit = 50000;

    // this.takeBusinessLoan = function(amount){
    //     console.log("loan of: " +amount);
    // }
}
 CurrentAccount.prototype.takeBusinessLoan = function(amount){
        console.log("loan of: " +amount);
    }

const raju = new CurrentAccount("raju",1000);
console.log(raju);
raju.takeBusinessLoan(100000);

const shayam= new CurrentAccount("shayam",1000);
console.log(shayam);
raju.takeBusinessLoan(100000);

function SavingAccount(customerName,balance){
    // this.customerName = customerName
    // this.accountNumber = Date.now();
    // this.balance =balance;
    BankAccount.call(this,customerName,balance)
    this.transitionLimit = 10000;
}

 SavingAccount.prototype.takePersonalLoan = function(amount){
        console.log("loan of: " +amount);
    }


const ramu = SavingAccount("ramu",2000)
console.log(ramu);
ramu.takePersonalLoan(10000);