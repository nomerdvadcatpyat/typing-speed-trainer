import React from 'react';
import {Link} from "react-router-dom";
import '../AuthForm.scss'
import {AuthInput} from "../AuthInput/AuthInput";
import {StyledButton} from "../../../UtilComponents/StyledButton/StyledButton";


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
					name="login"
					type="text"
					placeholder="Login"
					touched={touched.login}
					errors={touched.login && errors.login}
					onChange={handleChange}
					onBlur={handleBlur}
					value={values.login}
				/>

				<AuthInput
					name="password"
					type="password"
					placeholder="Password"
					touched={touched.login}
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

				<StyledButton
					className="auth-form__submit"
					type="submit"
					disabled={
						values.login.length === 0 ||
						values.password.length === 0 ||
						(status && !status.success) ||
						isSubmitting
					}>
					Войти
				</StyledButton>

				<Link to="/auth/registration" className="auth-form__link-to-register"> Нет аккаунта? Зарегистрироваться </Link>
			</form>
	);
}