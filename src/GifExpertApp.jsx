import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
    /* 
        No se debe colocar ningun hook de react en ninguna sentencia condicional, esa es una regla de oro, 
        eso es por que react va a perder la relacion entre el orden de los hooks, ya que react identifica 
        los state por orden en que se colocaron.

        Prohibido:

        if( true ) {
            const [ categories, setCategories ] = useState( ['One Punch', 'Dragon Ball'] );
        }
    */

    //Es conveniente asignar un valor inicial a nuestro useState para evitar posibles errores
    const [ categories, setCategories ] = useState( ['One Punch'] );

    const onAddCategory = ( newCategory ) => {
        if( categories.includes( newCategory ) ) return;

        setCategories( [ newCategory, ...categories] ); 
        // setCategories( cat => [...cat, category] ); | Segunda forma
    }

    return (
        <>
            <h1 className="text-black text-2xl font-bold pb-5">GifExpertApp</h1>

            <AddCategory onNewCategory={ onAddCategory }/>
        
            {
                //Si creamos elementos HTML de manera dinamica se debe colocar el atributo key (Unico)
                //No se debe usar el indice de un arreglo como un valor de key
                categories.map( category => (
                    <GifGrid key={ category } category={ category } />
                ))
            }
        </>
    );
};
