import React, {useState} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {setUserActionCreator} from "../../../../store/actionCreators/userActionCreators";
import {LoginForm} from "./Login";
import {login} from "../../../../utils/api/authApi";
import {Redirect} from "react-router-dom";


const mapDispatchToProps = (dispatch) => {
	return {
		setUser: bindActionCreators(setUserActionCreator, dispatch)
	};
}

const LoginContainer = (props) => {

	const [error, setError] = useState(null);
	const [isFormValid, setValidate] = useState(false);

	const submitHandler = async (user) => {
		try {
			await login(user);
			setValidate(true);
			props.setUser(user);
		} catch (e) {
			setError(e.response.data.error);
			setValidate(false);
		}
	}

	return isFormValid ? (<Redirect to="/" />) :
				(<LoginForm onSubmit={submitHandler} formError={error} {...props} />)
}

export default connect(
	null,
	mapDispatchToProps
)(LoginContainer);