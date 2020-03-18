import types from "./types";

const requestProducts = () => {
    return {
        type: types.REQUEST_PRODUCTS
    }
}

const receiveProducts = (json) => {
    console.log("receiving products", json)
    return {
        type: types.RECEIVE_PRODUCTS,
        data: json
    }
}

const filterProducts = (filteredProducts) => {
    return {
        type: types.FILTER_PRODUCTS,
        data: filteredProducts
    }
}

const error = (err) => {
    return {
        type: types.ERROR,
        data: err
    }
}

export default {
    requestProducts,
    receiveProducts,
    filterProducts,
    error
};