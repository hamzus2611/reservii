import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducers from './Reducers/rootReducers'
// const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const devTools = typeof window.__REDUX_DEVTOOLS_EXTENSION__ === "undefined"
 ? a => a
 : window.__REDUX_DEVTOOLS_EXTENSION__ &&
 window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(
 rootReducers,
 compose(applyMiddleware(thunk), devTools)
);

export default store;
