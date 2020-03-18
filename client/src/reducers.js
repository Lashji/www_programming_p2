import {
    combineReducers
} from "redux";
import signInReducer from "./app/signin/duck";
import signUpReducer from "./app/signup/duck";
import pageReducer from './app/duck'
import productReducer from './app/frontpage/productReducer'
const rootReducer = combineReducers({
    page: pageReducer,
    signIn: signInReducer,
    signUp: signUpReducer,
    products: productReducer
});

export default rootReducer;