import {
    GET_VILLAGE_BEGIN,
    GET_VILLAGE_SUCCESS,
    GET_VILLAGE_FAILURE,
    SET_CURRENT_V
} from '../actions/villageAction';

const initialState = {
    currentv: {},
    villages: [],
    loading: false,
    error: null
};

const villageReducer = (state=initialState, action)=>{
    switch(action.type){
        case GET_VILLAGE_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };
        case GET_VILLAGE_SUCCESS:
            return {
                ...state,
                loading: false,
                villages: action.payload.village,
                currentv: action.payload.village[0]
            };
      
        case GET_VILLAGE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                villages: []
            };
        case SET_CURRENT_V:
            return {
                ...state,
                currentv: action.payload.currentv
            };
        default:
            return state;
    }
} 
export default villageReducer;