import types from "./types";

const INITIAL_STATE = {
    token: null,
    signingIn: false,
    signInError: "",
    signingUp: false,
    signUpError: "",
    signUpMessage: "",
};

function userReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case types.REQUEST_SIGN_IN: {
            return {
                ...state,
                signingIn: true,
            }
        }
        case types.SIGN_IN_ERROR: {
            return {
                ...state,
                signingIn: false,
                signInError: action.error,
                token: null,
            }
        }
        case types.RECEIVE_TOKEN: {
            return {
                ...state,
                signingIn: false,
                signInError: "",
                token: action.token,
            }
        }
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

export default userReducer;