import types from "./types";

const INITIAL_STATE = {
    token: null,
    page: "frontpage",
    searchBar: true
};

function pageReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case types.FRONT_PAGE: {
            return Object.assign({}, state, {
                ...state,
                page: "frontpage",
                searchBar: true
            })
        }


        default: {
            return state;
        }
    }
}

export default pageReducer;