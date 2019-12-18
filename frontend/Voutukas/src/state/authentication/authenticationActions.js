import { SET_CODE, SET_URL, LOG_IN, LOG_OUT} from './authenticationActionTypes';

export const setCode = (code) => {
    return dispatch => {
        dispatch({
            type: SET_CODE,
            payload: code
        })
    }
}

export const setUrl = (url) => {
    return dispatch =>{
        dispatch({
            type: SET_URL,
            payload: url
        });
    }
}

export const logIn = (data) => {
    return dispatch => {
        dispatch({
            type: LOG_IN,
            payload: data
        })
    }
}

export const logOut = () => {
    return dispatch =>{
        dispatch({
            type: LOG_OUT
        })
    }
}