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
        products
    } = state.products

    console.log("state", state)
    return {
        token,
        products
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