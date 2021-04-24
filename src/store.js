import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import textReducer from './reducers/textReducer';

// Esto es para la extension redux devtools de chrome
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    text: textReducer 
});


// Thunk -> eso es para procesos asincronos
export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);

// Pasos para usar Redux:
// 0. Aprender bien como se usan los reducers
// 1. Crear store
// 2. Crear Reducer
// 3. Crear la accion del reducer
// 4. Declarar el hook useDispatch de react redux
// 5. Llamar el dispatch de la accion que quieres hacer
// 6. Para usar los valores almacenados en redux usa useSeclector


export default store;