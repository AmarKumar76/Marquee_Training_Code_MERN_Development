let str1  ="amar"
let str2 = new String("abc");
let str3 = 'parul university'
let str4 = `collage's`
console.log(str4)
console.log(str3)
console.log(str2)
console.log(str1)

let name = "amar"
let age = 100
let course = "btech"
console.log("welcome "+name + " my age "+age+ " my course is "+course) // concat of string

console.log(`welcome ${name} my age is ${age} my course is ${course}`); // template literal

let empty = "";
let empty2 = '';
let multiline =`Lorem ipsum dolor sit amet consectetur adipisicing elit. 
Exercitationem accusamus doloremque nesciunt magnam provident minima impedit 
fugiat sequi voluptate, asperiores nobis vero, quae dicta! Harum beatae ipsa 
cumque voluptatem commodi.`
console.log(multiline)

//escape character
let welcome = "welcome to 'parul' university"
let welcomes = 'welcome to "parul" university'
let welcome1 = `welcome to "parul" university 'vadodara'`
let welcome2 = `welcome to \"parul\" university`
console.log(welcome)
console.log(welcomes)
console.log(welcome1)
console.log(welcome2)

//Methods
let username = "Shreyansh"
let surname = "Sahu"


console.log(username.length);
console.log(username + " " +surname) //concat
console.log(username.charAt(3));  // charAt

// indexOf()
console.log(username.indexOf("e"));


//substring
// we can't include negative index
console.log(username.substring(0,4));


//slice
console.log(username.slice(0,5))
console.log(username.slice(-5,-1))
console.log(username.includes('sh'))

//trim
let fullname = " amar kumar "
console.log(fullname.trim())

//replace 
const url = "amar kumar"
console.log(url.replace("amar","sagar"))

// split
let intro = "Amar Kumar verma from giridih Jharkhand"
let arr = intro.split(" ")
console.log(arr);
console.log(intro.split(' '))

//tolowecase
console.log(intro.toLowerCase())
console.log(intro.toUpperCase())
console.log(intro.toLocaleUpperCase())

let s= "7";
let p = "7"+1;
console.log(typeof(p));