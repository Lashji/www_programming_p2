import types from "./types";

function frontpage() {
    return {
        type: types.FRONT_PAGE,
    }
}

const addProductPage = () => {
    console.log("add product page fired")
    return {
        type: types.ADD_PAGE
    }
}

export default {
    frontpage,
    addProductPage
};