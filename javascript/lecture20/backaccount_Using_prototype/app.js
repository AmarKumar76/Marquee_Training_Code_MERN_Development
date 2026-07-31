
function BankAccount(customerName,balance){
    this.customerName = customerName
    this.accountNumber = Date.now();
    this.balance =balance

    // this.deposit = function(amount){
    //     this.balance+=amount;
    // }
    // this.withdraw = function(amount){
    //     this.balance -= amount;
    // }
}

BankAccount.prototype.deposit = function(amount){
     this.balance+=amount;
}

BankAccount.prototype.withdraw = function(amount){
     this.balance-=amount;
}




const accounts = [];
const accountForm = document.getElementById("accountForm")
const customerName = document.querySelector("#customerName")
const balance = document.querySelector("#balance")

accountForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const acc = new BankAccount(customerName.value,+balance.value)
    accounts.push(acc)
    console.log(accounts)
})


const depositForm = document.querySelector("#depositForm");
const depositAmount = document.querySelector("#depositAmount");
const depositAccNum = document.querySelector("#depositAccNum");

depositForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const account = accounts.find(
    (account) => account.accountNumber === Number(depositAccNum.value)
  );

  account.deposit(Number(depositAmount.value));
  console.log(account);
});

const withdrawForm = document.querySelector("#withdrawForm");
const withdrawAmount = document.querySelector("#withdrawAmount");
const withdrawAccNum = document.querySelector("#withdrawAccNum");

withdrawForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const account = accounts.find(
    (account) => account.accountNumber === Number(withdrawAccNum.value)
  );

  account.withdraw(Number(withdrawAmount.value));
  console.log(account);
});