//symbol()

let token = Symbol("token of bankAccount");
const BankAccount={
    name: "HDFC",
    [token]: "hdfccax13",
    //token : "hdfccax13"
}
console.log(BankAccount.token)
console.log(BankAccount);

// nullish colescing operator :- 
//synTAX:
//lt result = value ?? defaultValue;

let city =null;
console.log(city ?? "CITY NOT ABAILABLE")
city = "grd"
console.log(city ?? "CITY NOT ABAILABLE")

//let result = value ?? defaultValue;
// It means:
// If value is not null or undefined → return value.
// Otherwise → return defaultValue.

let name = null;

console.log(name ?? "Amar");

// object method
console.log(Object.keys (BankAccount))
console.log(Object.values (BankAccount))
console.log(Object.entries (BankAccount))
console.log(Object.getOwnPropertySymbols (BankAccount))
console.log(BankAccount)

for(let k in BankAccount){
    console.log(k ,BankAccount[k]);
}

let student ={
    name : "amar",
    id : 34,
    age: 19,
    cgpa : 8.9
}
for(let k in student){
    console.log(k,student[k]);
}

//spread operator
//he Spread Operator (...) copies all enumerable properties
//  from one object into another object.
/*Spread Operator (...) and Rest Operator (...) in JavaScript

Both use the same syntax (...), but their purpose is different.

Spread (...) → Expands (spreads) elements.
Rest (...) → Collects (gathers) elements.*/
//
//
//rest operator
let num1 = [1,3,4,5];
let [a,b, ...rest] = num1;
console.log(a);
console.log(rest);



//spread operator
let arr1 = [1, 2,7];
let arr2 = [3, 4,9];

let arr3 = [...arr1, ...arr2];

console.log(arr3);

let num = [1,3,4,5,6,6];



