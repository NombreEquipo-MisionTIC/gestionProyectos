import React from 'react'
import { Link } from 'react-router-dom'

const NavbarAdmin = () => {
    return (
        <div>
            <header className='headerNavbar'>
                <img className='logo' alt='Logo' src='https://github.com/NombreEquipo-MisionTIC/gestionProyectos/blob/main/media/INITlogo3whitebackground.png?raw=true' />
                <nav>
                    <ul className='navLinks'>
                        <li>
                            <Link to=''>Home</Link>
                        </li>
                        <li>
                            <Link to='usuarios'>Usuarios</Link>
                        </li>
                        <li>
                            <Link to='proyectos'>Proyectos</Link>
                        </li>
                    </ul>
                </nav>
                <Link to='perfil' className='buttonPerfil'><button>Perfil</button></Link>
            </header>
        </div>
    )
}

export default NavbarAdmin
