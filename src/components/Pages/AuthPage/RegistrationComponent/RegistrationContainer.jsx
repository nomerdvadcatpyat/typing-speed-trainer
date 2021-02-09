import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {RegistrationForm} from "./Registration";
import {bindActionCreators} from "redux";
import {setUserActionCreator} from "../../../../store/actionCreators/userActionCreators";
import {registration} from "../../../../utils/api/authApi";
import {Redirect} from "react-router-dom";

function mapDispatchToProps(dispatch) {
	return {
		setUser: bindActionCreators(setUserActionCreator, dispatch)
	};
}

const RegistrationContainer = (props) => {

	const [error, setError] = useState(null);
	const [isFormValid, setValidate] = useState(false);

	const handleSubmit = async (user) => {
		try {
			await registration(user);
			setValidate(true);
			props.setUser(user);
		} catch (e) {
			setError(e.response.data.error)
			setValidate(false);
		}
	}

	return isFormValid ? (<Redirect to="/" />) : (
		<RegistrationForm onSubmit={handleSubmit} isFormValid={isFormValid} formError={error} {...props} />
	);
}

export default connect(
	null,
	mapDispatchToProps
)(RegistrationContainer);