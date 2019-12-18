import {LOADING_LOGIN_END, LOADING_LOGIN_START} from './loadActionTypes';

export const startLoadingLogin = () => {
    return dispatch => {
        dispatch({
            type: LOADING_LOGIN_START
        })
    }
};

export const endLoadingLogin = () => {
    return dispatch => {
        dispatch({
            type: LOADING_LOGIN_END
        })
    }
};
