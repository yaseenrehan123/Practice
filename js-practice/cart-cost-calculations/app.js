//Getting refrences
const priceText = document.getElementById('price-output-text');
const shippingAndHandlingText = document.getElementById('shipping-and-handling-text');
const totalBeforeTaxText = document.getElementById('total-before-tax-text');
const estimatedTaxValueText = document.getElementById('estimaed-tax-value-text');
const totalPriceText = document.getElementById('total-price-text');
const priceInput = document.getElementById('price-input');

const shippingValue = 5.99
const taxPercent = 0.1 //10%
priceInput.addEventListener('input',function(){
    var price = priceInput.value;
    price = Number(price)
    priceText.textContent = price + '$'

    shippingAndHandlingText.textContent = shippingValue + '$'

    totalBeforeTax = price + shippingValue
    totalBeforeTax = Number(totalBeforeTax)
    totalBeforeTax = Math.round(totalBeforeTax)
    totalBeforeTaxText.textContent = totalBeforeTax + '$'
    
    taxValue = price * taxPercent 
    estimatedTaxValueText.textContent = taxValue + '$'
    
    totalPrice = Number(totalBeforeTax + taxValue)
    totalPrice = Math.round(totalPrice)
    totalPriceText.textContent =  totalPrice + '$'
})