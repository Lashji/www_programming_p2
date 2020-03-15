import types from "./types";

function requestSignIn() {
    return {
        type: types.REQUEST_SIGN_IN,
    }
}

function receiveToken(token) {
    return {
        type: types.RECEIVE_TOKEN,
        token: token,
    }
}

function signInError(error) {
    return {
        type: types.SIGN_IN_ERROR,
        error: error,
    }
}

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
    requestSignIn,
    receiveToken,
    signInError,
    requestSignUp,
    signUpSuccess,
    signUpError,
};