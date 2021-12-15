import React from 'react'
import { Outlet } from 'react-router-dom'
import SidebarLider from '../components/SidebarLider'

const LayoutSideLider = () => {
    return (
        <div className='flex w-screen h-screen'>
            <SidebarLider />
            <main className='flex w-full overflow-y-scroll p-5'><Outlet /></main>
        </div>
    )
}


export default LayoutSideLider;