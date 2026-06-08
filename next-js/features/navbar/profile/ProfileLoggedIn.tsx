"use client";
import React, { useState } from 'react'

const ProfileLoggedIn = () => {
    const [username, setUsername] = useState<string>("M");
    return (
        <div className='text-2xl text-white'>
            {username}
        </div>
    )
}

export default ProfileLoggedIn