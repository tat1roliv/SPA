import { createStore } from 'redux'; 
import { combineReducers } from 'redux';

const initialState = {};

const reducers = combineReducers({
// Aqui virá o reducer da aplicação
});

const store = createStore( 
reducers, initialState, window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION()
);

export default store;