import React from 'react'
import Mainlinks from './Mainlinks'
import Profile from './profile/Profile'

const Mainbar = () => {
    return (
        <div className='w-full h-full flex items-center justify-between'>
            <div></div>
            <div className='sm:flex hidden'>
                <Mainlinks />
            </div>
            <div>
                <Profile />
            </div>
        </div>
    )
}

export default Mainbar