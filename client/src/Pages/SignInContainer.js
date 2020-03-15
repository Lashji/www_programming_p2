import { connect } from "react-redux";
import SignInSide from "./SignIn";
import { userOperations } from "./duck";

const mapStateToProps = (state) => {
    const { token, signingIn, signInError } = state.user;
    return {
        token,
        signingIn,
        signInError,
    };
};

const mapDispatchToProps = (dispatch) => {
    const signIn = (email, password) => {
        dispatch(userOperations.signIn(email, password));
    };

    return { signIn };
};

const SignInContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(SignInSide);

export default SignInContainer;