export const getGifs = async( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=1jT8fhk8n0zLPGCzpca4h4h11avfHRbZ&q=${ category }&limit=10`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    //Destructuracion de solo claves que necesitamos para nuestra aplicación
    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;
}