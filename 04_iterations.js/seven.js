// Reduce function 

const nums = [1,2,3,4,5]

const sum = nums.reduce((acc,curr_val)=>{
    return acc+curr_val
},0)

console.log(sum)