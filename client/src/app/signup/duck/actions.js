import types from "./types";

function requestSignUp() {
    return {
        type: types.REQUEST_SIGN_UP,
    }
}

function signUpSuccess(message) {
    return {
        type: types.SIGN_UP_SUCCESS,
        message: message,
    }
}

function signUpError(error) {
    return {
        type: types.SIGN_UP_ERROR,
        error: error,
    }
}

export default {
    requestSignUp,
    signUpSuccess,
    signUpError,
};