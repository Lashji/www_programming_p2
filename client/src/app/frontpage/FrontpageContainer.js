import {
    connect
} from "react-redux";
import Frontpage from './Frontpage'
import {
    productOperations
} from "./productReducer"

const mapStateToProps = (state) => {
    const {
        token,
    } = state.signIn;
    const {
        filtered_products
    } = state.products

    console.log("state", state)
    return {
        token,
        filtered_products
    };
};

const mapDispatchToProps = {
    getProducts: productOperations.getProducts
};

const FrontPageContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Frontpage);

export default FrontPageContainer;