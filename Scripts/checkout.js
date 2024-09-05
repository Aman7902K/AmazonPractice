import { cart,removeItem,saveToStorage,update_cart_quantity } from "../data/cart.js";
import { items } from "../data/products.js";
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js'
import { options } from "../data/deliveryOptions.js";

let checkoutHTML="";

cart.forEach((cartItem)=>{
    const productId = cartItem.product_Id

    let matchingItem

    items.forEach((item)=>{
        if(productId === item.id){
            matchingItem = item
        }
    })    
    
    checkoutHTML+=

    `
    <div class="cart-item-container js-item-unique-${matchingItem.id}">
        <div class="delivery-date">
            Delivery date: Tuesday, June 21
        </div>

        <div class="cart-item-details-grid">
            <img class="product-image"
            src="${matchingItem.image}">

            <div class="cart-item-details">
            <div class="product-name">
                ${matchingItem.name}
            </div>
            <div class="product-price">
                ${(matchingItem.priceCents/100).toFixed(2)}
            </div>
            <div class="product-quantity">
                <span>
                Quantity: <span class="quantity-label">${cartItem.quantity}</span>
                </span>                    
                <span class="update-quantity-link link-primary" data-product-id="${matchingItem.id}">
                    Update
                </span>
                <input type="text" id=fname-${matchingItem.id} name="fname">
                <span class="save_quantity link-primary" >Save</span>
                <span class="delete-quantity-link link-primary delete_btn" data-product-Id="${matchingItem.id}">
                Delete
                </span>
            </div>
            </div>
            <div class="delivery-options">
            <div class="delivery-options-title">
                Choose a delivery option:
            </div>
            <div class="delivery-option">
                <input type="radio" checked
                class="delivery-option-input"
                name="delivery-option-${matchingItem.id}">
                <div>
                <div class="delivery-option-date">
                    Tuesday, June 21
                </div>
                <div class="delivery-option-price">
                    FREE Shipping
                </div>
                </div>
            </div>
            <div class="delivery-option">
                <input type="radio"
                class="delivery-option-input"
                name="delivery-option-${matchingItem.id}">
                <div>
                <div class="delivery-option-date">
                    Wednesday, June 15
                </div>
                <div class="delivery-option-price">
                    $4.99 - Shipping
                </div>
                </div>
            </div>
            <div class="delivery-option">
                <input type="radio"
                class="delivery-option-input"
                name="delivery-option-${matchingItem.id}">
                <div>
                <div class="delivery-option-date">
                    Monday, June 13
                </div>
                <div class="delivery-option-price">
                    $9.99 - Shipping
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>
        `

    document.querySelector(".order-summary").innerHTML = checkoutHTML

    document.querySelectorAll(".delete_btn").forEach((links)=>{
        links.addEventListener("click",()=>{
            let productID = links.dataset.productId
            removeItem(productID)          
            document.querySelector(`.js-item-unique-${productID}`).remove()
            saveToStorage()
        })
    })

    let update = document.querySelectorAll(".update-quantity-link")

    let save = document.querySelector(`#fname-$${matchingItem.id}`)

    update.forEach((link)=>{
        link.addEventListener("click",()=>{
            link.style.display = 'none'     
            save.style.display = 'initial'   
        })
    })
})

document.querySelector(".return-to-home-link").innerHTML = update_cart_quantity()








