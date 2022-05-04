

const clickBtn = document.getElementById("btn-js");
const body = document.getElementById("Body");
const color = ["red","green","blue","white","black","violet"]



clickBtn.addEventListener("click",function() {
    
    
    let colorIndex = parseInt(Math.random()*color.length)
    body.style.backgroundColor = color[colorIndex]
})

