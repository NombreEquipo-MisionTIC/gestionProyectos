import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarEstudiante from '../components/NavbarEstudiante'

const LayoutNavEstudiante = () => {
    return (
        <div className='mainContainerNav'>
            <NavbarEstudiante />
            <main>
                <Outlet />
            </main>
        </div>
    )
}


export default LayoutNavEstudiante;