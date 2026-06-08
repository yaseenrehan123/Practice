"use client";

import useSidebarStore from '@/stores/sidebarStore';
import React from 'react'

const SidebarDisplayer = ({ children }: { children: React.ReactNode }) => {
    const enabled = useSidebarStore((state) => state.enabled);
    return (
        <div>
            {enabled && children}
        </div>
    )
}

export default SidebarDisplayer