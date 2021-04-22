import React, {useState} from 'react';
import { useDispatch } from 'react-redux';

const Editor = () => {
    const dispatch = useDispatch();
    
    const handleChange = (event)  => {
        setText(event.target.value);
    }
    console.log(text);

    return (
        <div id="editor">
            <textarea value={text} onChange={handleChange}></textarea> 
        </div>
    )
}

export default Editor;
