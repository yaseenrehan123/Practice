import React from 'react'
import Responsive from '../general/responsive'
import Navlink from './navlink'
import ProfileAvatar from './profileAvatar'
import ProfileIcon from './profileIcon'

const Mainbar = () => {
    return (
        <div className='flex items-center justify-between bg-black w-screen min-h-10 fixed
        top-0 left-0 px-5'>
            <div>Right</div>
            <div className='flex items-center justify-center gap-4'>
                <Responsive display="hidden" md="flex"><Navlink href={'/'}>Home</Navlink></Responsive>
                <Responsive display="hidden" md="flex"><Navlink href={'/about'}>About</Navlink></Responsive>
                <Responsive display="hidden" md="flex"><Navlink href={'/contact'}>Contact</Navlink></Responsive>
            </div>
            <div>
                <ProfileIcon />
            </div>
        </div>
    )
}

export default Mainbar