import axios from 'axios';
import {
    GET_VILLAGE_BEGIN,
    GET_VILLAGE_SUCCESS,
    GET_VILLAGE_FAILURE,
    SET_CURRENT_V
} from '../types'

export const getAllVillage = () => {
    return dispatch => {
        dispatch(begin());
        axios.get('/api/village')
            .then((res)=>{
                //console.log(res.data.data)
                dispatch(success(res.data.data));
            })
            .catch(err=>dispatch(failure(err)));
    }
}

export const setCurrentV = value => {
    return {
        type: SET_CURRENT_V,
        payload: value
    }
}

const begin = () => {
    return {
        type: GET_VILLAGE_BEGIN
    }
}

const success = village => {
    return {
        type: GET_VILLAGE_SUCCESS,
        payload: {village}
    }
}

const failure = err => {
    return {
        type: GET_VILLAGE_FAILURE,
        payload: { err }
    }
}