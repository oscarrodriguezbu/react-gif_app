import React, { } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
//import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ categoria }) => {

    /* const [images, setImages] = useState([]);

    //con esto evito a que la peticion se cargue mas de una vez
    useEffect(() => {
        getGifs(categoria)
            .then(setImages);
    }, [categoria]);
 */


    const { data:images, loading } = useFetchGifs(categoria);//data:images se cambia el nombre data por images
    //console.log(loading);



    return (

        <>
            <h3>{categoria} </h3>
            {loading && <p className="animate__animated animate__flash">Cargando...</p>}



            <div className="card-grid">

                {
                    images.map(img => (

                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }

            </div>
        </>
    )
}


