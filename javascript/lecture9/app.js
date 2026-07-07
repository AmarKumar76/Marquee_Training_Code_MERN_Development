let student ={
    name: "amar",
    id: 41,
    course: "btech",
    "full name": "amar kumar"
};
console.log(student);
console.log(student["full name"])
console.log(student["id"]);

let newid = "id";
console.log(student["newid"]);
console.log(student[newid]);
//console.log(newid)

// creating object using new keyword
let student1 = new Object();
student1.name  = "amar";
student1.city = "grd";
console.log(student1)


// for accessing 
console.log(student1.city);
console.log(student1["name"]);
console.log(student.course);

// add new properties or update 
 let laptop = {
    brand: "hp",
    price: 59000
 };

 // adding key and value in obj
//object_name.property_name = value;
laptop.color = "black";
laptop.RAM = 4;
laptop["storage"]=512;

console.log(laptop.color); 
console.log(laptop.RAM);
console.log(laptop.storage)

//Object.freeze(laptop); // freeze krne ke bad hm kuch add nhi kr skte hai

laptop.price=58000; //update krne ke liye if key not exist created new key
laptop.model = "HP51XWp" // add nhi hua object me

console.log(laptop);


delete laptop.brand // delete the property 
delete laptop["RAM"];
console.log(laptop)

let employee = {
    name : "john",
}

employee.salary = 56000
employee.id = 101

employee["age"] = 25;
employee["dep"]="cse";

 
console.log(employee)

//Object.freeze();
employee.height = 5.6

employee.age=27;

delete employee.id;
console.log(employee)

// optional chaining(?.) is use  to safely access 
//properties of method of an object.

// it prevents your program from crashing when a properties
// does not exist.

const user = {
    name : "shreyansh",
    // address: {
    //     city : "delhi",
    //     pincode: "825643"
    // }
}
console.log(user)
console.log(user.address)
console.log(user.address?.city) // eska use isliye krte jab object k
// e andar  object  ka properties exist nhi krega to 
// error dega usko prevent krne ke liye use krte hai
//console.log(user.address.city) //error dega esse se prevent ke lie 
//use krte hai or aage program crash ho jayegi


function printbag(name,capacity,color,price){
    return {
         name, // name: name,
        capacity:capacity,
        color: color,
        price
    }
}


// 

let bag = printbag("Safari","35L","black",1000);
console.log(bag)

// OBJECT KE KEY KO HM KEYWORD KO BHI BNA SKTE
obj1 = {
    for: 1,
    let: 3,
    const: 3,
    return: 4
}
console.log(obj1)


// Symbol data type

let id = Symbol("id")

let user1 = {
    name: "bob",
    [id] : 101
}
console.log(typeof(user1.id))
console.log(user1)