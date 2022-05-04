
const imgContainer= document.querySelector("#customer-img")
const leftBtn = document.querySelector(".prevBtn")
const rightBtn = document.querySelector(".nextBtn")

let counter = 0

let arr=[
    "./img/customer-0.jpg",
    "./img/customer-1.jpg",
    "./img/customer-2.jpg",
    "./img/customer-3.jpg",
    "./img/customer-4.jpg"
]

leftBtn.addEventListener("click",function(e){
    
    counter --
    if (counter < 0 ){
        counter = arr.length -1
    }
    imgContainer.src = arr[counter]
})

rightBtn.addEventListener("click",function(e){

    counter++
    if(counter > arr.length -1){
       counter = 0 
    }
    imgContainer.src = arr[counter]
})












