import {LOADING_LOGIN_END, LOADING_LOGIN_START} from "./loadActionTypes";

let initialState = {
    loginLoading: false
}

const loadReducer = (state = initialState, action) =>{
    switch(action.type){
        case LOADING_LOGIN_START:
            return {...state, loginLoading: true};
        case LOADING_LOGIN_END:
            return {...state, loginLoading: false};
        default:
            return state;
    }
};

export default  loadReducer;
