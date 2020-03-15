import { combineReducers } from "redux";
import userReducer from "./Pages/duck";

const rootReducer = combineReducers({
    user: userReducer,
});

export default rootReducer;