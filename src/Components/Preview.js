import React from 'react'
import {useSelector} from 'react-redux';

const Preview = () => {
    const text = useSelector(store => store.fullText);

    return (
        <div>
            <h4>{text}</h4>
        </div>
    )
}

export default Preview
