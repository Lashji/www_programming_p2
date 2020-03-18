import {
    connect
} from "react-redux";
import App from "./App";
import {
    pageOperations
} from "./duck"
import {
    productOperations
} from './frontpage/productReducer'

const mapStateToProps = (state) => {
    const {
        token,
    } = state.signIn;
    const {
        page,
        searchBar
    } = state.page
    const {
        products
    } = state.products

    return {
        token,
        page,
        searchBar,
        products
    };
};

const mapDispatchToProps = {
    frontpage: pageOperations.switchToFrontPage,
    addPage: pageOperations.switchToAddPage,
    filterProducts: productOperations.filterProducts
};

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);

export default AppContainer;