import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import textReducer from './Reducers';

const middleWare = [thunk];

const initialState = {};

const store = createStore(textReducer, initialState, applyMiddleware(...middleWare));

export default store;