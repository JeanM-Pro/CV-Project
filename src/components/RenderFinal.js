import React from 'react';
import cv from '../styles/cv.css'


export const RenderFinal = ({nombre, titulo}) => {



    return (
        <div className='contenedor'>

            <div className='header'>
                <h2>{nombre}</h2>
                <h5>{titulo}</h5>
            </div>

            <div className='cuerpo'>

                <div className='contactos'>

                    <h4><b>Contacto</b></h4>
                    <span><i className="fas fa-phone-alt"/></span>
                    <span> xx-xxx-xxx-xxxx</span>
                    <br/>
                    <span><i className="fas fa-envelope"/></span>
                    <span> example@mail.com</span>
                    <br/>
                    <span><i className="fab fa-linkedin"/></span>
                    <span> xxxxxxxxx</span>
                    <br/>
                    <span><i className="fab fa-instagram-square"/></span>
                    <span className="ml-4"> @xxxxxxxxx</span>
                    <br/>
                    <span><i className="fab fa-twitter"/></span>
                    <span> @xxxxxxxxx</span>
                    <br/>
                    <span><i className="fab fa-facebook-square"/></span>
                    <span> xxxxxxxxx</span>
                    <br/>
                    <br/>
                    <h4><b>Estudios</b></h4>
                    <p><b>Universidad Central de Venezuela</b> - Licenciado en Economía. 2010-2014</p>
                    

                </div>

                <div className='trabajos'>
                <h4><b>Cursos Realizados</b></h4>
                <ul>
                    <li>Corte y costura - <b>Academia de Corte y costura.</b> Julio 2010 - Junio 2010</li>
                </ul>
                <br/>
                <br/>
                <h4><b>Experiencia Laboral</b></h4>
                <p>Front End Designeer - <b>Google.</b> Enero 2022 - Actualidad</p>



                </div>

            </div>
            
        </div>
    )
}
