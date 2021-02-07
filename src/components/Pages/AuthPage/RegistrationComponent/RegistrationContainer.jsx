import React from 'react';
import {connect} from 'react-redux';
import {Registration} from "./Registration";
import {bindActionCreators} from "redux";
import {tryRegisterActionCreator} from "../../../../store/actionCreators/userActionCreators";

function mapDispatchToProps(dispatch) {
	return {
		registration: bindActionCreators(tryRegisterActionCreator, dispatch)
	};
}

const RegistrationContainer = (props) => {
	return (
		<Registration {...props} />
	);
}

export default connect(
	null,
	mapDispatchToProps
)(RegistrationContainer);