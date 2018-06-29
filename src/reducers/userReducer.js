import { USER_LOGGED_IN, USER_LOGGED_OUT } from "../types";

const userReducer = (state = {}, action = {}) => {
    switch(action.type){
        case USER_LOGGED_IN:
            return action.user;
        case USER_LOGGED_OUT:
            return {};
        default: 
            return state;
    }
}

export default userReducer;