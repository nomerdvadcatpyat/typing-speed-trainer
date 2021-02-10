import React, {useState} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {setUserActionCreator} from "../../../../store/actionCreators/userActionCreators";
import {LoginForm} from "./LoginForm";
import {login} from "../../../../utils/api/authApi";
import {Redirect} from "react-router-dom";
import PropTypes from "prop-types";


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


const mapDispatchToProps = (dispatch) => {
	return {
		setUser: bindActionCreators(setUserActionCreator, dispatch)
	};
}

export default connect(
	null,
	mapDispatchToProps
)(LoginContainer);


LoginContainer.propTypes = {
	setUser: PropTypes.func
}