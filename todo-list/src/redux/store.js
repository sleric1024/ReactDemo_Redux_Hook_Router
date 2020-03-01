import {createStore, applyMiddleware, compose} from 'redux';
import rootReducers from './reducers';
import thunk from 'redux-thunk';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancer(applyMiddleware(thunk));

const store = createStore(rootReducers, enhancer);

export default store;