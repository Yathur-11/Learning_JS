const hex  = '0123456789ABCDEF'

const random_color = function give_random_color(){

    let color = '#'

    for(let i = 0; i<6; i++){
        color+=hex[Math.floor(Math.random()*16)]
    }

    return color;
}

console.log(random_color())

const change_color = function(){
    document.querySelector('body').style.backgroundColor = random_color()
}

let interval_id;

const startChangingColor = function(){
    interval_id = setInterval(change_color, 1000)
}

const stopChangingColor = function(){
    clearInterval(interval_id)
}

const start = document.querySelector('#start')
const stop = document.querySelector('#stop')

start.addEventListener('click', function(){
    startChangingColor();
})

stop.addEventListener('click', function(){
    stopChangingColor();
})