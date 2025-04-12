// Destructuring objects !! IMPORTANT ONE

const course = {
    Instructor_name: "Striver",
    subject: "DSA",
    topic: "Arrays"
}

//detrcuture it , you can do both ways, either give it a short name or use it as it is 
const {Instructor_name:name} = course
const {subject} = course
console.log(name);
console.log(subject);


