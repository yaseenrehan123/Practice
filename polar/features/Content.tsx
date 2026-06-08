import { getProducts } from '@/actions/productActions'
import ProductCard from '@/components/products/ProductCard';
import { Product } from '@/generated/prisma/client';
import React from 'react'

const Content = async () => {
    const products = await getProducts();
    return (
        <div className='flex items-center flex-col gap-2'>
            {products.map((product: Product) => (
                <ProductCard
                    key={product.id}
                    polarId={product.polarProductId}
                    name={product.name}
                    description={product.description} />
            ))}
        </div>
    )
}

export default Content