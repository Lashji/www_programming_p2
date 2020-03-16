import creators from "./actions";

function signIn(email, password) {
    return dispatch => {
        dispatch(creators.requestSignIn());
        return fetch("/api/users/login", {
            method: "POST",
            headers: new Headers({
                "Content-Type": "application/json",
            }),
            body: JSON.stringify({ email: email, password: password })
        })
            .then(response => {
                console.log(response);
                return response.json();
            })
            .then(json => {
                if (json.token) {
                    dispatch(creators.receiveToken("Bearer " + json.token));
                }
                else if (json.error) {
                    dispatch(creators.signInError(json.error));
                }
            });
    }
}

export default {
    signIn,
}