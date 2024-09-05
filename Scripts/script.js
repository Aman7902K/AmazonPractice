import {cart,addToCart,update_cart_quantity} from '../data/cart.js'
import {items} from '../data/products.js'

let itemHTML = ''

items.forEach((item)=>{
    itemHTML+= `
            <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src=${item.image}>
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${item.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${item.rating.stars*10}.png">
            <div class="product-rating-count link-primary">
              ${item.rating.count}
            </div>
          </div>

          <div class="product-price">
            $${(item.priceCents/100).toFixed(2)}
          </div>

          <div class="product-quantity-container">
            <select class="quantity_container_${item.id}">
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary js_add_cart_btn"
          data-product-id="${item.id}"
          >
            Add to Cart
          </button>
        </div>
    `
})

//to add currency convertor

document.querySelector(".js-products-grid").innerHTML = itemHTML

let cart_quantity = document.querySelector(".cart-quantity")

document.querySelectorAll('.js_add_cart_btn').forEach((btn)=>{
   btn.addEventListener('click',()=>{
      const product_id = btn.dataset.productId

      addToCart(product_id)     
 
      cart_quantity.innerHTML = update_cart_quantity()

   }) 
})


addEventListener("load",()=>{
  cart_quantity.innerHTML = update_cart_quantity()
})





