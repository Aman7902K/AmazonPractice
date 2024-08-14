export let cart = JSON.parse(localStorage.getItem('cart'))

if(!cart){
    cart = [{
        product_Id:"e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        quantity:2
    },
    {
        product_Id:"15b6fc6f-327a-4ec4-896f-486349e85a3d",
        quantity:4
    }]
}

function saveToStorage(){
    localStorage.setItem('cart',JSON.stringify(cart))   
}

export function removeItem(productId){
    let newCart = []
    cart.forEach((item)=>{
        if(item.product_Id !== productId){
            newCart.push(item)
        }
    })
    cart = newCart
    saveToStorage()
}

export function addToCart(product_id){
    let matchingItem;
    let Quantity = parseInt(document.querySelector(`.quantity_container_${product_id}`).value)

    cart.forEach((item)=>{
      if(product_id === item.product_Id){
        matchingItem = item
      }
    })

    if(matchingItem){
      matchingItem.quantity +=Quantity
    }
    else{
      cart.push({
        product_Id:product_id,
        quantity:Quantity
      })
    }  
    saveToStorage()
}