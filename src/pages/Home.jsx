import React from 'react'
import Cards from '../components/Cards'

const Home = () => {
    return (
        <div>
            <div className='cardContainer'>
                <Cards
                    titulo='Proyecto'
                    objetivosG='faiudhfuidhaiuf'
                    objetivosE='jdzjkfbjdb'
                    fechainicio='15/11/2021'
                    fechaFin='15/11/2021'
                    presupuesto='1.000.000'
                    idLider='12345'
                    nombreLider='Juan'
                    estado='Activo'
                    fase='En desarollo'
                />
                <Cards
                    titulo='Proyecto'
                    objetivosG='faiudhfuidhaiuf'
                    objetivosE='jdzjkfbjdb'
                    fechainicio='15/11/2021'
                    fechaFin='15/11/2021'
                    presupuesto='1.000.000'
                    idLider='12345'
                    nombreLider='Juan'
                    estado='Activo'
                    fase='En desarollo'
                />
                <Cards
                    titulo='Proyecto'
                    objetivosG='faiudhfuidhaiuf'
                    objetivosE='jdzjkfbjdb'
                    fechainicio='15/11/2021'
                    fechaFin='15/11/2021'
                    presupuesto='1.000.000'
                    idLider='12345'
                    nombreLider='Juan'
                    estado='Activo'
                    fase='En desarollo'
                />
            </div>
        </div>
    )
}

export default Home