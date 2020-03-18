import types from "./types";

const INITIAL_STATE = {
    page: "frontpage",
    searchBar: true
};

function pageReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case types.FRONT_PAGE: {
            console.log("Front page")

            return Object.assign({}, state, {
                ...state,
                page: "frontpage",
                searchBar: true
            })
        }
        case types.ADD_PAGE: {
            console.log("Add page")
            return Object.assign({}, state, {
                ...state,
                page: "addPage",
                searchBar: false
            })
        }

        case types.ADMIN_PAGE: {
            return Object.assign({}, state, {
                ...state,
                page: "adminPage",
                searchBar: false
            })
        }

        default: {
            return state;
        }
    }
}

export default pageReducer