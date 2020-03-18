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

    return {
        token,
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