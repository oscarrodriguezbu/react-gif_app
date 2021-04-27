//rafc tab

import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategorias }) => {


    const [inputValue, setinputValue] = useState('')

    //se dispare cuando el valor cambie
    const handleInputChange = (e) => {
        setinputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Submite hecho')
        console.log({ setCategorias })

        //SI ES MAYOR A DOS LETRAS
        if (inputValue.trim().length > 2) {
            setCategorias(categ => [inputValue,...categ]);
            setinputValue('');
        }
    }



    return (
        <form onSubmit={handleSubmit} >
            <h1>{inputValue}</h1>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            ></input>
        </form>
    )
}


//funcion setCategorias requerida
AddCategory.propTypes = {
    setCategorias: PropTypes.func.isRequired
}
