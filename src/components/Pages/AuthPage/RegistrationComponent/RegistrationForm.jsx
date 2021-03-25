import React from 'react';
import '../AuthForm.scss'
import {AuthInput} from "../AuthInput/AuthInput";
import {StyledButton} from "../../../UtilComponents/StyledButton/StyledButton";


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
					touched={touched.login}
					errors={touched.login && errors.login}
					name="login"
					type="text"
					placeholder="Login"
					onChange={handleChange}
					onBlur={handleBlur}
					value={values.login}
				/>

				<AuthInput
					name="password"
					type="password"
					placeholder="Password"
					touched={touched.password}
					errors={touched.password && errors.password}
					onChange={handleChange}
					onBlur={handleBlur}
					value={values.password}
				/>

				<AuthInput
					name="rePassword"
					type="password"
					placeholder="Confirm password"
					touched={touched.rePassword}
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

				<StyledButton
					className="auth-form__submit"
					disabled={
						values.login.length === 0 ||
						values.password.length === 0 ||
						values.rePassword.length === 0 ||
						(status && !status.success) ||
						isSubmitting
					}
				>
					Зарегистрироваться
				</StyledButton>
			</form>
	);
}
