import React from 'react'
import {useSelector} from 'react-redux';
import marked from 'marked';

const Preview = () => {

    const text = useSelector(store => store.text);

    return (
        <div id="preview"
        dangerouslySetInnerHTML={{
          __html: marked(text, {gfm: true, breaks: true})
        }}
        >
        </div>
    )
}

export default Preview;
