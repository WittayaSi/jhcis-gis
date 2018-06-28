import axios from 'axios';

export const FETCH_HOMES_BEGIN   = 'FETCH_HOMES_BEGIN';
export const FETCH_HOMES_SUCCESS = 'FETCH_HOMES_SUCCESS';
export const FETCH_HOMES_FAILURE = 'FETCH_HOMES_FAILURE';

export const getAllhouse = () => {
    return dispatch => {
        dispatch(begin());
        axios.get('/api/homes')
            .then((res)=>{
                //console.log(res.data.data)
                dispatch(success(res.data.data));
            })
            .catch(err=>dispatch(failure(err)));
    }
}

const begin = () => ({
    type: FETCH_HOMES_BEGIN
});

const success = homes => ({
    type: FETCH_HOMES_SUCCESS,
    payload: { homes }
});
  
const failure = error => ({
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