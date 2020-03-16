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

const mapDispatchToProps = (dispatch) => {
    const signUp = (name, email, password) => {
        dispatch(signUpOperations.signUp(name, email, password));
    };

    return { signUp };
};

const SignUpContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(SignUp);

export default SignUpContainer;