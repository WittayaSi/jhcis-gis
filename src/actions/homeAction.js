import axios from 'axios';
import { 
    FETCH_HOMES_BEGIN,
    FETCH_HOMES_FAILURE,
    FETCH_HOMES_SUCCESS 
} from '../types';

export const getAllhouse = () => {
    return dispatch => {
        dispatch(beginHouse());
        axios.get('/api/homes')
            .then((res)=>{
                //console.log(res.data.data)
                dispatch(successHouse(res.data.data));
            })
            .catch(err=>dispatch(failure(err)));
    }
}

export const beginHouse = () => ({
    type: FETCH_HOMES_BEGIN
});

export const successHouse = homes => ({
    type: FETCH_HOMES_SUCCESS,
    payload: { homes }
});
  
export const failure = error => ({
    type: FETCH_HOMES_FAILURE,
    payload: { error }
});

export const testDispatch = () => {
    console.log('55555555555555555');
    return {
        type: 'TESTEEEE',
        payload: 5
    }
}