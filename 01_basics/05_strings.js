const name = "Yatharth"
const age = 21


console.log(name + " is " + age + " years old");
console.log(`Hello, my name is ${name} and I am ${age} years old`)


const gameName = new String('Contra Strike')
console.log(gameName);

console.log(typeof gameName);
console.log(gameName.toUpperCase())
console.log(gameName.length);


//Yes! 🎯 The String object in JavaScript comes packed with built-in methods and properties that are specifically designed for string manipulation — and they work whether you use a string object (new String()) or a primitive string ("text"), because JS automatically wraps primitive strings with a temporary String object when needed (this is called autoboxing).

const name2 = "        Yatharth  "
console.log(name2)
console.log(name2.trim())

const url = "Yatharth%20Saluja"
console.log(url.replace("%20","-"));
console.log(url)

// strings are immutable , hence proved 
