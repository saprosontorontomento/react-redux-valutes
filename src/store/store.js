import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk'

const composedEnhancer = applyMiddleware(thunk);

const store = createStore(rootReducer, composedEnhancer); // запускаем, закидываем в Provider, чтобы был доступ ко всей хуйне

export default store;