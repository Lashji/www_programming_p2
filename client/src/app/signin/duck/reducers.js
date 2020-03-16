import types from "./types";

const INITIAL_STATE = {
    token: null,
    signingIn: false,
    signInError: "",
};

function signInReducer(state = INITIAL_STATE, action) {
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
        default: {
            return state;
        }
    }
}

export default signInReducer;