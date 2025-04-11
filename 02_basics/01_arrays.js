// const my_arr = [1,2,3,4,5,"HHH",11]

// const my_arr2 = new Array(1,2,3,4,5,"HHH")

//small catch that lies between both __ new Array(5) will produce empty array of size 5

//push into array
// my_arr.push(10)
// console.log(my_arr);
// my_arr.pop();
// console.log(my_arr);



// console.log(my_arr.includes(10));
// console.log(my_arr.indexOf(3))

//to convert array into a string 

// const str1 = my_arr.join()
// console.log(str1);
// console.log(typeof str1);

let arr1 = [1,2,3,4,5]
let sliced_arr = arr1.slice(1,3)
console.log(sliced_arr);
console.log(arr1);

//no change in the original array and last index is not taken<- slice

let arr2 = [1,2,3,4,5]
let spliced_arr = arr2.splice(1,3)
console.log(spliced_arr);
console.log(arr2);

// change in original array and last index is also taken <- splice 🔪













