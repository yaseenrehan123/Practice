"use client";
import React, { useState } from 'react'
import ProfileLoggedOut from './ProfileLoggedOut';
import ProfileLoggedIn from './ProfileLoggedIn';
import useSidebarStore from '@/stores/sidebarStore';

const Profile = () => {
    const [loggedIn, setLoggedIn] = useState<boolean>(true);
    const setSidebarEnabled = useSidebarStore((state) => state.setEnabled);

    const onClick = () => {
        setSidebarEnabled(true);
    }
    return (
        <div
            className='w-10 h-10 flex items-center justify-center bg-black rounded-3xl hover:cursor-pointer'
            onClick={onClick}>
            {!loggedIn && <ProfileLoggedOut />}
            {loggedIn && <ProfileLoggedIn />}
        </div>
    )
}

export default Profile