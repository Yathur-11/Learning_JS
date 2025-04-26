const random_num = parseInt(Math.random()*100+1)

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p');

let prevGuess = []
let numGuess = 1
let playGame = true

if (playGame){

    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess)
        validateGuess(guess)
    })
}

function validateGuess(guess){
    
    if(isNaN(guess) || guess<1 || guess>100){
        alert("Please enter a valid number")
    }
    else{
        prevGuess.push(guess);
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${random_num}`)
            endGame();
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }

}

function checkGuess(guess){
    
    if(guess === random_num){
        displayMessage(`You guessed it right!`)
        endGame();
    }
    else if(guess < random_num){
        displayMessage(`Number is TOO low`)
    }
    else{
        displayMessage(`Number is TOO high`)
    }
}

function displayGuess(guess){
    
    userInput.value = ''
    guessSlot.innerHTML += `${guess}`
    numGuess++;
    remaining.innerHTML = `${10 - numGuess}`
}

function displayMessage(message){
    //
    lowOrHi.innerHTML = `<h2>{message}</h2>`
}

function endGame(){
    //
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id = 'newGame'>Start New Game </h2>`
    startOver.appendChild(p)
    playGame = false;
    newGame()
}

function newGame(){
    //
    const newbutton = document.querySelector('#newGame')
    newGameButton
}
