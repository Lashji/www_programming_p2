import creators from "./actions";
import jwt from 'jwt-decode'

function signIn(email, password, history) {
    return dispatch => {
        dispatch(creators.requestSignIn());
        return fetch("/api/users/login", {
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

                    const user = jwt(json.token)
                    console.log("USER = ", user)
                    dispatch(creators.receiveToken("Bearer " + json.token));
                    dispatch(creators.receiveRole(user.role))
                    dispatch(creators.receiveID(user.id))

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