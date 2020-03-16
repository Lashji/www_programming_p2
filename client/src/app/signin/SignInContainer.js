import { connect } from "react-redux";
import SignInSide from "./SignIn";
import { signInOperations } from "./duck";

const mapStateToProps = (state) => {
    const { token, signingIn, signInError } = state.signIn;
    return {
        token,
        signingIn,
        signInError,
    };
};

const mapDispatchToProps = (dispatch) => {
    const signIn = (email, password) => {
        dispatch(signInOperations.signIn(email, password));
    };

    return { signIn };
};

const SignInContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(SignInSide);

export default SignInContainer;