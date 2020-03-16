import types from "./types";

const INITIAL_STATE = {
    signingUp: false,
    signUpError: "",
    signUpMessage: "",
};

function signUpReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case types.REQUEST_SIGN_UP: {
            return {
                ...state,
                signingUp: true,
            }
        }
        case types.SIGN_UP_ERROR: {
            return {
                ...state,
                signingUp: false,
                signUpError: action.error,
                signUpMessage: "",
            }
        }
        case types.SIGN_UP_SUCCESS: {
            return {
                ...state,
                signUpError: "",
                signUpMessage: action.message,
            }
        }
        default: {
            return state;
        }
    }
}

export default signUpReducer;