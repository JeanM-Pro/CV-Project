import React, {useState} from 'react'

export const Estudios = ({estudios, setEstudios, idRandom}) => {
    const defaultValue = {instituto:'', carrera:'', desde:'', hasta:''}
    const [inputs, setInputs] = useState(defaultValue);

    const handleInputChange = (e) => {
        setInputs({...inputs, [e.target.name]: e.target.value})
    }

    const crearEstudio = () => {
        setEstudios([...estudios, { ...inputs, id: idRandom() }]);
    };

    return (

        <div className='div-estudios'>
            <h4>Estudios</h4>
            <form
            onSubmit={(e)=>{
            e.preventDefault()
            crearEstudio()
            setInputs(defaultValue)
            }}
            >
                <div className='divsito'>
                    <div className='contactos2'>
                        <span>Instituto <input required name='instituto' value={inputs.instituto} onChange={handleInputChange}/></span>
                        <span>Carrera <input required className='carrera' name='carrera' value={inputs.carrera} onChange={handleInputChange}/></span>
                    </div>
                    <div className='contactos2'>
                        <span>Desde <input required type='date' name='desde' value={inputs.desde} onChange={handleInputChange}/></span>
                        <span>Hasta <input required className='hasta' type='date' name='hasta' value={inputs.hasta} onChange={handleInputChange}/></span>
                    </div>
                </div>

                <div className='div-buton'>
                    <button type="submit">Añadir</button>
                </div>
            </form>
            
        </div>
    )
}
