import {
    combineReducers
} from "redux";
import signInReducer from "./app/signin/duck";
import signUpReducer from "./app/signup/duck";
import pageReducer from './app/duck'

const rootReducer = combineReducers({
    page: pageReducer,
    signIn: signInReducer,
    signUp: signUpReducer,
});

export default rootReducer;