function Product(name,imgSrc,stars,count,priceCents,id){
    this.name = name,
    this.imgSrc = imgSrc,
    this.rating = {
        stars:stars,
        count:count,
    },
    this.priceCents = priceCents,
    this.id = id;
};
const products = productsData.map(item => new Product(item.name,item.image,item.rating.stars,item.rating.count,item.priceCents,item.id));
const productsGrid = document.querySelector('.products-grid');
products.forEach(function(product){
    const template = `<div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src=${product.imgSrc}>
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src=images/ratings/rating-${product.rating.stars * 10}.png>
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
            $${(product.priceCents/100).toFixed(2)}
          </div>

          <div class="product-quantity-container">
            <select>
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

          <button class="add-to-cart-button button-primary"
          data-product-id = "${product.id}">
            Add to Cart
          </button>
        </div>`
   productsGrid.insertAdjacentHTML('beforeend',template);
});


document.querySelectorAll('.add-to-cart-button').forEach((button) =>{
  button.addEventListener('click',function(){
    const productId = button.dataset.productId;
    let matchingItem;
    cart.forEach(item =>{
      if(productId === item.productId){
        matchingItem = item;
      }
    });
    if(matchingItem){
      matchingItem.quantity ++;
    }
    else{
      cart.push({
        productId: productId,
        quantity: 1,
      });
      
    }
    document.querySelector('.cart-quantity').textContent = returnTotalProducts();;

    //console.log(cart);
  });
});
function returnTotalProducts(){
  let totalQuantity = 0;
  cart.forEach(item => {
    totalQuantity += item.quantity;
  });
  return totalQuantity;
}
