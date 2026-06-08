import React from 'react'
import SidebarDisplayer from './sidebar/SidebarDisplayer'
import dynamic from 'next/dynamic';
import Mainbar from './Mainbar';

const Sidebar = dynamic(() => import("./sidebar/Sidebar"));

const Navbar = () => {
    return (
        <div className='fixed top-0 left-0 w-screen h-auto min-h-10 bg-black p-2'>
            <Mainbar />
            <SidebarDisplayer>
                <Sidebar />
            </SidebarDisplayer>
        </div>
    )
}

export default Navbar