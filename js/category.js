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


const addToCartButtonCheeseburger = document.querySelector('.add-to-cart-MCcheeseburger')
console.log(addToCartButtonCheeseburger);

addToCartButtonCheeseburger.addEventListener('click',()=>{
    const cartCatalog = document.querySelector('.modal1')
    data.cheeseburger.map((item, index)=>{
        return cartCatalog.innerHTML += 
    `
   
    <div class="container-cart">
            <div class="cheeseburger-cart">
                <div class="cheeseburger-cart-style">
                <div class="burger-cart-img">
                <img src="${item.image}" alt="" width="150px" he>
            </div>
            <div class="burger-text">
                <h3>${item.name}</h3>
                <p>${item.burgerPrice}</p>
            </div>
                </div>
            </div>
        </div>
    
    `
    })
    
})



const addToCartButtonChickenburger = document.querySelector('.add-to-cart-MCchickenburger')

addToCartButtonChickenburger.addEventListener('click',()=>{
    const cartCatalog = document.querySelector('.modal1')
    data.chickenburger.map((item, index)=>{
        return cartCatalog.innerHTML += 
    `
   
    <div class="container-cart">
            <div class="cheeseburger-cart">
                <div class="cheeseburger-cart-style">
                <div class="burger-cart-img">
                <img src="${item.image}" alt="" width="150px" he>
            </div>
            <div class="burger-text">
                <h3>${item.name}</h3>
                <p>${item.burgerPrice}</p>
            </div>
                </div>
            </div>
        </div>
    
    `
    })
    
})


const addToCartButtonHamburger = document.querySelector('.add-to-cart-MChamburger')


addToCartButtonHamburger.addEventListener('click',()=>{
    const cartCatalog = document.querySelector('.modal1')
    data.hamburger.map((item, index)=>{
        return cartCatalog.innerHTML += 
    `
   
    <div class="container-cart">
            <div class="cheeseburger-cart">
                <div class="cheeseburger-cart-style">
                <div class="burger-cart-img">
                <img src="${item.image}" alt="" width="150px" he>
            </div>
            <div class="burger-text">
                <h3>${item.name}</h3>
                <p>${item.burgerPrice}</p>
            </div>
                </div>
            </div>
        </div>
    
    `
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

const cheapBurgers = document.querySelector('.cheap')

cheapBurgers.addEventListener('click',()=>{
    const BurgersCatalog = document.querySelector('.catalog');
    BurgersCatalog.innerHTML = ''
    data.cheapBurgers.map((item, index)=>{
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

const expensiveBurgers = document.querySelector('.expensive')

expensiveBurgers.addEventListener('click',()=>{
    const BurgersCatalog = document.querySelector('.catalog');
    BurgersCatalog.innerHTML = ''
    data.expensiveBurger.map((item, index)=>{
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



const discountBurgers = document.querySelector('.discount')

discountBurgers.addEventListener('click',()=>{
    alert('скидок НЕТ')
})



const allVariantsButton = document.querySelector('.all-variants')
console.log(allVariantsButton);



allVariantsButton.addEventListener('click',()=>{
    const modalWindow = document.querySelector('.modal')
    if(modalWindow.classList.contains('none')){
        modalWindow.classList.remove('none')
    }
})

const closeModalWindow = document.querySelector('.header_menu')

closeModalWindow.addEventListener('click',()=>{
    const modalWindow = document.querySelector('.modal')
    modalWindow.classList.add('none') 
})








const cartButton = document.querySelector('.cart-img')
const modalWindow1 = document.querySelector('.modal1')


cartButton.addEventListener('click',()=>{
    if(modalWindow1.classList.contains('none1')){
        modalWindow1.classList.remove('none1')
        modalWindow1.classList.add('active')
    }else if(modalWindow1.classList.contains('active')){
    modalWindow1.classList.add('none1')
    }
})


const cleanCart = document.querySelector('.clean-cart')
console.log(cleanCart);

cleanCart.addEventListener('click',()=>{
    modalWindow1.innerHTML = '' 
    
})













});













