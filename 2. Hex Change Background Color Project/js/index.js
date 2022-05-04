

const button = document.getElementById("btn")
const box =document.querySelector("body")
const hexRef = document.getElementById("hex-value")
let colorHex = [1, 2, 3, 4, 5, 6, 7, 8, 9,"a","b","c","d","e","f"]


button.addEventListener("click",function(){

    var hexNumber="#"
    for (let i = 0; i < 6; i++) {
        
        hexNumber += colorHex [Math.floor(Math.random()*colorHex.length)]
        
    }

    body.style.backgroundColor = hexNumber
    hexRef.textContent = hexNumber 
})











