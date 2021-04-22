import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { allText } from '../Actions/text';
import { useForm } from '../hooks/useForm'

const Editor = () => {
    
    const dispatch = useDispatch();

    const [ formValues, handleInputChanget ] = useForm({
        texto: ''
    });

    const { texto } = formValues;
    
    useEffect(() => {
        dispatch(allText(texto));
    }, [ dispatch, texto ]);

    return (
        <div id="editor">
            <textarea value={ texto } name="texto" onChange={ handleInputChanget }></textarea> 
        </div>
    )
}

export default Editor;
