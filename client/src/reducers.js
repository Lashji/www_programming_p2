import { combineReducers } from "redux";
import signInReducer from "./app/signin/duck";
import signUpReducer from "./app/signup/duck";

const rootReducer = combineReducers({
    signIn: signInReducer,
    signUp: signUpReducer,
});

export default rootReducer;