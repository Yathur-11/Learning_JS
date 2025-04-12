const marvel = ["Spiderman", "Thor", "IronMan"]
const DC = ["Superman", "Batman", "Joker"]

// marvel.push(DC)
// console.log(marvel);
// console.log(marvel.length);

//it pushed the complete DC array to marvel array

//to concatenate , use this , !remember -> concat doesn't change the original array, it returns a new array instead

const combo = marvel.concat(DC)
console.log(combo);

//but, there's a limitation that only one array can be combined with other, in order to combine more, use SPREAD
 
const combo2 = [...marvel, ...DC]
console.log(combo2);


//below array contains a lot of sub arrays, in order to make it a single FLAT array
//you also need to pass depth to which flattening should be done 
const new_array = [1,2,3,[4,5],6,[7,[8,9]]]
const flatten_array = new_array.flat(Infinity)
console.log(flatten_array);


//convert into array

const arr_from_non_arr = Array.from("yatharth")
console.log(arr_from_non_arr);

