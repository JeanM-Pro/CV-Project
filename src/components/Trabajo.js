import React, {useState} from 'react'


export const Trabajo = ({trabajos, setTrabajos, idRandom}) => {
    const defaultValue = {empresa:'', cargo:'', trabajoDesde:'', trabajoHasta:''}
    const [inputs, setInputs] = useState(defaultValue);

    const handleInputChange = (e ) => {
       setInputs({...inputs, [e.target.name]: e.target.value})
    }

    const crearTrabajo = () => {
        setTrabajos([...trabajos, { ...inputs, id: idRandom() }]);
    };


    return (
        <div className='div-trabajo'>
            <h4>Experiencia Laboral</h4>
            <form
            onSubmit={(e)=>{
                e.preventDefault()
                crearTrabajo()
                setInputs(defaultValue)
            }}>
                <div className='divsito'>
                    <div className='contactos2'>
                        <span>Empresa <input name='empresa' required value={inputs.empresa} onChange={handleInputChange}/></span>
                        <span>Cargo <input className='cargo' required name='cargo' value={inputs.cargo} onChange={handleInputChange}/></span>
                    </div>
                    <div className='contactos2'>
                        <span>Desde <input type='date' name='trabajoDesde' required value={inputs.trabajoDesde} onChange={handleInputChange}/></span>
                        <span>Hasta <input type= 'date' className='trabajoHasta' required name='trabajoHasta' value={inputs.trabajoHasta} onChange={handleInputChange}/></span>
                    </div>
                </div>
                <div className='div-buton'>
                    <button type="submit">Añadir</button>
                </div>
            </form>
        </div>
    )
}
