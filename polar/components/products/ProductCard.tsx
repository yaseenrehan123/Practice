"use client";
import { createCheckout } from '@/actions/polarActions'
import { ProductCardProps as ProductCardProps } from '@/libs/types'
import React from 'react'

const ProductCard = ({ polarId, name, description }: ProductCardProps) => {
    const onSubmit = async () => {
        await createCheckout({
            polarId
        });
    }
    return (
        <div className="flex items-center justify-between w-full max-w-md p-4 transition-shadow bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md">
            <div className="flex flex-col gap-1">
                <h3 className="font-semibold text-gray-800 text-lg">{name}</h3>
                <p className="text-sm text-gray-500">{description}</p>
            </div>

            <button className="px-6 py-2 font-medium text-white transition-all duration-200 transform bg-neutral-900 rounded-lg 
                hover:bg-neutral-700 hover:scale-105 
                active:scale-95 active:bg-black
                focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2"
                onClick={onSubmit}>
                Buy
            </button>
        </div>
    )
}

export default ProductCard