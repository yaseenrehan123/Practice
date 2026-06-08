"use client";
import React, { useEffect, useState } from 'react'
import { CgProfile } from "react-icons/cg";
import ProfileAvatar from './profileAvatar';
import type { ProfileAvatarProps, ProfileIconProps } from '@/lib/types';

const ProfileIcon = ({ avatarUrl, ...avatarProps }: ProfileAvatarProps) => {
    const [loggedIn, setLoggedIn] = useState<boolean>(false)
    const [logoError, setLogoError] = useState<boolean>(false);

    useEffect(() => {
        console.log(logoError);
    }, [logoError])
    return (
        <div className='flex items-center justify-center hover:cursor-pointer'
            onClick={() => { }}>
            {!loggedIn ?
                <CgProfile className={`text-white ${avatarProps.variant === "mainbar" ?
                    "text-4xl" : avatarProps.variant === "sidebar" ? "text-6xl"
                        : "text-2xl"}`} /> :
                <ProfileAvatar avatarUrl={avatarUrl} {...avatarProps} />
            }
        </div>
    )
}

export default ProfileIcon