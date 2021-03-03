import React from 'react';
import {Link} from "react-router-dom";
import '../AuthForm.scss'
import {AuthInput} from "../AuthInput/AuthInput";
import PropTypes from "prop-types";
import {Button, Form} from "react-bootstrap";


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
			<Form className="auth-form login" onSubmit={handleSubmit}>
				<AuthInput
					className={`auth-form__input ${touched.login && errors.login ? 'invalid' : ''}`}
					name="login"
					type="text"
					placeholder="Login"
					errors={touched.login && errors.login}
					onChange={handleChange}
					onBlur={handleBlur}
					value={values.login}
				/>

				<AuthInput
					className={`auth-form__input ${touched.password && errors.password ? 'invalid' : ''}`}
					name="password"
					type="password"
					placeholder="Password"
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

				<Button
					className="auth-form__submit"
					type="submit"
					variant="secondary"
					disabled={
						values.login.length === 0 ||
						values.password.length === 0 ||
						(status && !status.success) ||
						isSubmitting
					}>
					Submit
				</Button>

				<Link to="/auth/registration" className="auth-form__link-to-register"> Нет аккаунта? Зарегистрироваться </Link>
			</Form>
	);
}


LoginForm.propTypes = {
	onSubmit: PropTypes.func,
	formError: PropTypes.string
}