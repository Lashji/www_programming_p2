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
        accepted: json.filter(i => i.state === 1),
        pending: json.filter(i => i.state === 0)
    }
}

const filterProducts = (filteredProducts) => {
    return {
        type: types.FILTER_PRODUCTS,
        data: filteredProducts
    }
}

const requestSingle = () => {
    return {
        type: types.REQUEST_SINGLE
    }
}

const receiveSingle = (id) => {
    return {
        type: types.RECEIVE_SINGLE,
        id: id
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
    requestSingle,
    receiveSingle,
    error
};