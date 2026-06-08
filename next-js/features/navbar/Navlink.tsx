import React from 'react'
import Link from 'next/link'
import type { LinkProps } from 'next/link'
import { NavlinkProps } from '@/utils/types'
const Navlink = ({ children, ...props }: NavlinkProps) => {
    return (
        <Link {...props}
            className='text-2xl text-white hover:cursor-pointer hover:text-cyan-500 transition-all duration-150
                font-anton font-bold'>
            {children}
        </Link>
    )
}

export default Navlink