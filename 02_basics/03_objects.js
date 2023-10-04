// singleton 
// Object.create

//object literals

const mySym = Symbol("key1")


const JsUser = {
    name:"Hitesh",
    "full name":"Hitesh ray",
    [mySym]:"myKey1",
    age:18,
    location:"Pune",
    email:"hitesh@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(typeof JsUser[mySym]);

JsUser.email = "hitesha@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesha@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello js user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello js user, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());




