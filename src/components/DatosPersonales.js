import React from 'react';


export const DatosPersonales = ({nombre, handleInputChange, titulo}) => {



    return (
        
        <div className='div-datospersonales'>
            <form className='divsito'>
                <div>
                    <span>Nombre <input type='text' value={nombre} name="nombre" onChange={handleInputChange} /></span>
                </div>
                <div>
                    <span>Título <input type='text' value={titulo} name ='titulo' onChange={handleInputChange} /></span>
                </div>                
            </form>
         </div>

        
    )
}
