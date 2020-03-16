import creators from "./actions";

function logOut() {
    return dispatch => {
        dispatch(creators.logOut());
    }
}

export default {
    logOut,
}