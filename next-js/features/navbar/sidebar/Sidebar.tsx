import React from 'react'
import Navlink from '../Navlink'
import CancelIcon from './CancelIcon'

const Sidebar = () => {
    return (
        <div className='flex items-stretch text-center flex-col fixed top-0 right-0 h-screen w-screen sm:w-1/2 md:w-1/4 lg:w-40 bg-black 
        pt-12 text-white gap-8'>
            <div className='absolute inset-0 opacity-95 bg-black blur-2xl -z-10'></div>
            <CancelIcon />
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

export default Sidebar