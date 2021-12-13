import { gql } from '@apollo/client'

const EDITAR_USUARIO = gql`
    mutation EditarUsuario(
        $_id: String!, 
        $nombre: String, 
        $apellido: String, 
        $identificacion: String, 
        $correo: String, 
        $rol: Enum_Rol,
        $estado: Enum_EstadoU
    ) {
        editarUsuario(
            _id: $_id, 
            nombre: $nombre, 
            apellido: $apellido, 
            identificacion: $identificacion, 
            correo: $correo, 
            rol: $rol,
            estado: $estado
        ) {
            _id
            nombre
            apellido
            identificacion
            correo
            rol
            estado
        }
    }
`;

export {EDITAR_USUARIO}