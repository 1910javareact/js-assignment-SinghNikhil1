/* 10 Object Creation
Create an object using an object literal, constructor function, and es6 class.
The object should have the fields name and age.*/

let user = {
    name : "Nikhil" ,
    age : 22,
}
function userFunction(name, age){
    this.name=name 
    this.age=age
}
let user1 = new userFunction("Nikhil", 22)
class userClass{
    constructor(name, age){
    this.name=name
    this.age
}
}
let user2 = new userClass("Nikhil", 22)
console.log(user);
console.log(user1);
console.log(user2);



