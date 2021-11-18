import React from 'react'
import { Outlet } from 'react-router-dom'
import SidebarAdmin from '../components/SidebarAdmin'

const LayoutSideAdmin = () => {
    return (
        <div className='flex w-screen h-screen'>
            <SidebarAdmin />
            <main className='flex w-full overflow-y-scroll p-5'><Outlet /></main>
        </div>
    )
}


export default LayoutSideAdmin;