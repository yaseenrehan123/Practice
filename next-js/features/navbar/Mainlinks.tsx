import React from 'react'
import Link from 'next/link'
import Navlink from './Navlink'

const Mainlinks = () => {
    return (
        <div className='flex items-center justify-center gap-6 w-full'>
            <Navlink href={'/'}>
                Home
            </Navlink>
            <Navlink href={'/'}>
                About
            </Navlink>
            <Navlink href={'/'}>
                Contact
            </Navlink>
        </div>
    )
}

export default Mainlinks