import React, { useState } from 'react'
import cv from '../styles/cv.css'


export const DatosPersonales = ({nombre, handleInputChange, titulo}) => {



    return (
        <>
            <div className='contenedor'>
                <form>
                    <label>Nombre</label>
                    <input type='text' value={nombre} name="nombre" onChange={handleInputChange} />
                    <br/>
                    <label>Título</label>
                    <input type='text' value={titulo} name = 'titulo'  onChange={handleInputChange} />


                </form>

            </div>

        </>
    )
}
