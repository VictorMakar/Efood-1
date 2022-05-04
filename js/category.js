fetch('js/data.json')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
 













 



const McDonaldsButton = document.querySelector('.mcdonalds')

McDonaldsButton.addEventListener('click', ()=>{
    const BurgersCatalog = document.querySelector('.catalog');
    BurgersCatalog.innerHTML = ''
    data.McDonaldsBurgers.map((item, index)=>{
        return BurgersCatalog.innerHTML += 
         `
         <div class="McDonalds-Cheeseburger">
                        <div class="cheeseburger burger-font-style">
                        <img src="${item.image}" alt="" width="144px" height="144px">
                        <div class="discription">
                            <h2>${item.name}</h2>
                            <p>${item.composition}</p>
                        </div>
                        </div>
                        <div class="McDonalds-Cheeseburger-price">
                            <div class="add-to-cart-MCcheeseburger" onmousedown="return false" onselectstart="return false">
                                <h2>${item.addToCartButton}</h2>
                            </div>
                            <div class="burger-price">
                                <p>${item.burgerPrice}</p>
                            </div>
                        </div>
                    </div>  
    `
        })
        
const beefBurgers = document.querySelector('.beef')

beefBurgers.addEventListener('click',()=>{
    const BurgersCatalog = document.querySelector('.catalog');
    BurgersCatalog.innerHTML = ''
    data.BurgersBeefMcDonalds.map((item, index)=>{
        return BurgersCatalog.innerHTML +=
        `
        <div class="McDonalds-Cheeseburger">
                       <div class="cheeseburger burger-font-style">
                       <img src="${item.image}" alt="" width="144px" height="144px">
                       <div class="discription">
                           <h2>${item.name}</h2>
                           <p>${item.composition}</p>
                       </div>
                       </div>
                       <div class="McDonalds-Cheeseburger-price">
                           <div class="add-to-cart-MCcheeseburger" onmousedown="return false" onselectstart="return false">
                               <h2>${item.addToCartButton}</h2>
                           </div>
                           <div class="burger-price">
                               <p>${item.burgerPrice}</p>
                           </div>
                       </div>
                   </div>  
   `
    })
})
        
})





const kfcButton = document.querySelector('.kfc')
console.log(kfcButton)

kfcButton.addEventListener('click',()=>{
    const BurgersCatalog = document.querySelector('.catalog');
    BurgersCatalog.innerHTML = ''
    data.kfcBurgers.map((item, index)=>{
        return BurgersCatalog.innerHTML += 
        `
        <div class="KFCcheeseburger">
                        <div class="cheeseburger burger-font-style">
                        <img src="${item.image}" alt=""  width="144px" height="144px">
                        <div class="discription">
                            <h2>${item.name}</h2>
                            <p>${item.composition}</p>
                        </div>
                        </div>
                        <div class="McDonalds-double-filet-o-fish-price">
                            <div class="add-to-cart-MCchickenburger" onmousedown="return false" onselectstart="return false">
                                <h2>${item.addToCartButton}</h2>
                            </div>
                            <div class="burger-price">
                                <p>${item.burgerPrice}</p>
                            </div>
                        </div>
                    </div>
        ` 
    })
})






const bkButton = document.querySelector('.burger-king')

