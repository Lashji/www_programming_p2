import types from "./types";

const INITIAL_STATE = {
    products: [],
    filtered_products: [],
    isFetching: false,
    didInvalidate: false,
    error: undefined
};

function pageReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case types.REQUEST_PRODUCTS: {
            return Object.assign({}, state, {
                ...state,
                isFetching: true,
                didInvalidate: false
            })
        }
        case types.RECEIVE_PRODUCTS: {
            return Object.assign({}, state, {
                ...state,
                isFetching: false,
                didInvalidate: false,
                products: action.data.products,
                filtered_products: action.data.products
            })
        }
        case types.FILTER_PRODUCTS: {
            return Object.assign({}, state, {
                ...state,
                filtered_products: action.data.filtered_products
            })
        }
        case types.ERROR: {
            return Object.assign({}, state, {
                ...state,
                isFetching: false,
                didInvalidate: true,
                error: action.error
            })
        }
        default: {
            return state;
        }
    }
}

export default pageReducer;