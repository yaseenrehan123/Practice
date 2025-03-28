import * as cartScript from '../data/cart.js';
import * as getProductsUtil from '../utils/getProducts.js';
import * as moneyUtil from '../utils/money.js';
import * as orderSummaryScript from './orderSummary.js';
export function renderPaymentSummary(){
    let productPriceCents = 0;
    let shippingPriceCents = 0;
   cartScript.cart.forEach(cartItem => {
    const product = getProductsUtil.findMatchingProduct(cartItem.productId);
    productPriceCents += product.priceCents * cartItem.quantity;

    const deliveryOption = orderSummaryScript.findMatchingDeliveryOption(cartItem.deliveryOptionId);
    shippingPriceCents += deliveryOption.priceCents;
   });
   const totalBeforeTaxCents = productPriceCents + shippingPriceCents;
   const taxCents = totalBeforeTaxCents * 0.1;
   const totalCents = totalBeforeTaxCents + taxCents;
   
   const paymentSummaryHtml = `
    <div class="payment-summary">
          <div class="payment-summary-title">
            Order Summary
          </div>

          <div class="payment-summary-row">
            <div>Items (${cartScript.returnTotalProducts()}):</div>
            <div class="payment-summary-money">$${moneyUtil.formatCurrency(productPriceCents)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">$${moneyUtil.formatCurrency(shippingPriceCents)}</div>
          </div>

          <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">$${moneyUtil.formatCurrency(totalBeforeTaxCents)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">$${moneyUtil.formatCurrency(taxCents)}</div>
          </div>

          <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">$${moneyUtil.formatCurrency(totalCents)}</div>
          </div>

          <button class="place-order-button button-primary">
            Place your order
          </button>
        </div>
   `
   document.querySelector('.payment-summary').insertAdjacentHTML("beforeend",paymentSummaryHtml);

}
export function reloadPaymentSummary(){
  document.querySelector('.payment-summary').innerHTML = '';
  renderPaymentSummary();
 }
