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

function logOut() {
    return {
        type: types.LOG_OUT,
    }
}

function receiveRole(role) {
    return {
        type: types.RECEIVE_ROLE,
        role
    }
}

function receiveID(ID) {
    return {
        type: types.RECEIVE_ID,
        ID
    }
}

export default {
    requestSignIn,
    receiveToken,
    signInError,
    logOut,
    receiveRole,
    receiveID
};