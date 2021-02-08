import React from 'react';
import {connect} from 'react-redux';
import {RegistrationForm} from "./Registration";
import {bindActionCreators} from "redux";
import {tryRegisterActionCreator} from "../../../../store/actionCreators/userActionCreators";

function mapDispatchToProps(dispatch) {
	return {
		tryRegister: bindActionCreators(tryRegisterActionCreator, dispatch)
	};
}

const RegistrationContainer = (props) => {
	return (
		<RegistrationForm {...props} />
	);
}

export default connect(
	null,
	mapDispatchToProps
)(RegistrationContainer);