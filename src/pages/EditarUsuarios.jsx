import React, { useEffect } from 'react';
import '../style/styles.css'
import { useParams, Link } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { GET_USUARIO } from '../graphql/usuarios/queries';
import { EDITAR_USUARIO } from '../graphql/usuarios/mutations';
import useFormData from '../hooks/useFormData'
import { toast } from 'react-toastify';

const EditarUsuarios = () => {
  const { form, formData, updateFormData } = useFormData(null);
  const { _id } = useParams();
  const { data: queryData, error: queryError, loading: queryLoading } = useQuery(GET_USUARIO, {
    variables: { _id }
  })
  const [editarUsuario, { data: mutationData, error: mutationError, loading: mutationLoading }] = useMutation(EDITAR_USUARIO);

  const submitForm = (e) => {
    e.preventDefault();
    editarUsuario({
      variables: {_id, ...formData}
    })
  }
  
  useEffect(() => {
    if (mutationData){
      toast.success("Edición exitosa")
    }
  }, [mutationData])

  useEffect(() => {
    if (mutationError) {
      toast.error("Error editando el usuario")
    }
    if (queryError) {
      toast.error("Error consultando el usuario")
    }
  }, [queryError, mutationError])
  
  if (queryLoading) return <div>Cargando</div>
  
  return (
    <div className='contenedorInputs'>
      <form
        onSubmit={submitForm}
        onChange={updateFormData}
        ref={form}
        className='formulario'
      >
        <h2 className='text-center'>Edición de usuario</h2>
        <div>
          <span>Nombre</span>
          <input
            className='inputUsuario'
            type='text'
            name='nombre'
            defaultValue={queryData.Usuario.nombre}
          />
        </div>
        <div>
          <span>Apellido</span>
          <input
            className='inputUsuario'
            type='text'
            name='apellido'
            defaultValue={queryData.Usuario.apellido}
          />
        </div>
        <div>
          <span>Identificación</span>
          <input
            className='inputUsuario'
            type='text'
            name='identificacion'
            defaultValue={queryData.Usuario.identificacion}
          />
        </div>
        <div>
          <span>Correo</span>
          <input
            className='inputUsuario'
            type='text'
            name='correo'
            defaultValue={queryData.Usuario.correo}
          />
        </div>
        {/* <div>
          <span>Rol</span>
          <input
            className='inputUsuario'
            type='text'
            name='rol'
            defaultValue={queryData.Usuario.rol}
          />
        </div> */}
        <div>
          <span>Estado</span>
          <input
            className='inputUsuario'
            type='text'
            name='estado'
            defaultValue={queryData.Usuario.estado}
          />
        </div>
        <button
          type='submit'
          className='botonForm'
        >
          Hacer cambios
        </button>
      </form>
    </div>
  );
};

export default EditarUsuarios;