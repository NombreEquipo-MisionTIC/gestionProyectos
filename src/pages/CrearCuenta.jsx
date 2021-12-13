import React from 'react'

const CrearCuenta = () => {
    return (
        <>
            <div className="container">
                <div className="container-login">
                    <div className="login">
                        <img className="avatar" src="https://github.com/NombreEquipo-MisionTIC/gestionProyectos/blob/main/media/INITlogo3whitebackground.png?raw=true" alt="logo" />
                        <h2 className='tituloLogin'>Registro de usuario</h2>
                        <form className='formRegistro'>
                            <input type="text" name="username" placeholder="Usuario" class="username" />
                            <input type="password" name="passaword" placeholder="Contraseña" class="passaword" />
                            <input type="password" name="confPassaword" placeholder="Confirmación" class="passaword" />
                            <input id="submit" type="submit" value="Siguiente" className="submit" />
                            <button>Crear cuenta</button>
                        </form>
                        <p className='recuperacionPass'>¿Ha olvidado su usuario o contraseña?</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CrearCuenta
