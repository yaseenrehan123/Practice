import { HeadingProps } from '@/lib/types'
import { cn } from '@/lib/utils'
import { cva } from 'class-variance-authority'
import React from 'react'

const Heading = ({ children, className, variant }: HeadingProps) => {
    return (
        <div className={cn(variants({ variant }), className)} >
            {children}
        </div>
    )
}

export default Heading

const variants = cva('font-bold', {
    variants: {
        variant: {
            sm: "text-2xl",
            md: "text-3xl",
            lg: "text-4xl",
            xl: "text-5xl"
        }
    },
    defaultVariants: {
        variant: "sm"
    }
})