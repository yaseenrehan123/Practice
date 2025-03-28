export let cart = JSON.parse(localStorage.getItem('cart')) || [{
  productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
  quantity: 1,
  deliveryOptionId: '1'
},
{
  productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
  quantity: 2,
  deliveryOptionId: '2'
}
];
const timeOutIds = {}; // Object to store timeout IDs per product
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.add-to-cart-button').forEach((button) =>{
    button.addEventListener('click', () => addToCart(button));
  });
});
setTotalCartQuantityText();
  
  function addToCart(button){
    const productId = button.dataset.productId;
    let matchingItem = findMatchingCartProduct(productId);
   
    if(matchingItem){
      matchingItem.quantity += returnProductQuantityBySelector(button);
    }
    else{
      cart.push({
        productId: productId,
        quantity: returnProductQuantityBySelector(button),
        deliveryOptionId: '1'
      });
      
    }
    saveCartToStorage();
    setTotalCartQuantityText();
    showAddedToCartText(button);
    console.log(cart);
  }
  
  export function returnTotalProducts(){
    let totalQuantity = 0;
    cart.forEach(item => {
      totalQuantity += item.quantity;
    });
    return totalQuantity;
  };
  
  function returnProductQuantityBySelector(productBtn){
    const productContainer = productBtn.closest('.product-container');
    const selectQuantityElement = productContainer.querySelector('.product-quantity-selector');
    return parseInt(selectQuantityElement.value);
  }
  
  
  function showAddedToCartText(productBtn) {
    const productContainer = productBtn.closest('.product-container');
    const text = productContainer.querySelector('.added-to-cart');
    const productId = productBtn.dataset.productId; // Get the product's unique ID
  
    // Make the text visible
    text.style.opacity = 1;
  
    // If there's an existing timeout for this product, clear it
    if (timeOutIds[productId]) {
      clearTimeout(timeOutIds[productId]);
    }
  
    // Set a new timeout and store it in the object
    timeOutIds[productId] = setTimeout(() => {
      text.style.opacity = 0;
      delete timeOutIds[productId]; // Remove the timeout reference after execution
    }, 2000);
  }
  export function removeFromCart(productId){
    // Find the index of the product to remove
  const index = cart.findIndex(item => item.productId === productId);

  if (index !== -1) {
    cart.splice(index, 1); // Remove 1 item at found index
  }
  saveCartToStorage();
  }
export function saveCartToStorage(){
  localStorage.setItem('cart',JSON.stringify(cart));
}
  function setTotalCartQuantityText(){
    if(!document.querySelector('.cart-quantity'))
      return;
    document.querySelector('.cart-quantity').textContent = returnTotalProducts();
  }
  
export function updateQuantity(productId, newQuantity){
  cart.forEach(cartItem => {
    if(cartItem.productId === productId){
      cartItem.quantity = newQuantity;
      console.log(cartItem.quantity);
    }
  })
  saveCartToStorage();
}
export function updateDeliveryOption(productId,deliveryOptionId){
  const matchingItem = findMatchingCartProduct(productId);
  matchingItem.deliveryOptionId = deliveryOptionId;
  saveCartToStorage();
}
export function findMatchingCartProduct(productId){
  return cart.find(item => item.productId === productId);
}
