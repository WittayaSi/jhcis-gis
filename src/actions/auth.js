import { USER_LOGGED_IN, USER_LOGGED_OUT } from '../types';
import api from '../api';

export const userLoggedIn = (user) => ({
    type: USER_LOGGED_IN,
    user
})

export const userLoggedOut = () => ({
    type: USER_LOGGED_OUT
})

export const login = (credentials) => (dispatch) => 
    api.user.login(credentials).then(user => {
        localStorage.jhcisgisJWT = user.token;
        localStorage.jhcisgisUSR = btoa(user.username);
        sessionStorage.setItem('jhcisgisUSR', user.username);
        dispatch(userLoggedIn(user));
    });

export const logout = () => (dispatch) => {
        //localStorage.removeItem('jhcisgisJWT');
        //localStorage.removeItem('jhcisgisUSR');
        localStorage.clear();
        dispatch(userLoggedOut());
    };