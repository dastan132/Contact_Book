import { combineReducers } from "redux";
import { contactReducer } from "./contactreducers";

export default combineReducers({
    contact:contactReducer, 
    
})