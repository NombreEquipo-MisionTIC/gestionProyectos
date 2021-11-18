import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarAdmin from '../components/NavbarAdmin'

const LayoutNavAdmin = () => {
    return (
        <div className='mainContainerNav'>
            <NavbarAdmin />
            <main>
                <Outlet />
            </main>
        </div>
    )
}


export default LayoutNavAdmin;
