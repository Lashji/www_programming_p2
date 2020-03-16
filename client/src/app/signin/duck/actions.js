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

export default {
    requestSignIn,
    receiveToken,
    signInError,
};