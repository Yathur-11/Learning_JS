//primitive -> 7 types (by default, sent by value) 
//String, Number(int & float, both), Boolean, null, undefined, Symbol, BigInt

//non-primitve (These are sent by reference in js, unlike c++/c , where they were passed by value)
//array, objects, functions

//JS is dynamically typed language i.e We don't need to mention the data type of any variable,it is decided at runtime , unlike
//C++/C, which is statically typed

let user = undefined
let c_user;

//both above are undefined

const id = Symbol('Yath')
const id2 = Symbol('Yath')

console.log(id===id2)

//Symbol creates unqiue symbols even tho value is same for both the symbols

let myObj = {
    name:"Yatharth",
    degree:"B.E"
}

//creates an object

const myFunc = function(){
    console.log("hello world")
}


//null is an object in js
let age = null
console.log(typeof age)


//++++++++++++++++++++++++ Stack & Heap Memory ++++++++++++++++++++++++++++++++

//Stack(for primitive data types-pass by value) and Heap(for non-primitive data types-pass by reference)