import React from 'react';
import '../styles/cv.css'
import { format} from 'date-fns';


export const RenderFinal = ({nombre, titulo, telefono, email, linkedin, instagram, twitter, facebook, cursos, estudios, trabajos}) => {



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
                        {estudios.map(estudio => <li key={estudio.id}><b>{estudio.instituto ? estudio.instituto : 'ingrese instituto'}.</b> - {estudio.carrera ? estudio.carrera : 'ingrese carrera'}. {estudio.desde ? format(new Date(estudio.desde), 'LLLL-yyyy') : 'ingrese fecha de inicio'} - {estudio.hasta ? format(new Date(estudio.hasta), 'LLLL-yyyy') : 'ingrese fecha de culminación'}</li>)}
                    </ul>
                </div>

                <div className='trabajos'>
                    <h4><b>Cursos Realizados</b></h4>

                    <ul>
                        {cursos.map(curso => <li key={curso.id}><b>{curso.academia ? curso.academia : 'ingrese instituto'}.</b> - {curso.curso ? curso.curso : 'ingrese curso'}. {curso.cursoDesde ? format(new Date(curso.cursoDesde), 'LLLL-yyyy') : 'ingrese fecha de inicio'} - {curso.cursoHasta ? format(new Date(curso.cursoHasta), 'LLLL-yyyy') : 'ingrese fecha de culminación'}.</li>)}
                    </ul>
                    
                    <h4><b>Experiencia Laboral</b></h4>
                    <ul> 
                        {trabajos.map(trabajo => <li key={trabajo.id}><b>{trabajo.empresa ? trabajo.empresa : 'ingrese empresa'}.</b> - {trabajo.cargo ? trabajo.cargo : 'ingrese cargo'}. {trabajo.trabajoDesde ? format(new Date(trabajo.trabajoDesde), 'LLLL-yyyy') : 'ingrese fecha de inicio'} - {trabajo.trabajoHasta ? format(new Date(trabajo.trabajoHasta), 'LLLL-yyyy') : 'ingrese fecha de culminación'}.</li>)}
                    </ul>


                </div> 

            </div>
            
        </div>
    )
}
