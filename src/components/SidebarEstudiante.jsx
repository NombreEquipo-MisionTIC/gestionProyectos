import React from 'react'
import { Link } from 'react-router-dom';

const SidebarEstudiante = () => {
  return (
    <div>
      <div className='sidebar'>
        <header>INIT</header>
        <ul>
          <li>
            <Link to='perfil'>Perfil</Link>
          </li>
          <li>
            <Link to=''>Home</Link>
          </li>
 
          <li>
            <Link to='proyectos'>Proyectos</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SidebarEstudiante;