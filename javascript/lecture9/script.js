let employee = {
    name : "john",
    field: "teaching"
}

employee.salary = 56000
employee.id = 101

employee["age"] = 25;
employee["dept"]="cse";

 
console.log(employee)

//Object.freeze();
employee.height = 5.6

employee.age=27;

delete employee.id;
console.log(employee)