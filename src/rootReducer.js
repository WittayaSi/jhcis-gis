import { combineReducers } from 'redux';
import homeReducer from './reducers/homeReducer';
import villageReducer from './reducers/villageReducer';
import userReducer from './reducers/userReducer';

export default combineReducers({
    homes: homeReducer,
    villages: villageReducer,
    user: userReducer
})