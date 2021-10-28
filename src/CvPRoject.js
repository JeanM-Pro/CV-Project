import React, { useState } from 'react'
import { DatosPersonales } from './components/DatosPersonales';
import { RenderFinal } from './components/RenderFinal'
import './styles/cv.css'

export const CvPRoject = () => {

    const [principal, setPrincipal] = useState({
        nombre:'',
        titulo: '',
    });

    const handleInputChange = (e) => {
       setPrincipal({...principal, [e.target.name]: e.target.value})
    }





    return (
        <div className='contenedor-padre'>
            
            <DatosPersonales
            nombre = {principal.nombre}
            handleInputChange = {handleInputChange}
            titulo = {principal.titulo}
            />

            <RenderFinal
            nombre = {principal.nombre} 
            titulo = {principal.titulo}
            />
        </div>
    )
}
