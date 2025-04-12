// singleton objects, that are made using cosntructors
// const user = new Object()

// These are just similar to the one declared using literals, the only difference is singleton or not 

const user = {}

user.id = "12XA5"
user.name = "Yatharth"
user.isLoggedIn = true;

const reg_user = {
    email: "Yatharthsa365@gmail.com",

    fullname: {
        userfullname: {
            first_name: "Yatharth",
            last_name: "Saluja"
        }
    }
}

console.log(reg_user.fullname.userfullname.first_name);


// concat objects 

const first_user = {
    a:"1",
    b:"2"
}

const second_user = {
    c: "3",
    d: "4"
}

//first way 

const third_user = Object.assign({}, first_user, second_user);
console.log(third_user);
 
//another way

const another_user = {...first_user, ...second_user}
console.log(another_user);



// get all the keys from an object, returns all the keys in form of array

console.log(Object.keys(first_user));
 