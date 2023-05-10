'use client';

import React, { createContext, useState } from 'react'

export interface SidebarContextValue {
    isOpen: boolean;
    toggleSidebar: () => void
}

export const SidebarContext = createContext<SidebarContextValue>({
    isOpen: false,
    toggleSidebar: () => { }
});

interface SidebarProps {
    children: React.ReactNode
}

export default function Sidebar({ children }: SidebarProps) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen((prev) => !prev);
    }
    return (
        <div>
            <div className='text-5xl'>Something</div>
            <SidebarContext.Provider value={{ isOpen, toggleSidebar }}>
                {children}
            </SidebarContext.Provider>
        </div>
    )
}
