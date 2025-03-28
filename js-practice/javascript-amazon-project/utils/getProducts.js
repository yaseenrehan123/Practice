import * as productsScript from '../data/products.js';

export function findMatchingProduct(productId){
    return productsScript.productsData.find(item => item.id === productId);
}