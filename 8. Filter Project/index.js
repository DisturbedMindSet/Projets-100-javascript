

const btn = document.querySelectorAll("a[data-filter]")
const menu = document.querySelector("#store-items");
const dataItem = document.querySelectorAll("div[data-item]")
const searchInput = document.querySelector("#search-item")

console.log(searchInput)

btn.forEach(function(btn) {
    btn.addEventListener("click",function(e) {
        
        e.preventDefault() 
        searchInput.value=""
        const filterBtn = e.currentTarget.dataset.filter;
        menu.innerHTML = ""
        

        
        dataItem.forEach((i) => {
            if(filterBtn ==  i.dataset.item){
               menu.prepend(i)
                                
             
            }else if(filterBtn=="all"){
                for (all of dataItem){
                    menu.prepend(all)
                }
            };
        });
   
    
    });

});


searchInput.addEventListener("input",(evt) =>{
    menu.innerHTML=""
    
    let word = evt.target.value
    dataItem.forEach((i) =>{
        let match = i.dataset.item.match(word)
        console.log(match)
        if (match){
            menu.append(i)
        }
    })

})




// search buttons & search bar, resposta imendiata a cada letra.
// 
// 
// 






