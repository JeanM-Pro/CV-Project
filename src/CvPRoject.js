import React, { useState } from 'react'
import { Contactos } from './components/Contactos';
import { Cursos } from './components/Cursos';
import { DatosPersonales } from './components/DatosPersonales';
import { Estudios } from './components/Estudios';
import { RenderFinal } from './components/RenderFinal';
import { Trabajo } from './components/Trabajo';
import './styles/cv.css'

const idRandom = () => (Math.random() * 100).toString();

export const CvPRoject = () => {
    
    const [trabajos, setTrabajos] = useState([{empresa:'Google', cargo:'Ingeniero de Software', trabajoDesde:'Ene 2020', trabajoHasta:'Ene 2030'}]);
    const [estudios, setEstudios] = useState([{instituto:'Udemy.com', carrera:'Software Engineer', desde:'Ene 2018', hasta:'Dic 2018'}]);
    const [cursos, setCursos] = useState([{academia:'Free Code Camp', curso:'JavaScript Algorithms and Data Structures', cursoDesde:'Ene 2019', cursoHasta:'Feb 2019'}]);
    const [principal, setPrincipal] = useState([]);


    const handleInputChange = (e ) => {
       setPrincipal({...principal, [e.target.name]: e.target.value})
    }
    const handleInputReset = (inputName) => {
       setPrincipal({...principal, [inputName]:''})
    }

    const borrarEstudio = id => {
        const newEstudio = estudios.filter(estudio => estudio.id !== id);
        setEstudios(newEstudio);
    }

    const borrarCurso = id => {
        const newCurso = cursos.filter(curso => curso.id !== id);
        setCursos(newCurso);
    }

    const borrarTrabajo = id => {
        const newTrabajo = trabajos.filter(trabajo => trabajo.id !== id);
        setTrabajos(newTrabajo);
    }

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
            borrarEstudio = {borrarEstudio}
            borrarCurso = {borrarCurso}
            borrarTrabajo= {borrarTrabajo}
            
            />
        </div>
    )
}
