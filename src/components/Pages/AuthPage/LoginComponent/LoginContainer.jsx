import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {tryLoginActionCreator} from "../../../../store/actionCreators/userActionCreators";
import {LoginForm} from "./Login";


const mapDispatchToProps = (dispatch) => {
	return {
		tryLogin: bindActionCreators(tryLoginActionCreator, dispatch)
	};
}

const LoginContainer = (props) => {
	return (
		<LoginForm {...props} />
	);
}

export default connect(
	null,
	mapDispatchToProps
)(LoginContainer);