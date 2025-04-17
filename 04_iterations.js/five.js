//Lesson of the day :- forEach loop doesn't return any values !

const coding  = ["C++", "JS", "React", "Ruby"]

const values = coding.forEach((item)=>{
    //console.log(item);
    return item
})

console.log(values);

// We can use filter , it returns values based on the condition written

const nums = [1,2,3,4,5,6]
const newNums = nums.filter((num)=>num>4)  

const newNums2 = nums.filter((num)=>{        // With curly brackets, you've to write return explicitly, or else you can follow above method
    return num>4
}) 
console.log(newNums2)

//using forEach loop, doesn't return tho, but we can push elements based on condition

const values2 = []

nums.forEach((num) => {
    if(num>3)
    values2.push(num)
})

console.log(values2);


