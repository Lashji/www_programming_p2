import {
    connect
} from "react-redux";
import AddProductPage from './AddProductPage'
import {
    productOperations
} from '../frontpage/productReducer'

const mapStateToProps = (state) => {
    const {
        token,
        ID
    } = state.signIn;
    const {
        filtered_products
    } = state.products

    console.log("state", state)
    return {
        ID,
        token,
        filtered_products
    };
};

const mapDispatchToProps = {
    postProduct: productOperations.postProduct
};

const addProductPageContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(AddProductPage);

export default addProductPageContainer;