import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {RegistrationForm} from "./RegistrationForm";
import {bindActionCreators} from "redux";
import {setUserActionCreator} from "../../../../store/actionCreators/userActionCreators";
import {registration} from "../../../../utils/api/authApi";
import {Redirect} from "react-router-dom";
import PropTypes from "prop-types";

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
		<RegistrationForm onSubmit={handleSubmit} formError={error} {...props} />
	);
}

function mapDispatchToProps(dispatch) {
	return {
		setUser: bindActionCreators(setUserActionCreator, dispatch)
	};
}

export default connect(
	null,
	mapDispatchToProps
)(RegistrationContainer);


RegistrationContainer.propTypes = {
	setUser: PropTypes.func
}