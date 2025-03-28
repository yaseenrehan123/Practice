import * as productsScript from '../data/products.js';

export async function findMatchingProduct(productId){
    await productsScript.loadProducts();
    return productsScript.productsData.find(item => item.id === productId);
}