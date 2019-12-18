import { combineReducers } from 'redux';
import authenticationReducer from "./authentication/authenticationReducer";
import loadReducer from "./load/loadReducer";

//Add other reducers here please
export default combineReducers({
    authentication : authenticationReducer,
    load: loadReducer
});
