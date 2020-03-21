import types from "./types";

const INITIAL_STATE = {
    products: [],
    filtered_products: [],
    pending_products: [],
    isFetching: false,
    didInvalidate: false,
    error: undefined,
    selectedProduct: undefined
};

function productReducer(state = INITIAL_STATE, action) {
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
                products: action.accepted,
                filtered_products: action.accepted,
                pending_products: action.pending
            })
        }
        case types.FILTER_PRODUCTS: {
            return Object.assign({}, state, {
                ...state,
                filtered_products: action.data
            })
        }
        case types.REQUEST_PRODUCTS: {
            return Object.assign({}, state, {
                ...state,
                isFetching: true,
                didInvalidate: false,
                selectedProduct: undefined
            })
        }
        case types.RECEIVE_SINGLE: {
            return Object.assign({}, state, {
                ...state,
                isFetching: false,
                didInvalidate: false,
                selectedProduct: state.products.find(i => i._id === action.id)
            })
        }
        case types.ERROR: {
            return Object.assign({}, state, {
                ...state,
                isFetching: false,
                didInvalidate: true,
                error: action.data
            })
        }
        default: {
            return state;
        }
    }
}

export default productReducer;