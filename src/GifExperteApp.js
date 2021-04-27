
import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExperteApp = () => {

    // const categorias = [ 'One Punch', 'Samurai X', 'Dragon Ball'];
    const [categorias, setCategorias] = useState(['Neon Genesis Evangelion']);

    //const handleAdd = () => {
    //setCategorias([...categorias, 'Neon Genesis Evangelion']);

    //usando callbacks
    //   setCategorias( categ => [...categ, 'Neon Genesis Evangelion']);
    //  }


    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategorias={setCategorias} />
            <hr></hr>

            <ol>
                {
                    categorias.map(categoria => (
                       <GifGrid 
                       key={categoria}
                       categoria = { categoria } />
                    ))

                    //return <li key={categoria}> {categoria} </li>


                }
            </ol>
        </>
    )
}
//el key es el id que se requiere por cada li
//el map es como un forech en arrays

// <button onClick={ handleAdd} >Agregar</button>

// <AddCategory setCategorias={ setCategorias } />  manda un prop al otro lado y se desestructura con {}