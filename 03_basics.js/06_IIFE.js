// Immediately Invoked Function Expression
//Definition: A function that runs immediately after it's defined.

// 🤔 Why do we use IIFE?
// ✅ 1. Avoid polluting the global scope
//        Before ES6 modules, all code would share the same scope.

// IIFE helped create a private scope so variables don't leak out.

// ✅ 2. Encapsulation
// Helps keep code modular and self-contained.
// You can write a block of logic and not worry about variable name clashes.



(function db_connect(){
    console.log("Database Connected");
})();
//remember to end IIFE with semi colon, if using two IIFEs back to back!

(function aurcode(){
    console.log("Yoyo");
})();

( () => {
    console.log("Damn");
})();

( (name) => {
    console.log(`Welcome back to the game ${name}`);
})('Yatharth');

