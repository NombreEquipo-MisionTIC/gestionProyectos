import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarLider from '../components/NavbarLider'

const LayoutNavLider = () => {
    return (
        <div className='mainContainerNav'>
            <NavbarLider />
            <main>
                <Outlet />
            </main>
        </div>
    )
}


export default LayoutNavLider;