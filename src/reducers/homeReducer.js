import {
    FETCH_HOMES_BEGIN,
    FETCH_HOMES_SUCCESS,
    FETCH_HOMES_FAILURE
} from '../actions/homeAction';

const initialState = {
    data: [],
    loading: false,
    error: null
};

const homeReducer = (state=initialState, action)=>{
    switch(action.type){
        case FETCH_HOMES_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };
        case FETCH_HOMES_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload.homes
            };
      
          case FETCH_HOMES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                data: []
            };
        default:
            return state;
    }
} 
export default homeReducer;