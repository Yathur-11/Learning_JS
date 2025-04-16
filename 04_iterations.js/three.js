//Iterating objects using For-in loop
const obj = {
    js: "Java-Script", 
    cpp: "C++", 
    py: "Python",
    rb: "Ruby",
    swift: "Swift by apple"
}

// for(const key in obj){
//     console.log(key);
//     console.log(obj[key]);
// }

// using for in loop for arrays

const arr1 = ['hello', 'how', 'are', 'you', 'doing']

// for(const key in arr1){
//     console.log(key);            // 0,1,2,3,4
//     console.log(arr1[key]);
// }

const map = new Map()

map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")
map.set('IR', "Ireland")

for(const key in map){
    console.log(key)      //no output, because maps are not iterable and if something is not iterable , then we can't write it in this way of loops
}