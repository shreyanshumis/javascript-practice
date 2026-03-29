//Js is a dynamically typed language

//Primitives Types - they're call by value

//7 Types: String, Number, Bool, null, undefined, Symbol, BigInt

const score =  100
// const score:number =100 <- typescript syntax(for type safety)
const scoreValue =  100.3

const isLoggedIn = false
const outsideTemp = null //null is not 0, it is empty
let userEmail; //this will be assigned undefined
// let userEmail = undefined //this also works

const id = Symbol('123') //symbols
const newId = Symbol('123')
//their value will be different despite them looking the same. the return value is different

const bigNumber = 12343249328493n //n denotes bigint

//-----------

//Reference Types(Non Primitives) - call by reference

//Arrays, Objects, Functions
const heroes = ["Hero1", "Hero2", "Hero3"]//array

let myObj = {
    name: "shrey",
    age: 21,
} //object

const myFunc = function(){
    console.log("Hello world");
} //function -> returns function object

//---------MEMORY----------
//2 types - stack and heap

//Primitive type - uses Stack memory(call by value)
//Non Primitive type - uses heap memory(call by reference)

//Call by Value :-
let myName = "shrey"
let newName = myName
console.log(newName);
newName = "anshu"
//newName's value changed but myName's didn't, why? 
//cuz it's copy was given to newName and not the reference itself.

//Call by Reference :-
let user = {
    email:"user@hey.com",
    upi: "user@payhey"
}

console.log(user);

let user2 = user
//This time you're getting the reference NOT the copy of the same
// the value in the original will change if u make changes in the 2nd one(user2)

user2.email = "anshu@hey.com"
//printing after modification
console.log(user);
console.log(user2);
