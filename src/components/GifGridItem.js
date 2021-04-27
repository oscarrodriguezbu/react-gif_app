import React from 'react'

export const GifGridItem = ({id, title, url}) => { //recibe unas propiedades
    console.log({id, title, url});

    return (//classname es para especificar cosas con react pero es lo mismo que class
        <div className= "card animate__animated animate__bounce animate__delay-2s">
           <img 
           src={url} alt = {title} > 
           </img>
           <p>{title} </p>
        </div>
    )
}
