//map do returns the values

const nums = [1,2,3,4,5,6]

// #1 way to write
const newNums = nums.map((num) => {
    return num+10
})

// #2 way to write
const newNums2 = nums.map((num)=> num+10)


console.log(newNums)
console.log(newNums2)


// Chaining , map.map.map..... , map.filter..... map.filter.map.filter........ any 

const numbers = [1,2,3,4,5,6]

const new_values = numbers
                    .map((num)=>num*10)   // values from this map will be transferred to next map
                    .map((num)=>num+1)    // values from prev map will be transformed

console.log(new_values);


// use of both map and filter 

const users = [
    { name: "yatharth", age: 20},
    { name: "sara", age: 15},
    { name: "tom", age: 54}
]

const above_18 = users
    .filter((user)=>{ return user.age>18})
    .map((user)=>{return user.name})
                    

console.log(above_18);
