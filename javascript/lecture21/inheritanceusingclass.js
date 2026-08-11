class BankAccount{
    customerName;
    accountNumber;
    balance;
    constructor(customerName,balance){
        this.customerName=customerName;
        this.accountNumber=Date.now();
        this.balance=balance;
    }
   
    deposit(amount){
        this.balance+=amount;
    }
    withdraw(amount){
        this.balance-=amount;
    }

}

class CurrentAccount extends BankAccount{
    transitionLimit = 5000;
   constructor(customerName,balance,branch){
    super(customerName,balance)
    this.branch = branch;
   }
   takeBuisnessLoan(amount){
    console.log("taking bussiness Loan: "+amount);
   }
}
const raju = new CurrentAccount("raju",3000,"noida");
console.log(raju);
raju.takeBusinessLoan(10000);

class SavingAccount extends BankAccounrt{
    transitionLimit = 300000;
    constructor(customerName,balance,branch){
        super(customerName,balance); 
        this.branch=branch;
    }
    takePersonalLoan(amount){
        console.log("taking personal loan");
    }
}
const ramu = new SavingAccount("ramu",3000,"ranchi");
console.log(ramu);
ramu.takePersonalLoan(50000);

