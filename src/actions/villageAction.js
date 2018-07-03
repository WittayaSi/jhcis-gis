import axios from 'axios';
import {
    GET_VILLAGE_BEGIN,
    GET_VILLAGE_SUCCESS,
    GET_VILLAGE_FAILURE,
    SET_CURRENT_V
} from '../types';
import { successHouse, beginHouse } from './homeAction';

export const getAllVillage = () => {
    return dispatch => {
        axios.get('/api/village')
            .then((res)=>{
                const data = res.data.data[0];
                const vill = {
                    key: data.villcode,
                    text: data.villname,
                    value: data.villcode
                }; 
                console.log(vill);
                dispatch(success(res.data.data));
                dispatch(setCurrentV(vill));
            })
            .catch(err=>dispatch(failure(err)));
    }
}

export const setCurrentV = (v) => {
    const villcode = {
        villcode: v.key
    }
    return dispatch => {
        dispatch(beginHouse());
        axios.post('/api/house', villcode)
            .then((res) => {
                dispatch(setVillage(v));
                console.log(res.data)
                dispatch(successHouse(res.data.house));
            })
            .catch(err => console.log(err));
    }
    
}

export const setVillage = (v) => {
    return {
        type: SET_CURRENT_V,
        v
    }
}


export const begin = () => {
    return {
        type: GET_VILLAGE_BEGIN
    }
}

export const success = village => {
    return {
        type: GET_VILLAGE_SUCCESS,
        payload: {village}
    }
}

export const failure = err => {
    return {
        type: GET_VILLAGE_FAILURE,
        payload: { err }
    }
}