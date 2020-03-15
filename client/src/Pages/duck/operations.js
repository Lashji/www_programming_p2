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
                return response.json();
            })
            .then(json => {
                if (json.token) {
                    dispatch(creators.signInSuccess("Bearer " + json.token));
                }
                else if (json.error) {
                    dispatch(creators.signInError(json.error));
                }
            });
    }
}

function signUp(name, email, password) {
    return dispatch => {
        dispatch(creators.requestSignUp());
        return fetch("/api/users/sign-up", {
            method: "POST",
            headers: new Headers({
                "Content-Type": "application/json",
            }),
            body: JSON.stringify({ name: name, email: email, password: password })
        })
            .then(response => {
                return response.json();
            })
            .then(json => {
                if (json.message) {
                    dispatch(creators.signUpSuccess(json.message));
                }
                else if (json.error) {
                    dispatch(creators.signUpError(json.error));
                }
            })
    }
}

export default {
    signIn,
    signUp,
}