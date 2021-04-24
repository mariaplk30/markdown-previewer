import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { allText } from '../actions/text';
import { useForm } from '../hooks/useForm'

const Editor = () => {
    
    const dispatch = useDispatch();

    const [ formValues, handleInputChanget ] = useForm({
        texto: defaultText
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

const defaultText = `# Welcome to my React Markdown Previewer!
## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.
\`\`\`
// this is multi-line code:
function anotherExample(firstLine, lastLine) {
  if (firstLine == \'\`\`\`\' && lastLine == \'\`\`\`\') {
    return multiLineCode;
  }
}
\`\`\`
<b>bold</b>  
You can also make text **bold**... whoa! 
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.
There's also [links](https://www.freecodecamp.com), and
> Block Quotes!
And if you want to get really crazy, even tables:
Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.
- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.
1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:
![React Logo w/ Text](https://goo.gl/Umyytc)`