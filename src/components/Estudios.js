import React from 'react'

export const Estudios = ({instituto, carrera, desde, hasta, inputChange}) => {
    

    return (

        <div className='div-estudios'>
            <h4>Estudios</h4>
            <form className='divsito'>
                <div className='contactos2'>
                    <span>Instituto <input name='instituto' value={instituto} onChange={inputChange}/></span>
                    <span>Carrera <input className='carrera' name='carrera' value={carrera} onChange={inputChange}/></span>
                </div>
                <div className='contactos2'>
                    <span>Desde <input name='desde' value={desde} onChange={inputChange}/></span>
                    <span>Hasta <input className='hasta' name='hasta' value={hasta} onChange={inputChange}/></span>
                </div>
            </form>
            <div className='div-buton'>
                <button className='boton-estudio' type="submit">Añadir</button>
            </div>
        </div>
    )
}
