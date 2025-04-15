const map1 = new Map()

map1.set('IN', "India")
map1.set('FR', "France")
map1.set('USA', "United States of America")

// console.log(map1.get('IN'));


for (const [key, value] of map1){
    console.log(key, ':-', value)
}

//OBJECTS can't be iterated this way 