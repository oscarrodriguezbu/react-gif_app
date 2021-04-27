
export const getGifs   = async (categoria) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=XUWg9f7WklTnBFdi4gckyiMtdWCUc6XB&q=${encodeURI (categoria)}&limit=10`;
    const respuesta = await fetch(url);                                                            //encodeUri es para evitar inconsistencias con las busquedas
    const { data } = await respuesta.json();

    console.log(data);

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    console.log(gifs);
    //setImages(gifs);
    return gifs;
};

//getGifs();