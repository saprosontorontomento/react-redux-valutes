import { combineReducers } from 'redux';
import valutesReducer from './valutesReducer';

export default combineReducers({ // модули. Неймниг в него прокидываешь редюсеры
  valutes: valutesReducer,
  
});