import React, { useState } from 'react'
import { Contactos } from './components/Contactos';
import { Cursos } from './components/Cursos';
import { DatosPersonales } from './components/DatosPersonales';
import { Estudios } from './components/Estudios';
import { RenderFinal } from './components/RenderFinal';
import { Trabajo } from './components/Trabajo';
import {propiedades} from './propiedades';
import './styles/cv.css'

const idRandom = () => (Math.random() * 100).toString();

export const CvPRoject = () => {

    const [trabajos, setTrabajos] = useState([]);
    const [estudios, setEstudios] = useState([]);
    const [cursos, setCursos] = useState([]);
    
    const [principal, setPrincipal] = useState({propiedades});

    const handleInputChange = (e ) => {
       setPrincipal({...principal, [e.target.name]: e.target.value})
    }
    const handleInputReset = (inputName) => {
       setPrincipal({...principal, [inputName]:''})
    }




    //   const crearEstudio = () => {
    //     setData([...data, { ...inputs, id: idRandom() }]);
    //   };

    //   const borrarEstudio = id => {
    //     const newData = data.filter(estudio => estudio.id !== id);
    //     setData(newData);
    //   };

    //   const resetearInputs = () => {
    //     setInputs(inputPorDefecto);
    //   };



    return (
        <div className='contenedor-padre'>
            
            <div className='contenedor'>
                <DatosPersonales
                nombre = {principal.nombre}
                handleInputChange = {handleInputChange}
                titulo = {principal.titulo}
                />

                <Contactos
                telefono = {principal.telefono}
                email = {principal.email}
                linkedin = {principal.linkedin}
                instagram = {principal.instagram}
                twitter = {principal.twitter}
                facebook = {principal.facebook}
                inputChange = {handleInputChange}
                inputReset = {handleInputReset}
                />

                <Estudios
                estudios = {estudios}
                setEstudios = {setEstudios}
                idRandom = {idRandom}
                />

                <Cursos 
                cursos={cursos} 
                setCursos={setCursos} 
                idRandom={idRandom}
                />

                <Trabajo 
                trabajos={trabajos}
                setTrabajos={setTrabajos}
                idRandom={idRandom}
                />

            </div>

            <RenderFinal
            nombre = {principal.nombre} 
            titulo = {principal.titulo}
            telefono = {principal.telefono}
            email = {principal.email}
            linkedin = {principal.linkedin}
            instagram = {principal.instagram}
            twitter = {principal.twitter}
            facebook = {principal.facebook}
            trabajos={trabajos}
            estudios={estudios}
            cursos={cursos}
            />
        </div>
    )
}
