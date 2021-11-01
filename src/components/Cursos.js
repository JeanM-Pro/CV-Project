import React, {useState} from 'react'


export const Cursos = ({cursos, setCursos, idRandom}) => {
    const defaultValue = {curso:'', academia:'', cursoDesde:'', cursoHasta:''}
    const [inputs, setInputs] = useState(defaultValue);

    const handleInputChange = (e) => {
       setInputs({...inputs, [e.target.name]: e.target.value})
    }

    const crearCurso = () => {
        setCursos([...cursos, { ...inputs, id: idRandom() }]);
    };


    return (
        <div className='div-cursos'>
            <h4>Cursos</h4>
            <form 
                onSubmit={(e) => {
                e.preventDefault()
                crearCurso()
                setInputs(defaultValue)
            }}>
                <div className='divsito'>
                    <div className='contactos2'>               
                        <span>Curso <input className='curso' name='curso' required value={inputs.curso} onChange={handleInputChange}/></span>
                        <span>Instituto <input required name='academia' value={inputs.academia} onChange={handleInputChange}/></span>
                    </div>
                    <div className='contactos2'>
                        <span>Desde <input required type="date" name='cursoDesde' value={inputs.cursoDesde} onChange={handleInputChange}/></span>
                        <span>Hasta <input required className='hasta' type="date" name='cursoHasta' value={inputs.cursoHasta} onChange={handleInputChange}/></span>
                    </div>
                </div>
                <div className='div-buton'>
                    <button type="submit">Añadir</button>
                </div>
             </form>
        </div>
    )
}
