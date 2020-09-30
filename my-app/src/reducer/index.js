import { combineReducers } from "redux";

import hoblyReducer from "./hobly";
import userReducers from "./user";



const rootReducer = combineReducers({
    hobby: hoblyReducer,
    user: userReducers

});
export default rootReducer;