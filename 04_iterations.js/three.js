//Iterating objects using For-in loop
const obj = {
    js: "Java-Script", 
    cpp: "C++", 
    py: "Python",
    rb: "Ruby",
    swift: "Swift by apple"
}

for(const key in obj){
    console.log(key);
    console.log(obj[key]);
}

// using for in loop for arrays

const arr1 = ['hello', 'how', 'are', 'you', 'doing']

for(const key in arr1){
    console.log(key);            // 0,1,2,3,4
    console.log(arr1[key]);
}