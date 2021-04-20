import React, {useState} from 'react'

const Editor = () => {
    const [text, setText] = useState('');
    
    const handleChange = (event) => {
        setText(event.target.value);
    }
    console.log(text);

    return (
        <div id="editor">
            <textarea value={text} onChange={handleChange}></textarea> 
        </div>
    )
}

export default Editor
