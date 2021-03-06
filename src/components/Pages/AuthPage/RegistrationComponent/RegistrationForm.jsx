import React from 'react';
import '../AuthForm.scss'
import {AuthInput} from "../AuthInput/AuthInput";
import {Button} from "react-bootstrap";


export const RegistrationForm = (props) => {
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
			<form className="auth-form registration" onSubmit={handleSubmit}>
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

				<AuthInput
					className={`auth-form__input ${touched.rePassword && errors.rePassword ? 'invalid' : ''}`}
					name="rePassword"
					type="password"
					placeholder="Confirm password"
					errors={touched.rePassword && errors.rePassword}
					onChange={handleChange}
					onBlur={handleBlur}
					value={values.rePassword}
				/>

				{
					errors.all ? (
						<span className="auth-form__error-message"> {errors.all} </span>
					) : null
				}

				<Button
					className="auth-form__submit"
					variant="dark"
					disabled={
						values.login.length === 0 ||
						values.password.length === 0 ||
						values.rePassword.length === 0 ||
						(status && !status.success) ||
						isSubmitting
					}
					type="submit"
				>
					Submit
				</Button>
			</form>
	);
}
