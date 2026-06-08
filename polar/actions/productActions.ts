"use server";
import { Product } from "@/generated/prisma/client";
import prisma from "@/libs/prisma";
export async function getProducts(): Promise<Product[]> {
    const products = await prisma.product.findMany();
    return products;
}

export async function getProductBySlug(slug: string): Promise<Product> {
    const product = await prisma.product.findUnique({
        where: { slug: slug }
    });
    if (!product) {
        throw new Error(`Product Not Found! Identifier: ${slug}`)
    }
    return product;
}

export async function getProductByPolarId(id: string): Promise<Product> {
    const product = await prisma.product.findUnique({
        where: { polarProductId: id }
    });
    if (!product) {
        throw new Error(`Product Not Found! Identifier: ${id}`)
    }
    return product;
}