import creators from "./actions";

// function logOut() {
//     return dispatch => {
//         dispatch(creators.logOut());
//     }
// }

// const switchToFrontPage = () => {
//     return dispatch => {
//         dispatch(creators.frontpage)
//     }
// }

const getProducts = () => {
    return dispatch => {
        dispatch(creators.requestProducts())
        return fetch("http://localhost:3000/api/products/")
            .then(response => {
                if (!response.ok) {
                    throw Error(response.statustext)
                }
                return response.json()
            })
            .then(json => dispatch(creators.receiveProducts(json)))
            .catch(err => dispatch(creators.error(err)))
    }
}

const filterProducts = (products) => {
    return dispatch => {
        creators.filterProducts(products)
    }
}

export default {
    getProducts,
    filterProducts
}