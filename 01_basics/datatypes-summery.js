//primitive datatype 

// 7 type : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null;
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 2343368466878576n



//Reference (non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name:"hitesh",
    age:22,
}

const myFunction = function (){
  console.log("Hello world");
}

console.log(typeof anotherId);


//++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-primitive) 
// 1. all primitive datatypes are stored in Stack Memory
//2. all non-primitives datatypes are storerd in Heap Memory


let myYoutubeName = "hiteshdotcom"

let anotherName = myYoutubeName
anotherName = "chaiaurcode"

console.log(myYoutubeName);
console.log(anotherName);

let userOne={
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne 

userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);



