import { gql } from '@apollo/client'

const GET_PROYECTOS = gql`
    query Proyectos {
        Proyectos {
            _id
            nombre
            presupuesto
            objetivosGenerales
            objetivosEspecificos
            fechaInicio
            fechaFin
            estado
            fase
            lider {
                nombre
                apellido
            }
        }
    }
`

export { GET_PROYECTOS }