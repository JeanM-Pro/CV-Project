import React from 'react'
import '../styles/cv.css'


export const Contactos = ({telefono, email, linkedin, instagram, twitter, facebook, inputChange, inputReset}) => {

    return (

        <div className='div-contactos'>

            <h4>Contacto</h4>

            <form className='divsito'>
                
                <div className='contactos2'>    
                    <span>Teléfono <input type='number' value={telefono} name='telefono' onChange={inputChange}/></span>
                    <span>E-mail <input className='email' type='email' value={email} name='email' onChange={inputChange}/></span>
                    <span>Linkedin <input className='linkedin' type='text' value={linkedin} name='linkedin' onChange={inputChange}/></span>
                </div>

                <div className='contactos2'>    
                    <span>Instagram <input type='text' value={instagram} name='instagram' onChange={inputChange}/></span>
                    <span>Twitter <input className='twitter' type='text' value={twitter} name='twitter' onChange={inputChange}/></span>
                    <span>Facebook <input className='facebook' type='text' value={facebook} name='facebook' onChange={inputChange}/></span>
                </div>
            </form>
        </div>
    )
}
