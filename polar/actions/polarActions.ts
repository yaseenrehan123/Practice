"use server";
import polar from "@/libs/polar";
import { CreateCheckoutProps, ProductCardProps } from "@/libs/types";
import { redirect } from "next/navigation";


export async function createCheckout({ polarId }: CreateCheckoutProps) {
    if (!polarId) {
        throw new Error("Polar Product Id Null")
    }
    const res = await polar.checkouts.create({
        products: [polarId],
        successUrl: `${process.env.NEXT_PUBLIC_SITE_URL}/`
    });

    redirect(res.url)
}
