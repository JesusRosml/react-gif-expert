import { useState } from 'react';
/* Los atibutos HTML en REACT son conocidos como propertys */ 

export const AddCategory = ({ onNewCategory }) => {
    const [ inputValue, setInputValue ] = useState('');

    const onInputChange = ({ target }) => setInputValue( target.value );

    const onSubmit = ( event ) => {
        event.preventDefault();

        if( inputValue.trim().length <= 1 ) return;

        // setCategories( categories => [inputValue, ...categories] );
        onNewCategory( inputValue.trim() );
        setInputValue('');
    }

    return (
       <form  onSubmit={ onSubmit }>
            <input 
                onChange={ onInputChange }
                type="text" 
                value={ inputValue }
                placeholder="Buscar gifs"
                className="w-full bg-white rounded-md border border-customPurple text-black text-custom-size outline-none py-3 px-4"
            />
       </form>
    )
}