bkButton.addEventListener('click',()=>{
    const BurgersCatalog = document.querySelector('.catalog');
    BurgersCatalog.innerHTML = ''
    data.bkBurgers.map((item, index)=>{
        return BurgersCatalog.innerHTML += 
        `
        <div class="BK-whopper-junior">
        <div class="whopper-junior burger-font-style">
        <img src=${item.image} alt=""  width="144px" height="144px">
        <div class="discription">
            <h2>${item.name}</h2>
            <p>${item.composition}</p> 
        </div>
        </div>
        <div class="BK-whopper-junior-price">
            <div class="add-to-cart-MCchickenburger" onmousedown="return false" onselectstart="return false">
                <h2>${item.addToCartButton}</h2>
            </div>
            <div class="burger-price">
                <p>${item.burgerPrice}</p>
            </div>
        </div>
    </div>
        `
    })
    
const beefBurgers = document.querySelector('.beef')

beefBurgers.addEventListener('click',()=>{
    const BurgersCatalog = document.querySelector('.catalog');
    BurgersCatalog.innerHTML = ''
    data.BurgersBeefBK.map((item, index)=>{
        return BurgersCatalog.innerHTML +=
        `
        <div class="McDonalds-Cheeseburger">
                       <div class="cheeseburger burger-font-style">
                       <img src="${item.image}" alt="" width="144px" height="144px">
                       <div class="discription">
                           <h2>${item.name}</h2>
                           <p>${item.composition}</p>
                       </div>
                       </div>
                       <div class="McDonalds-Cheeseburger-price">
                           <div class="add-to-cart-MCcheeseburger" onmousedown="return false" onselectstart="return false">
                               <h2>${item.addToCartButton}</h2>
                           </div>
                           <div class="burger-price">
                               <p>${item.burgerPrice}</p>
                           </div>
                       </div>
                   </div>  
   `
    })
})

})












const beefBurgers = document.querySelector('.beef')

beefBurgers.addEventListener('click',()=>{
    const BurgersCatalog = document.querySelector('.catalog');
    BurgersCatalog.innerHTML = ''
    data.BurgersBeef.map((item, index)=>{
        return BurgersCatalog.innerHTML +=
        `
        <div class="McDonalds-Cheeseburger">
                       <div class="cheeseburger burger-font-style">
                       <img src="${item.image}" alt="" width="144px" height="144px">
                       <div class="discription">
                           <h2>${item.name}</h2>
                           <p>${item.composition}</p>
                       </div>
                       </div>
                       <div class="McDonalds-Cheeseburger-price">
                           <div class="add-to-cart-MCcheeseburger" onmousedown="return false" onselectstart="return false">
                               <h2>${item.addToCartButton}</h2>
                           </div>
                           <div class="burger-price">
                               <p>${item.burgerPrice}</p>
                           </div>
                       </div>
                   </div>  
   `
    })
})




const chickenBurgers = document.querySelector('.chicken')

chickenBurgers.addEventListener('click',()=>{
    const BurgersCatalog = document.querySelector('.catalog');
    BurgersCatalog.innerHTML = ''
    data.BurgersChicken.map((item, index)=>{
        return BurgersCatalog.innerHTML +=
        `
        <div class="McDonalds-Cheeseburger">
                       <div class="cheeseburger burger-font-style">
                       <img src="${item.image}" alt="" width="144px" height="144px">
                       <div class="discription">
                           <h2>${item.name}</h2>
                           <p>${item.composition}</p>
                       </div>
                       </div>
                       <div class="McDonalds-Cheeseburger-price">
                           <div class="add-to-cart-MCcheeseburger" onmousedown="return false" onselectstart="return false">
                               <h2>${item.addToCartButton}</h2>
                           </div>
                           <div class="burger-price">
                               <p>${item.burgerPrice}</p>
                           </div>
                       </div>
                   </div>  
   `
    })
})





const fishBurgers = document.querySelector('.fish')

fishBurgers.addEventListener('click', ()=>{
    const BurgersCatalog = document.querySelector('.catalog');
    BurgersCatalog.innerHTML = ''
    data.BurgersFish.map((item, index)=>{
        return BurgersCatalog.innerHTML +=
        `
        <div class="McDonalds-Cheeseburger">
                       <div class="cheeseburger burger-font-style">
                       <img src="${item.image}" alt="" width="144px" height="144px">
                       <div class="discription">
                           <h2>${item.name}</h2>
                           <p>${item.composition}</p>
                       </div>
                       </div>
                       <div class="McDonalds-Cheeseburger-price">
                           <div class="add-to-cart-MCcheeseburger" onmousedown="return false" onselectstart="return false">
                               <h2>${item.addToCartButton}</h2>
                           </div>
                           <div class="burger-price">
                               <p>${item.burgerPrice}</p>
                           </div>
                       </div>
                   </div>  
   `    
    })
})





});































