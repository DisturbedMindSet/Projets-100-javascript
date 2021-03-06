



(function(){
 
    const btn = document.querySelectorAll("a[data-filter]")
    const menu = document.querySelector("#store-items");
    const dataItem = document.querySelectorAll("div[data-item]")
    const searchInput = document.querySelector("#search-item")

    

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

    
    const storeItems = document.querySelectorAll(".store-item"); 
    const images = document.querySelectorAll(".store-img")
    
    const lightboxContainer = document.querySelector(".lightbox-container")    
    const lightboxItem = document.querySelector(".lightbox-item")

    let imageList=[]
    let imageCounter=0

    
    images.forEach((image) =>{
        imageList.push(image.src)
        
    })

    storeItems.forEach(function(item){
        item.addEventListener("click",function(e){
            
            let image = e.target.scr
            
            lightboxContainer.style.backgroundImage = `url(${image})`;
            // "url(" + arr[counter] + ")";

            lightboxContainer.classList.add("show")
            imageCounter = imageList.indexOf(image)
            
        })

    })

    let leftBtn = document.querySelector(".btnLeft")
    leftBtn.addEventListener("click",function(){
        
        imageCounter--;
        if(imageCounter<0){
            imageCounter = imageList.length - 1
        }
        lightboxItem.style.backgroundImage = `url(${imageList[imageCounter]})` 
    })
        

    let rightBtn = document.querySelector(".btnRight")
    rightBtn.addEventListener("click",function(){
        
        imageCounter++;
        if(imageCounter > imageList.length - 1){
            imageCounter=0
        }
        lightboxItem.style.backgroundImage = `url(${imageList[imageCounter]})`
    
    })

    let lightBoxClose = document.querySelector(".lightbox-close")
    lightBoxClose.addEventListener("click",function(){
        lightboxContainer.classList.remove("show")

    })


})()






// //Use an IIFEe to avoid contamination global nameSpace
// (function(){
//     //Grab stores items from the DOM
//     let storeItems = document.querySelectorAll('.store-item');
//     //grab lightbox container 
//     let lightBox = document.querySelector('.lightbox-container');
//      //grab the div with the lightbox item
//     let lightBoxItem = document.querySelector('.lightbox-item');
//     //grab all the images from the store items
//     let images = document.querySelectorAll('.store-img');
    
    
//     // set up an array for the items
//     let imageList = [];
//     //set up a counter to run through the list of images
//     let imageCounter = 0;
//     //use a forEach loop to get a copy of all the images and push into an array of items
//     images.forEach(function(image){
//       //push each image To the array of images
//       imageList.push(image.src);
//     })
    
//     //Add an a click event listener to each store item
//     storeItems.forEach(function(item) {
//       //On click, allow the model container to show 
//       //Change css class from display none to display block
//       item.addEventListener('click', function(e){
//       //grab the image of the item that was clicked
//       let image = e.target.src;
//       //change the background img property of the lightbox item
//       lightBoxItem.style.backgroundImage = `url(${image})`;
//       //show the modal with the selected image
//       lightBox.classList.add('show');
//       //get the array index number for the image that was selected
//       imageCounter = imageList.indexOf(image);
//       });
//     }); 
    
//     //wire up the left and right buttons
//     //select left button from the DOM
//     let btnLeft = document.querySelector('.btnLeft');
//     btnLeft.addEventListener('click', function(){
//       imageCounter--;
//       if (imageCounter < 0){
//         imageCounter = imageList.length -1;
//       }
//       lightBoxItem.style.backgroundImage = `url(${imageList[imageCounter]})`
//     });
//       //select left button from the DOM
//     let btnRight = document.querySelector('.btnRight');
//     btnRight.addEventListener('click', function(){
//       imageCounter++;
//       if (imageCounter >= imageList.length){
//         imageCounter = 0;
//       }
//       lightBoxItem.style.backgroundImage = `url(${imageList[imageCounter]})`;
//     });
    
//     //wire up the modal's close button
//       let lightBoxClose = document.querySelector('.lightbox-close');
//       lightBoxClose.addEventListener('click', function(){
//       lightBox.classList.remove('show');
//       });
    
    
//   })();
  
  
//   /*
//   Notes during project
//   1. Tried to add an event listener to a node list. Had to actually do a forEach on the node list.
//   https://stackoverflow.com/questions/55667793/uncaught-typeerror-input-addeventlistener-is-not-a-function
//   2. Tried to use style.classList and then .show instead of just the string show. 'style not needed'
//   3. How to access the individual CSS properties (without simply adding a class)
//   4. I struggled with change the background. I thought I would be able to simply use element.style.background = 'image' but I realized I needed to use 'url(img);
//   5. Had a bug in my code where I misspelled background. backgound vs. background 
  
//   */