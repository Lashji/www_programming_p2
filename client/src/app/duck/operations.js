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

const switchToAdminPage = () => {
    return dispatch => {
        dispatch(creators.adminPage())
    }
}

export default {
    switchToFrontPage,
    switchToAddPage,
    switchToAdminPage
}