import creators from "./actions";

function signIn(email, password, history) {
    return dispatch => {
        dispatch(creators.requestSignIn());
        return fetch("http://localhost:3000/api/users/login", {
                method: "POST",
                headers: new Headers({
                    "Content-Type": "application/json",
                }),
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            })
            .then(response => {
                console.log("response", response)
                return response.json();
            })
            .then(json => {
                console.log("logind response", json)
                if (json.token) {
                    dispatch(creators.receiveToken("Bearer " + json.token));
                    history.push("/");
                } else if (json.error) {
                    dispatch(creators.signInError(json.error));
                }
            });
    }
}

function logOut() {
    return dispatch => {
        dispatch(creators.logOut());
    }
}

export default {
    signIn,
    logOut,
}