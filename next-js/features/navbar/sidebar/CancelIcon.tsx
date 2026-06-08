"use client";
import useSidebarStore from '@/stores/sidebarStore';
import React from 'react'
import { RxCross2 } from "react-icons/rx";

const CancelIcon = () => {
    const setSidebarEnabled = useSidebarStore((state) => state.setEnabled);
    return (
        <div className='flex items-center justify-center text-4xl text-red-500 hover:text-red-700
        hover:cursor-pointer transition-all duration-150 absolute top-2 left-0'
            onClick={() => setSidebarEnabled(false)}>
            <RxCross2 className='scale-150' />
        </div>
    )
}

export default CancelIcon