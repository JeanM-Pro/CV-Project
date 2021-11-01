import React, {useState} from 'react'

export const Trabajo = () => {

    const [inputs, setInputs] = useState({});

    const handleInputChange = (e ) => {
       setInputs({...inputs, [e.target.name]: e.target.value})
    }
    return (
        <div className='div-trabajo'>
            <h4>Experiencia Laboral</h4>
            <form>
                <div className='divsito'>
                    <div className='contactos2'>
                        <span>Empresa <input name='empresa' value={inputs.empresa} onChange={handleInputChange}/></span>
                        <span>Cargo <input className='cargo' name='cargo' value={inputs.cargo} onChange={handleInputChange}/></span>
                    </div>
                    <div className='contactos2'>
                        <span>Desde <input name='trabajoDesde' value={inputs.trabajoDesde} onChange={handleInputChange}/></span>
                        <span>Hasta <input className='trabajoHasta' name='trabajoHasta' value={inputs.trabajoHasta} onChange={handleInputChange}/></span>
                    </div>
                </div>
                <div className='div-buton'>
                    <button type="submit">Añadir</button>
                </div>
            </form>
        </div>
    )
}
