import creators from "./actions";

const switchToFrontPage = () => {
    return dispatch => {
        dispatch(creators.frontpage())
    }
}

const switchToAddPage = () => {
    return dispatch => {
        dispatch(creators.addProductPage())
    }
}


export default {
    switchToFrontPage,
    switchToAddPage
}