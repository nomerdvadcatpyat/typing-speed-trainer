import React from 'react';
import {connect} from 'react-redux';
import {Registration} from "./Registration";
import {registration} from "../../../../store/actions/auth";
import {bindActionCreators} from "redux";

function mapDispatchToProps(dispatch) {
	return {
		registration: bindActionCreators(registration, dispatch)
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