import { useEffect, useState } from "react";
import { getGifs } from '../helpers/getGifs';


export const useFetchGifs = (categoria) => {


    const [state, setstate] = useState({
        data: [],
        loading: true
    });


    //con esto evito a que la peticion se cargue mas de una vez
    useEffect(() => {
        getGifs(categoria)
            .then(imagenes => {

                //setTimeout(() => {
                console.log(imagenes);
                setstate({
                    data: imagenes,
                    loading: false
                });
                // }, 3000);
            });

    }, [categoria]);


    /* setTimeout(() => {
        setstate({
            data: [1, 2, 3, 4, 5, 6, 7, 8, 9],
            loading: false
        })
    }, 3000); */

    return state; //regresa {data:[],loading:true}
}
