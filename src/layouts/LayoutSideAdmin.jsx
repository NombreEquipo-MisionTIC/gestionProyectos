import React from 'react'
import { Outlet } from 'react-router-dom'
import SidebarAdmin from '../components/SidebarAdmin'

const LayoutSideAdmin = () => {
    return (
        <div>
            <SidebarAdmin />
            <Outlet />
        </div>
    )
}


export default LayoutSideAdmin;