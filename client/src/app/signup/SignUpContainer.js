import { connect } from "react-redux";
import SignUp from "./SignUp";
import { signUpOperations } from "./duck";

const mapStateToProps = (state) => {
    const { signUpMessage, signingUp, signUpError } = state.signUp;
    return {
        signUpMessage,
        signingUp,
        signUpError,
    };
};

const mapDispatchToProps = {
    signUp: signUpOperations.signUp,
};

const SignUpContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(SignUp);

export default SignUpContainer;