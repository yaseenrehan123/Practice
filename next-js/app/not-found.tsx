import React from 'react'
import Link from 'next/link'

export default function NotFoundPage() {
    return (
        <div className='flex items-center flex-col pt-6 bg-neutral-950 gap-4'>
            <div className='text-4xl text-red-500 font-bold'>
                404 Not Found!
            </div>
            <div className='flex items-center justify-center gap-2'>
                <div className='text-white'>
                    Oops! Got lost? Click to go back to
                </div>

                <Link href={"/"} className='text-green-500 underline '>
                    Home
                </Link>
            </div>
        </div>
    )
}
