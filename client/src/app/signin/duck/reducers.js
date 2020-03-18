import types from "./types";

const INITIAL_STATE = {
    role: undefined,
    ID: undefined,
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
        case types.LOG_OUT: {
            console.log("firing logout")
            return {
                ...state,
                token: null,
                role: undefined,
                ID: undefined
            }
        }
        case types.RECEIVE_ROLE: {
            console.log("receiving action ", action.role)
            return Object.assign({}, state, {
                ...state,
                role: action.role
            })
        }
        case types.RECEIVE_ID: {
            return Object.assign({}, state, {
                ...state,
                ID: action.ID
            })
        }
        default: {
            return state;
        }
    }
}

export default signInReducer;