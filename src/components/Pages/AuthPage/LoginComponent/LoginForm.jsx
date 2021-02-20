import React from 'react';
import {Link} from "react-router-dom";
import '../AuthForm.scss'
import {AuthInput} from "../../../UtilComponents/AuthInput/AuthInput";
import PropTypes from "prop-types";


export function LoginForm(props) {
	const {
		handleSubmit,
		handleChange,
		handleBlur,
		touched,
		errors,
		values,
		status,
		isSubmitting
	} = props;

	return (
			<form className="auth-form login" onSubmit={handleSubmit}>
				<AuthInput
					className={`${touched.email && errors.email ? 'invalid' : ''}`}
					id="login-email-input"
					name="email"
					type="text"
					labelText="Email"
					icon="email"
					errors={touched.email && errors.email}
					onChange={handleChange}
					onBlur={handleBlur}
					value={values.email}
				/>

				<AuthInput
					className={`${touched.password && errors.password ? 'invalid' : ''}`}
					id="login-password-input"
					name="password"
					type="password"
					labelText="Password"
					icon="lock"
					errors={touched.password && errors.password}
					onChange={handleChange}
					onBlur={handleBlur}
					value={values.password}
				/>

				{
					errors.all ? (
						<span className="auth-form__error-message"> {errors.all} </span>
					) : null
				}

				<button
					className="btn waves-effect auth-form__submit"
					type="submit"
					disabled={
						values.email.length === 0 ||
						values.password.length === 0 ||
						(status && !status.success) ||
						isSubmitting
					}>
					Submit
				</button>

				<Link to="/auth/registration" className="auth-form__link-to-register"> Нет аккаунта? Зарегистрироваться </Link>
			</form>
	);
}


LoginForm.propTypes = {
	onSubmit: PropTypes.func,
	formError: PropTypes.string
}