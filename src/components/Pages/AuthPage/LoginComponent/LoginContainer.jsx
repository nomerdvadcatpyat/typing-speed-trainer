import React from 'react';
import {connect} from 'react-redux';
import {Login} from "./Login";
import {bindActionCreators} from "redux";
import {login} from "../../../../store/actions/auth";

const mapDispatchToProps = (dispatch) => {
	return {
		login: bindActionCreators((email, password) => login(email,password), dispatch)
	};
}

const LoginContainer = (props) => {
	return (
		<Login {...props} />
	);
}

export default connect(
	null,
	mapDispatchToProps
)(LoginContainer);