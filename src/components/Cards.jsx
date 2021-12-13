import React from 'react'

const Cards = ({ titulo, objetivosG, objetivosE, fechainicio,
    fechaFin, presupuesto, idLider, nombreLider, estado, fase }) => {
    return (
        <div className='cardInside'>
            <span>{titulo}</span>
            <div className='fechas'>
                <span>{fechainicio}</span>
                <span>{fechaFin}</span>
            </div>
            <span>{presupuesto}</span>
            <div className='liderCard'>
                <span>{idLider}</span>
                <span>{nombreLider}</span>
            </div>
            <div className='objetivos'>
                <div>
                    <p>{objetivosG}</p>
                </div>
                <div>
                    <p>{objetivosE}</p>
                </div>
            </div>
            <div className='info'>
                <span>{estado}</span>
                <span>{fase}</span>
            </div>
        </div>
    )
}

export default Cards
