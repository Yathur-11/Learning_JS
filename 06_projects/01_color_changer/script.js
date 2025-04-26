const buttons = document.querySelectorAll('.button') ///returns a node list of all those elements in HTML with class = button
const body = document.querySelector('body') /// selects the body element

buttons.forEach( function(btn){   /// loop thorugh each button once to add event listener
    btn.addEventListener('click', function(e){
        body.style.backgroundColor = e.target.id
    })
})

//"We first select all elements with the class .button and the <body> element. Then, we loop through each button using forEach, and attach a click event listener to each. When any button is clicked, we access the id of the clicked button via e.target.id and dynamically change the background color of the body using that value."