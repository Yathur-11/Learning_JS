// two ways to declare objects <- ek hai literal ki tarah , ek hai constructor ki tarah
 
//singleton <- jab constructor ke thrpugh banate hain, singleton object is formed, apne tareeke ka ek hi object
// Object.create

//other way (literal ki tarah), uske multiple instances bante hain
// const obj1 = {}

// ⚠️ Difference from Arrays:

// Arrays store data by numeric index.
// Objects store data by named keys.

const obj1 = {
    name: "Yatharth",
    age: 21,
    email: "ysaluja_be22@thapar.edu",
    last_present: ["Monday","Friday"],
    "atten dance":true
}

console.log(obj1.name);
//console.log(obj1[name]); <- gives error, BTS, all keys in object are stored in form of strings
console.log(obj1["age"]);

obj1.age = 22
console.log(obj1["age"]);

//you can freeze the changes using freeze
Object.freeze(obj1);


//Q)  Take a symbol and add it to the object

const mySym = Symbol("key1")

//😵wrong way

// const obj2 = {
//     mySym: "value1"
// }

// console.log(obj2.mySym);
// console.log(typeof obj2.mySym);
// not a symbol anymore, turned into a string

const obj2 = {
        [mySym]: "value1"
    }
    
console.log(obj2[mySym]);
console.log(typeof obj2);





//you can also add functions to an object

const obj3 = {
    name:"yatharth",
    age: 21,
    greetings: function(){
        console.log("hello kiddo");
    }
}

obj3.greetings_two = function(){
    console.log(`hello , how are you ${this.name}`);
}

obj3.greetings_two()
