//In JS, function declarations are "hoisted" to the top of their scope during the compilation phase.

// console.log(addOne(10)); WORKS FINE 

function addOne(num){
    return num+1;
}

// console.log(addTwo(10)); GIVES ERROR 
//This fails because this is a function expression, not a declaration.

const addTwo = function(num){
    return num+2
}