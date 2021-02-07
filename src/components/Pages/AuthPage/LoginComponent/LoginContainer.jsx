import React from 'react';
import {connect} from 'react-redux';
import {Login} from "./Login";
import {bindActionCreators} from "redux";
import {tryLoginActionCreator} from "../../../../store/actionCreators/userActionCreators";

const mapDispatchToProps = (dispatch) => {
	return {
		login: bindActionCreators(tryLoginActionCreator, dispatch)
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