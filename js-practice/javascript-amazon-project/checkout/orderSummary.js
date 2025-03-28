import * as cartScript from '../data/cart.js';
import * as products from '../data/products.js';
import * as moneyUtil from '../utils/money.js';
import * as DeliveryOptionsScript from '../data/deliveryoptions.js';
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import { reloadPaymentSummary } from './paymentSummary.js';


export function renderOrderSummary(){
    setCheckoutProductsText();
  cartScript.cart.forEach((cartItem) => {
      let matchingProduct = products.productsData.find(product => product.id === cartItem.productId);
      let deliveryOption = findMatchingDeliveryOption(cartItem.deliveryOptionId);
      const dateString = calculateDeliveryDate(deliveryOption);
      const cartItemTemplate = `<div class="cart-item-container">
              <div class="delivery-date">
                Delivery date: ${dateString}
              </div>
  
              <div class="cart-item-details-grid">
                <img class="product-image"
                  src="${matchingProduct.image}">
  
                <div class="cart-item-details">
                  <div class="product-name">
                    ${matchingProduct.name}
                  </div>
                  <div class="product-price">
                    $${moneyUtil.formatCurrency(matchingProduct.priceCents)}
                  </div>
                  <div class="product-quantity">
                    <span>
                      Quantity: <span class="quantity-label">${cartItem.quantity}</span>
                    </span>
                    <span class="update-quantity-link link-primary" data-product-id = ${matchingProduct.id}>
                      Update
                    </span>
                    <input class = "quantity-input">
                    <span class = "save-quantity-link link-primary" data-product-id = ${matchingProduct.id}>Save</span>
                    <span class="delete-quantity-link link-primary" data-product-id = ${matchingProduct.id}>
                      Delete
                    </span>
                  </div>
                </div>
  
                <div class="delivery-options">
                  <div class="delivery-options-title">
                    Choose a delivery option:
                  </div>
                  ${deliveryOptionsHtml(matchingProduct,cartItem)}
                </div>
              </div>
            </div>`
            document.querySelector('.order-summary').insertAdjacentHTML('beforeend',cartItemTemplate);
  });
  
  attachEventListeners(); // Fix event listener duplication issue
  
  function attachEventListeners() {
    deleteQuantityBtnFunction();
    updateQuantityBtnFunction();
    saveQuantityBtnFunction();
    deliveryOptionFunction();
  }
  function saveQuantityBtnFunction(){
    document.querySelectorAll('.save-quantity-link').forEach((btn) => {
        btn.addEventListener("click",() =>{
          getClosestCartItemContainer(btn).classList.remove("is-editing-quantity");
          const quantityLink = getQuantityLink(btn);
          const newValue = parseInt(quantityLink.value);
          cartScript.updateQuantity(btn.dataset.productId,newValue);
          reloadOrderSummary();
          reloadPaymentSummary();
          
        });
    });
  }
  function updateQuantityBtnFunction(){
    document.querySelectorAll('.update-quantity-link').forEach((btn) => {
      btn.addEventListener("click",() => {
        getClosestCartItemContainer(btn).classList.add('is-editing-quantity');
      });
    });
  }
  function deleteQuantityBtnFunction(){
    document.querySelectorAll('.delete-quantity-link').forEach((btn) => {
      btn.addEventListener("click",() =>{
       const productId = btn.dataset.productId;
       cartScript.removeFromCart(productId);
       reloadOrderSummary();
       reloadPaymentSummary();
      });
    });
  }
  function getClosestCartItemContainer(element){
    return element.closest('.cart-item-container');
  }
  function getQuantityLink(element){
    return getClosestCartItemContainer(element).querySelector('.quantity-input');
  }
  function deliveryOptionsHtml(matchingProduct,cartItem){
     let html = '';
     DeliveryOptionsScript.returnDeliveryOptions().forEach((deliveryOption) =>{
      const dateString = calculateDeliveryDate(deliveryOption);
      const priceString = deliveryOption.priceCents === 0 
      ? 'FREE'
      : `${moneyUtil.formatCurrency(deliveryOption.priceCents)} -`;
      const isChecked = deliveryOption.id === cartItem.deliveryOptionId;
  
  
      html +=     `
      <div class="delivery-option" data-product-id = ${matchingProduct.id} data-delivery-option-id = ${deliveryOption.id}>
                    <input type="radio" ${isChecked ?'checked' : ''}
                      class="delivery-option-input"
                      name="delivery-option-${matchingProduct.id}">
                    <div>
                      <div class="delivery-option-date">
                        ${dateString}
                      </div>
                      <div class="delivery-option-price">
                        ${priceString} Shipping
                      </div>
                    </div>
                  </div>
      `;
  
     });
     return html;
  }
  function calculateDeliveryDate(deliveryOption) {
    let today = dayjs();
    let daysToAdd = deliveryOption.deliverDays;
    
    while (daysToAdd > 0) {
        today = today.add(1, 'day'); // Move to the next day
        if (today.day() !== 6 && today.day() !== 0) { // Check if NOT Saturday (6) or Sunday (0)
          daysToAdd--; // Only decrement if it's a weekday
      }
    }

    return today.format('dddd, MMMM D');
}

  function deliveryOptionFunction(){
    document.querySelectorAll('.delivery-option').forEach((e) =>{
      e.addEventListener('click',() =>{
        cartScript.updateDeliveryOption(e.dataset.productId,e.dataset.deliveryOptionId);
        reloadOrderSummary();
        reloadPaymentSummary();
      });
    });
  }
  function setCheckoutProductsText(){
    const totalCheckoutProductsText = document.querySelector('.checkout-total-products-text');
    if(!totalCheckoutProductsText)
      return;
    totalCheckoutProductsText.textContent = cartScript.returnTotalProducts();
    
  }
  }
  function reloadOrderSummary(){
    const orderSummaryContainer = document.querySelector('.order-summary'); 
    orderSummaryContainer.innerHTML = ''; // Clear previous content
    renderOrderSummary();
  }
  export function findMatchingDeliveryOption(deliveryOptionId){
    const deliveryOptions = DeliveryOptionsScript.returnDeliveryOptions();
    return deliveryOptions.find(option => option.id === deliveryOptionId) || deliveryOptions[0];

     
  }