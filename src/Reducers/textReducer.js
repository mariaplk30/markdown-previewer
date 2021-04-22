import {NEW_TEXT} from '../Actions/text'; 

const defaultText = 'Esto es el texto por defecto';

export default function textReducer(state = defaultText, action){
    switch(action.type){
        case NEW_TEXT:
            return action.fullText;
        default:
            return state;
    };
};

