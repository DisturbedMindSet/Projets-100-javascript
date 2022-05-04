(function(){



const button =document.getElementById("btn")
const listQuote = document.getElementById("quote")


let arrQuotes = [
    
    {quote: "Be yourself; everyone else is already taken.",author :"Oscar Wilde"},
    {quote:"So many books, so little time.",author : "Frank Zappa"},
    {quote:"A room without books is like a body without a soul.", author :"Marcus Cicero"},
    {quote:"Act as if what you do makes a difference. It does.",author :"William James"}
    
]


button.addEventListener("click",(function(){

    
    var index = Math.floor(Math.random()*arrQuotes.length)
    let text = arrQuotes[index].quote
    let author =arrQuotes[index].author

    listQuote.textContent=`
    ${text} \ 
    ......
    ${author}`

}))

}())



