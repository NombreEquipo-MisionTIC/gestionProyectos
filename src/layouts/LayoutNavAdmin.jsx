import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarAdmin from '../components/NavbarAdmin'

const LayoutNavAdmin = () => {
    return (
        <div>
            <NavbarAdmin />
            <Outlet />
        </div>
    )
}


export default LayoutNavAdmin;
