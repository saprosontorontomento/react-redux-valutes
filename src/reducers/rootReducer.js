import { combineReducers } from 'redux';
import valutesReducer from './valutesReducer';
import newsReducer from './newsReducer';

export default combineReducers({ // модули. Неймниг в него прокидываешь редюсеры
  valutes: valutesReducer,
  news: newsReducer,
  
});