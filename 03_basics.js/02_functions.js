//rest and spread operator 

//first let's see the problem

function calculateCartPrice(num1){
    return num1
}

console.log(calculateCartPrice(2000,500,400));

//returned only first argument 


//use rest and spread operator , below it is being used as rest operator
function calculateCartPrice2(...num1){
    return num1
}
//returned an array
console.log(calculateCartPrice2(2000,500,400));



//A case to be covered

function calculateCartPrice3(val1, val2, ...num1){
    return num1
}

console.log(calculateCartPrice3(2000,5000,7000,8000));
// val1 = 2000, val2 = 5000, num1 = [7000, 8000]



//Object as an argument to a function ->anyobject

const user = {
    name: "yatharth", 
    age: 21
}

function user_detail(anyobject){
    console.log(`Username is ${anyobject.name} and his age is ${anyobject.age}`);
}

user_detail(user)


// Array as an argument -> getArray

function get_second_value(getArray){
    console.log(getArray[1]);
}

get_second_value([1,2,3,4])