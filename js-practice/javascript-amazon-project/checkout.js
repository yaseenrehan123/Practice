import * as orderSummaryScript from './checkout/orderSummary.js';
import * as paymentSummaryScript from './checkout/paymentSummary.js';
import * as productsScript from './data/products.js';
productsScript.loadProducts(() => {
    orderSummaryScript.renderOrderSummary();
    paymentSummaryScript.renderPaymentSummary();
});

