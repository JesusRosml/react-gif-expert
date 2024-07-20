//Orden de importaciones Primero React
//Luego importaciones de terceros 
//Luego nuestro codigo
import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
//Luego funciones que no son propiamente componentes


export const GifGrid = ({ category }) => {
    const { images, isLoading } = useFetchGifs( category );

    return (
        <>
            <h3 className="text-black text-2xl font-bold pb-5 pt-8">{ category }</h3>
            
            { isLoading && ( <h2>Cargando...</h2> ) }

            <div className=" columns-3 ">
                {
                    images.map( image => (
                        //Esa es una forma de esparcimos las propertis, es como mandar por separado cada prop al compenente hijo
                        <GifItem key={ image.id } { ...image }/>
                    ))
                }
            </div>
        </>
    )
}


    // const [ images, setImages ] = useState([]);

    // const getImages = async () => {
    //     const newImages = await getGifs( category );
    //     setImages( newImages );
    // }

    // useEffect( () => {
    //     //El primer argumento es un callback y el segundo son las condiciones para volver ejecutar el callback
    //     //No podemos volver asincrono el useEffect
    //     getImages();
    // }, []); //El arreglo indica que cuando el componente se renderiza por primera vez quiero disparar el efecto