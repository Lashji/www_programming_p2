import {
    connect
} from "react-redux";
import App from "./App";
import {
    pageOperations
} from "./duck"

const mapStateToProps = (state) => {
    const {
        token,
    } = state.signIn;
    const {
        page
    } = state.page
    const {
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
};

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);

export default AppContainer;