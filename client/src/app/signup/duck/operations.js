import creators from "./actions";

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
    signUp,
}