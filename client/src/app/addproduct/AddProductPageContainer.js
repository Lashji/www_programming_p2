import {
    connect
} from "react-redux";
import AddProductPage from './AddProductPage'

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

const mapDispatchToProps = {};

const addProductPageContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(AddProductPage);

export default addProductPageContainer;