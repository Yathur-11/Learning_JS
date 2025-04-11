let my_date = new Date()

console.log(my_date.toString());
console.log(my_date.toDateString());
console.log(my_date.toLocaleString());

console.log(typeof my_date);


let exam_date = new Date(2025,0,2);
console.log(exam_date.toDateString());

let new_date = new Date("2025-01-15")
console.log(new_date.toDateString());


//Date.now() gives you time in milliseconds till current time starting from some pre defined date of 1970
let my_timeStamp = Date.now()

console.log(my_timeStamp);

//convert mili-sec to second
console.log(Math.floor(Date.now()/1000));


