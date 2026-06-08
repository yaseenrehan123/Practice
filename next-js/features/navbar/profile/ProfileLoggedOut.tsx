import React from 'react'
import { FaUser } from "react-icons/fa";

const ProfileLoggedOut = () => {
    return (
        <div className='flex items-center flex-col w-8 h-8'>
            <FaUser className='w-full h-full' />
        </div>
    )
}

export default ProfileLoggedOut