let ans = new Promise( (res, rej)=>{

    let n = Math.floor(Math.random()*10)

    if(n<5){
        return res();
    }
    else{
        return rej();
    }
})

ans.then( ()=>{
    console.log("Below 5")
})
.catch( ()=>{
    console.log("above")
})