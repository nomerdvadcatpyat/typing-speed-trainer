import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {RegistrationForm} from "./RegistrationForm";
import {bindActionCreators, compose} from "redux";
import {setUserActionCreator} from "../../../../store/actionCreators/userActionCreators";
import {login, registration} from "../../../../utils/api/authApi";
import {Redirect} from "react-router-dom";
import PropTypes from "prop-types";

import {withFormik} from "formik";
import {loginSchema, registrationSchema} from "../../../../utils/validators/authValidation";


const RegistrationContainer = (props) => {
	return props.status && props.status.success ? (<Redirect to="/" />) : (
		<RegistrationForm {...props} />
	);
}

const mapDispatchToProps = dispatch => {
	return {
		setUser: bindActionCreators(setUserActionCreator, dispatch)
	};
}

async function handleSubmit(values, { props, setErrors, setStatus }) {
	try {
		const data = await registration(values);
		setStatus({ success: true});
		props.setUser(data);
	} catch (e) {
		setErrors({ all: e.response.data.error });
	}
}


export default compose(
	connect(null, mapDispatchToProps),
	withFormik({
		mapPropsToValues: () => ({
			email: "",
			password: "",
			rePassword: ""
		}),
		handleSubmit,
		validationSchema: registrationSchema
	})
)(RegistrationContainer);


RegistrationContainer.propTypes = {
	setUser: PropTypes.func
}