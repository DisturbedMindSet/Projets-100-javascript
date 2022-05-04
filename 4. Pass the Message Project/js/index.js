
const deliver = document.getElementById("submitBtn")
const text = document.getElementById("message")
const messageContent = document.querySelector(".message-content")
const h5 = document.querySelector("h5")

deliver.addEventListener("click",function(e){
    e.preventDefault()
    if (text.value===""){
        h5.classList.add("show")
        setTimeout(function(){
            h5.classList.remove("show")
        },3000)
        
        
    }else{
       
        messageContent.textContent = text.value
        text.value=""
    }
    
})



