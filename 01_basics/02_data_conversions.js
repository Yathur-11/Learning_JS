let score = "21"
console.log(typeof score)
let val = Number(score)
console.log(typeof val)

let val2 = "sa"
console.log(typeof val2)
let b_val = Boolean(val2)
console.log(b_val)



// JS can convert any numeric/non numeric value into a number, for non numeric values, conversion to number (using let val = Number(score)) will return Nan.
// If Score was originally null, conversion will return 0, undefined will return Nan after conversion to number.

// "33" => 33
// "33abc" => Nan
// undefined => Nan
// null => 0
// true => 1

// *Conversion using Boolean
//     let val = 0
//     let bool_val = Boolean(val)   <- will return false
    
//     let val2 = "yatharth" <- converting this to Boolean will return 1
//     let val3 = "" <- converting this to Boolean will return 0 


//not recommended to write in this form - 34,35
console.log("1" + 2)
console.log("1" + "2")
console.log(1 + "2")
console.log("1" + 2 + 2)
console.log(1 + 1 + "2")

x = 5;
let b = x++; // Post-increment
console.log("b =", b); // 5
console.log("x after x++ =", x); // 6