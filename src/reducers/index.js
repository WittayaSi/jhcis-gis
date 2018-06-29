import { combineReducers } from 'redux';
import homeReducer from './homeReducer';
import villageReducer from './villageReducer';

export default combineReducers({
    homeReducer,
    villageReducer
})