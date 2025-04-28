const promiseOne = new Promise( function(res,rej){

    let num = 1;

    if(num>3){
        res();
    }
    else{
        rej();
    }
})

promiseOne.then(function(){
    console.log("promise consumed")
}).catch(function(){
    console.log("rejected")
})