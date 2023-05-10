'use client';

import Sidebar, { SidebarContext, SidebarContextValue } from '@/context/Sidebar'
import React, { useContext } from 'react'

export default function SidebarNav() {

    let { isOpen, toggleSidebar} = useContext<SidebarContextValue>(SidebarContext)
  return (
    <div>
        <div onClick={toggleSidebar}>Sidebar Nav</div>
        {
            isOpen && (
                <div className='text-3xl'>Is True</div>
            )
        }
        <div onClick={toggleSidebar}>Sub Sidebar Nav</div>
    </div>
  )
}
