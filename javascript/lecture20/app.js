function Student(name){
    this.name = name;
    // this.sayhello = function(){
    //     console.log("hell"+this.name);
    // }
}

// how to create prototype:

Student.prototype.test = "this is Proto"

Student.prototype.sayhello = function(){
 console.log("this is protomethod")
}

const s1 = new Student("john")
console.log(s1.test);
const s2 = new Student("bob");
console.log(s2.sayhello);
