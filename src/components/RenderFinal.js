import React from 'react';
import '../styles/cv.css'
import { format} from 'date-fns';


export const RenderFinal = ({nombre, titulo, telefono, email, linkedin, instagram, twitter, facebook, cursos, estudios, trabajos, borrarEstudio, borrarCurso, borrarTrabajo}) => {



    return (
        <div className='contenedor2'>

            <div className='header'>
                <h2>{nombre ? nombre : 'Ingrese su nombre'}</h2>
                <h5>{titulo ? titulo : 'Ingrese un titulo'}</h5>
            </div>

            <div className='cuerpo'>

                <div className='contactos'> 

                    <h4><b>Contacto</b></h4>
                    <span><i className="fas fa-phone-alt"/> {telefono ? telefono : ' ingrese numero telefónico'}</span>
                    <br/>
                    <span><i className="fas fa-envelope"/> {email ? email : ' ingrese correo electrónico'}</span>
                    <br/>
                    <span><i className="fab fa-linkedin"/> {linkedin ? linkedin : ' ingrese su linkedin'}</span>
                    <br/>
                    <span><i className="fab fa-instagram-square"/> {instagram ? instagram: ' ingrese su instagram'}</span>
                    <br/>
                    <span><i className="fab fa-twitter"/> {twitter ? twitter : ' ingrese su twitter'}</span>
                    <br/>
                    <span><i className="fab fa-facebook-square"/> {facebook ? facebook : ' ingrese su facebook'}</span>
                    <br/>
                    <br/>
                    <h4><b>Estudios</b></h4>

                    <ul>
                        {estudios.map(estudio => <li key={estudio.id}><b>{estudio.instituto}.</b> - {estudio.carrera}. {format(new Date(estudio.desde), 'LLL-yyyy')} -- {format(new Date(estudio.hasta), 'LLL-yyyy')}. <button className='boton-borrar' onClick={()=>{borrarEstudio(estudio.id)}}>x</button></li>)}
                    </ul>
                </div>

                <div className='trabajos'>
                    <h4><b>Cursos Realizados</b></h4>

                    <ul>
                        {cursos.map(curso => <li key={curso.id}><b>{curso.academia ? curso.academia : 'ingrese instituto'}.</b> - {curso.curso ? curso.curso : 'ingrese curso'}. {curso.cursoDesde ? format(new Date(curso.cursoDesde), 'LLL-yyyy') : 'ingrese fecha de inicio'} -- {curso.cursoHasta ? format(new Date(curso.cursoHasta), 'LLL-yyyy') : 'ingrese fecha de culminación'}. <button className='boton-borrar' onClick={()=>{borrarCurso(curso.id)}}>x</button></li>)}
                    </ul>
                    
                    <h4><b>Experiencia Laboral</b></h4>
                    <ul> 
                        {trabajos.map(trabajo => <li key={trabajo.id}><b>{trabajo.empresa}.</b> - {trabajo.cargo}. {format(new Date(trabajo.trabajoDesde), 'LLL-yyyy')} -- {format(new Date(trabajo.trabajoHasta), 'LLL-yyyy')}. <button className='boton-borrar' onClick={()=>{borrarTrabajo(trabajo.id)}}>x</button></li>)}
                    </ul>


                </div> 

            </div>
            
        </div>
    )
}
