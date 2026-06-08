"use client";
import { getProductByPolarId, getProducts } from '@/actions/productActions'
import ProductCard from '@/components/products/ProductCard';
import { Product } from '@/generated/prisma/client';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';

const SuccessPageContent = async () => {
    const searchParams = useSearchParams();
    //const id = searchParams.get("id");
    const pid = searchParams.get("pid");
    if (!pid) return <div>404</div>
    const product = await getProductByPolarId(pid);
    if (!product) return <div>Product not found in DB</div>
    return (
        <div className='flex items-center flex-col gap-2'>
            <div className='text-4xl'>
                Product Bought:
            </div>
            <ProductCard
                key={product.id}
                polarId={pid}
                name={product.name}
                description={product.description}
            />
        </div>
    )
}

export default SuccessPageContent