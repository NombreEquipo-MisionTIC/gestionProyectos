import React from 'react'
import '../style/styles.css'

const Index = () => {
    return (
        <>
            <div className="container">
                <div className="container-login">
                    <div className="login">
                        <img className="avatar" src="https://github.com/Runteams-MisionTIC/Proyecto_web/blob/main/media/logo.png?raw=true" alt="logo" />
                        <h2 className = 'tituloLogin'>Incio de sesión</h2>
                        <form>
                            <input type="text" name="username" placeholder="Usuario" className='username'/>
                            <input type="password" name="passaword" placeholder="Contraseña" className='password'/>
                            <input type="submit" value="Siguiente" className="submit" />
                        </form>
                        <button>Crear cuenta</button>
                        <p className='recuperarCont'>¿Ha olvidado su usuario o contraseña?</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Index