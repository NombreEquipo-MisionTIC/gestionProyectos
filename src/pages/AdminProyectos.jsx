import React from 'react'
import { useEffect } from 'react';
import { useQuery } from '@apollo/client'
import { GET_PROYECTOS } from '../graphql/proyectos/queries';

const AdminProyectos = () => {

    const {data, error, loading} = useQuery(GET_PROYECTOS);

    useEffect(() => {
        console.log("Proyectos: ", data)
    }, [data])

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Presupuesto</th>
                        <th>Líder</th>
                        <th>Estado</th>
                        <th>Fase</th>
                        <th>Editar</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.Proyectos.map((p) => {
                        return(
                            <tr key={p._id}>
                                <td>{p.nombre}</td>
                                <td>{p.presupuesto}</td>
                                <td>{p.lider.nombre + " " + p.lider.apellido}</td>
                                <td>{p.estado}</td>
                                <td>{p.fase}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default AdminProyectos
