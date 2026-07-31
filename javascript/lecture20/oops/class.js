// class BankAccount{
//     customerName;
//     accountNumber;
//     balance;
//     constructor(customerName,balance){
//         this.customerName=customerName;
//         this.accountNumber=Date.now();
//         this.balance=balance;
//     }
   
//     deposit(amount){
//         this.balance+=amount;
//     }
//     withdraw(amount){
//         this.balance-=amount;
//     }

// }
// const emma = new BankAccount("emma",1000);
// emma.deposit(300);
// emma.deposit(200)
// console.log(emma);


class car{
    carName;
    Model;
    color;
    constructor(carName,Model,color){
        this.Model=Model;
        this.carName=carName;
        this.color=color;
    }
    showDetail(){
        console.log(this.carName + this.color);
    }
}
const c1 = new car("maruti","67A","white");
c1.showDetail();