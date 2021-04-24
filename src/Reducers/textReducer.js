import {NEW_TEXT} from '../actions/text'; 

export default function textReducer(state = ' ', action){
    switch(action.type){
        case NEW_TEXT:
            return action.fullText;
        default:
            return state;
    };
};

