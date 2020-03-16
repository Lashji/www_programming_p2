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

const mapDispatchToProps = {
    signIn: signInOperations.signIn,
};

const SignInContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(SignInSide);

export default SignInContainer;