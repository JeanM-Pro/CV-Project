import React from 'react';
import '../styles/cv.css'
import { format, locale } from 'date-fns';


export const RenderFinal = ({nombre, titulo, telefono, email, linkedin, instagram, twitter, facebook, cursos}) => {



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
                    <h4><b>Estudios</b></h4>
                    {/* <ul>
                        {data.map(estudio => (
                            <li key={estudio.id}>
                                <b>{instituto}</b> - {carrera}. {desde} - {hasta}.
                            </li>
                        ))}
                    </ul> */}

                    {/* <p><b>{instituto ? instituto : 'ingrese instituto'}</b> - {carrera ? carrera : 'ingrese carrera'}. {desde ? desde : 'ingrese fecha de inicio'} - {hasta ? hasta : 'ingrese fecha de fin'}.</p> */}
                    

                </div>

                <div className='trabajos'>
                    <h4><b>Cursos Realizados</b></h4>

                    <ul>
                        
                        {cursos.map(curso => <li key={curso.id}><b>{curso.academia ? curso.academia : 'ingrese instituto'}.</b> - {curso.curso ? curso.curso : 'ingrese curso'}. {curso.cursoDesde ? format(new Date(curso.cursoDesde), 'LLLL-yyyy') : 'ingrese fecha de inicio'} - {curso.cursoHasta ? format(new Date(curso.cursoHasta), 'LLLL-yyyy') : 'ingrese fecha de fin'}.</li>)}
                    </ul>
                    {/* <br/>
                    <h4><b>Experiencia Laboral</b></h4>
                    <p><b>{empresa ? empresa : 'ingrese empresa'}.</b> - {cargo ? cargo : 'ingrese cargo'}.  {trabajoDesde ? trabajoDesde : 'ingrese fecha de inicio'} - {trabajoHasta ? trabajoHasta : 'ingrese fecha de fin'}</p>
                */}
                </div> 

            </div>
            
        </div>
    )
}
