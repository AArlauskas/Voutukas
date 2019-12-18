import {SET_CODE, LOG_IN, LOG_OUT, SET_URL} from './authenticationActionTypes';

let initialState = {
    code : null,
    fetchedAccessToken : null,
    fetchedDataTeam: {
        domain : null,
        id : null,
        image : null,
        name : null
    },
    fetchedDataUser: {
        id : null,
        name : ''
    },
    url : null,
    isLoggedIn: false
}

const authenticationReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CODE:
            return {
                ...state,
                code: action.payload
            };
        case SET_URL:
            return{
                ...state,
                url: action.payload
            };
        case LOG_IN:
            return{
                ...state,
                fetchedAccessToken: action.payload.fetchedAccess_token,
                fetchedDataTeam: {
                    domain: action.payload.fetchedDataTeam.domain,
                    id: action.payload.fetchedDataTeam.id,
                    image: action.payload.fetchedDataTeam.image_original,
                    name: action.payload.fetchedDataTeam.name
                },
                fetchedDataUser: {
                    id: action.payload.fetchedDataUser.id,
                    name: action.payload.fetchedDataUser.name
                },
                isLoggedIn: true
            };
        case LOG_OUT:
            return initialState;
        default:
            return state;

    }
};

export default authenticationReducer;
