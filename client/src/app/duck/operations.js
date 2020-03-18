import creators from "./actions";

// function logOut() {
//     return dispatch => {
//         dispatch(creators.logOut());
//     }
// }

const switchToFrontPage = () => {
    return dispatch => {
        dispatch(creators.frontpage)
    }
}


export default {
    switchToFrontPage,
}