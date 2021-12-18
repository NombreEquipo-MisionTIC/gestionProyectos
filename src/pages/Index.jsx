import React from 'react'
import { Link } from 'react-router-dom'
import '../style/styles.css'

const Index = () => {
    return (
        <>
            <div className="container">
                <div className="container-login">
                    <div className="login">
                        <img className="avatar" src="https://github.com/NombreEquipo-MisionTIC/gestionProyectos/blob/main/media/INITlogo3whitebackground.png?raw=true" alt="logo" />
                        <h2 className='tituloLogin'>Incio de sesión</h2>
                        <form className='formRegistro'>
                            <input type="text" name="username" placeholder="Usuario" className='username' />
                            <input type="password" name="passaword" placeholder="Contraseña" className='password' />
                            <input type="submit" value="Siguiente" className="submit" />
                            <button>
                                <Link to='/registro'>
                                    Crear cuenta...
                                </Link>
                            </button>
                        </form>
                        <p className='recuperarCont'>¿Ha olvidado su usuario o contraseña?</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Index