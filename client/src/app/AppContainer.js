import { connect } from "react-redux";
import App from "./App";
import { signInOperations } from "./signin/duck"

const mapStateToProps = (state) => {
    const { token, } = state.signIn;
    return {
        token,
    };
};

const mapDispatchToProps = {
    logOut: signInOperations.logOut,
};

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);

export default AppContainer;