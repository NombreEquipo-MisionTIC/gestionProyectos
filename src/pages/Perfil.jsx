import React from 'react';
import { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_USUARIO } from '../graphql/usuarios/queries';
import { Link } from 'react-router-dom';

const Perfil = () => {

            const {data, error, loading} = useQuery(GET_USUARIO);

useEffect(() => {
                console.log("Usuario: ", data)
            }, [data])

            return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Estado</th>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Identificación</th>
                            <th>Correo</th>
                            <th>Rol</th>
                            <th>Editar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data && data.Usuario.map((u) => {
                            return (
                                <tr key={u._id}>
                                    <td>{u.estado}</td>
                                    <td>{u.nombre}</td>
                                    <td>{u.apellido}</td>
                                    <td>{u.identificacion}</td>
                                    <td>{u.correo}</td>
                                    <td>{u.rol}</td>
                                    <td>
                                        <Link to={`/admin/editar/${u._id}`}>
                                            <i className='fas fa-pen hover:text-yellow-500 ' />
                                        </Link>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            )
    
}


export default Perfil
