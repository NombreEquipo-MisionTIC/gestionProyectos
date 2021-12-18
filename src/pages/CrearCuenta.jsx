import React from 'react'
import { Link } from 'react-router-dom';
import '../style/styles.css';
import { useQuery, useMutation } from '@apollo/client';
import { CREAR_USUARIO } from '../graphql/usuarios/mutations';
import useFormData from '../hooks/useFormData'



const CrearCuenta = () => {
    const { form, formData, updateFormData } = useFormData(null);
    const [crearUsuario, { data: mutationData, error: mutationError, loading: mutationLoading }] = useMutation(CREAR_USUARIO);

    const submitForm = (e) => {
        window.localStorage.setItem('rol', e.rol);
        e.preventDefault();
        crearUsuario({
            variables: { ...formData }
        })
    }
    return (
        <>
            <div className="container">
                <div className="container-login">
                    <div className="login">
                        <img className="avatar" src="https://github.com/NombreEquipo-MisionTIC/gestionProyectos/blob/main/media/INITlogo3whitebackground.png?raw=true" alt="logo" />
                        <h2 className='tituloLogin'>Registro de usuario</h2>
                        <form onSubmit={submitForm} onChange={updateFormData} ref={form} className='formRegistro'>  

                        <input type="text" name="nombre" placeholder="Nombre" class="username" />
                        <input type="text" name="apellido" placeholder="Apellido" class="username" />
                        <input type="text" name="correo" placeholder="correo" class="username" />
                        <input type="text" name="identificacion" placeholder="identificación" class="username" />
                        <input type="text" name="rol" placeholder="Rol" class="username" />


                        {/* <input id="submit" type="submit" value="Siguiente" className="submit" /> */}
                        <button
                            type='submit'
                            className='botonForm'
                        >
                            Hacer cambios
                        </button>

                    </form>
                    <p className='recuperacionPass'>¿Ha olvidado su usuario o contraseña?</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default CrearCuenta
