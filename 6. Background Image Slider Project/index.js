
const leftArrow = document.querySelector(".btn-left")
const rightArrow = document.querySelector(".btn-right")
const imgContainer = document.querySelector(".img-container")

let arr = [
    "./img/contBcg-0.jpeg",
    "./img/contBcg-1.jpeg",
    "./img/contBcg-2.jpeg",
    "./img/contBcg-3.jpeg",
    "./img/contBcg-4.jpeg"
]

let counter = 0

leftArrow.addEventListener("click",function(e){
   
    
    counter--
    if(counter<0){
        counter = arr.length -1
    }
    imgContainer.style.backgroundImage = "url(" + arr[counter] + ")";

})

rightArrow.addEventListener("click",function(){

    
    counter ++
    if(counter>arr.length -1){
          counter = 0  
        }

    imgContainer.style.backgroundImage = "url(" + arr[counter] + ")";
})

