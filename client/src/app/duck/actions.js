import types from "./types";

function logOut() {
    return {
        type: types.LOG_OUT,
    }
}

export default {
    logOut,
};