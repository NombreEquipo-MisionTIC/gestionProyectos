import React from 'react'
import { useEffect } from 'react';
import { useQuery } from '@apollo/client'
import { GET_USUARIOS } from '../graphql/usuarios/queries';
import { Link } from 'react-router-dom';


const AdminUsuarios = () => {

    const { data, error, loading } = useQuery(GET_USUARIOS);

    useEffect(() => {
        console.log("Usuarios: ", data)
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
                    {data && data.Usuarios.map((u) => {
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

export default AdminUsuarios
