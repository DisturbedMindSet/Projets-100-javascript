
const counter =document.getElementById("counter")
const addCounter = document.getElementById("add-btn")
const lowerCount = document.getElementById("lower-btn")

let total = 0

addCounter.addEventListener("click",function(){
    
    total ++
    counter.innerHTML=total
    console.log(total)
    changeColor()
})

lowerCount.addEventListener("click",function(){

    total --
    counter.innerHTML=total
    console.log(total)
    changeColor()
})

function changeColor(){

    if(total>0){
        counter.style.color="green"
    }else{
        counter.style.color="red"
    }
}



