import React from 'react'

const Cards = ({ titulo, objetivosG, objetivosE, fechainicio, 
    fechaFin, presupuesto, idLider, nombreLider, estado, fase }) => {
    return (
        <div className='cardInside'>
            <span>{titulo}</span>
            <span>{fechainicio}</span>
            <span>{fechaFin}</span>
            <span>{presupuesto}</span>
            <span>{idLider}</span>
            <span>{nombreLider}</span>
            <span>{estado}</span>
            <span>{fase}</span>
            <p>{objetivosG}</p>
            <p>{objetivosE}</p>
        </div>
    )
}

export default Cards
 