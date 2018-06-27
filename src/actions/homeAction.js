import axios from 'axios';

export const FETCH_HOMES_BEGIN   = 'FETCH_HOMES_BEGIN';
export const FETCH_HOMES_SUCCESS = 'FETCH_HOMES_SUCCESS';
export const FETCH_HOMES_FAILURE = 'FETCH_HOMES_FAILURE';

export const fetchHomes = () => {
    return dispatch => {
        dispatch(fetchHomesBegin());
        return axios.get('/api/homes')
            .then((res)=>{
                //console.log(res.data.data)
                dispatch(fetchHomesSuccess(res.data.data));
            })
            .catch(err=>dispatch(fetchHomesFailure(err)));
    }
}

const fetchHomesBegin = () => ({
    type: FETCH_HOMES_BEGIN
});

const fetchHomesSuccess = homes => ({
    type: FETCH_HOMES_SUCCESS,
    payload: { homes }
});
  
const fetchHomesFailure = error => ({
    type: FETCH_HOMES_FAILURE,
    payload: { error }
});