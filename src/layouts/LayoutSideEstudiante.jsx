import React from 'react'
import { Outlet } from 'react-router-dom'
import SidebarEstudiante from '../components/SidebarEstudiante'

const LayoutSideEstudiante = () => {
    return (
        <div className='flex w-screen h-screen'>
            <SidebarEstudiante />
            <main className='flex w-full overflow-y-scroll p-5'><Outlet /></main>
        </div>
    )
}


export default LayoutSideEstudiante;