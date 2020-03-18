import {
    connect
} from "react-redux";
import App from "./App";
import {
    pageOperations
} from "./duck"
import productOperations from './frontpage/productReducer'
const mapStateToProps = (state) => {
    const {
        token,
    } = state.signIn;
    const {
        page,
        searchBar
    } = state.page


    return {
        token,
        page,
        searchBar
    };
};

const mapDispatchToProps = {
    frontPage: pageOperations.SwitchToFrontPage,
    filterProducts: productOperations.filterProducts
};

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);

export default AppContainer;