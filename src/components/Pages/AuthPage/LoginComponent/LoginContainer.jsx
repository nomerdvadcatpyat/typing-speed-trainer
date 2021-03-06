import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators, compose} from "redux";
import {setUser} from "../../../../store/actionCreators/userActionCreators";
import {LoginForm} from "./LoginForm";
import {login} from "../../../../utils/api/authApi";
import {Redirect} from "react-router-dom";
import {withFormik} from "formik";
import {loginSchema} from "../../../../utils/validators/authValidation";


const LoginContainer = (props) => {
	return props.status && props.status.success ? (<Redirect to="/" />) :
				(<LoginForm {...props} />)
}


const mapDispatchToProps = (dispatch) => {
	return {
		setUser: bindActionCreators(setUser, dispatch)
	};
}

async function handleSubmit(values, { props, setErrors, setStatus }) {
	try {
		const data = await login(values);
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
			login: "",
			password: ""
		}),
		handleSubmit,
		validationSchema: loginSchema
	})
)(LoginContainer);