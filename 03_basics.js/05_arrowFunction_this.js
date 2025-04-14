username = "rtami"
const user = {
    username: "Yatharth",
    age: 21,

    welcomeMssg: function(){
        console.log(`${username}, welcome to the website`);
    }
}

user.welcomeMssg()

// Inside the welcomeMssg function, you're just writing username (without this.), so JavaScript:
// Looks for username inside the function's local scope → ❌ Not found
// Then looks in the outer scope (global) → ✅ Finds username = "rtami"
// It never looks inside the object (user.username) automatically, unless you explicitly reference it using this.username.

const user2 = {
    username: "Yatharth",
    age: 21,

    welcomeMssg: function(){
        console.log(`${this.username}, Welcome to the website`);
    }
}

user2.welcomeMssg()
user2.username = "Hitesh"
user2.welcomeMssg()



console.log(this); 
// shows {} in node environment, but Window in search engine , because global object is windows there

// Here, you're in the module scope, not the global scope.
// In Node.js, the top-level this inside a module is not the global object.
// Instead, it's an empty object {} because Node wraps your code in a module wrapper function behind the scenes:

// In the browser, the top-level scope is the global scope.
// And in the browser, the global object is window.
// So here, this points to window.



//Can't use this inside function  
function chai(){
    const username4 = "Poppy"
    console.log(this.username4);
}

chai()


//Arrow Function 

const chai2 = () => {
    console.log("hello");
}
chai2()


//Implicit Run
const add = (num1, num2) => num1+num2

console.log(add(4,5))


//Return an object from arrow function 

const obj_ret = () => ({name: "Polly"})
console.log(obj_ret())