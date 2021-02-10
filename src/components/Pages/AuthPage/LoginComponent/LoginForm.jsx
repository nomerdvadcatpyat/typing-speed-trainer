import React from 'react';
import {Link} from "react-router-dom";
import '../AuthForm.scss'
import {loginSchema} from "../../../../utils/validators/authValidation";
import {Form, Formik} from "formik";
import {AuthInput} from "../../../FormCustomComponents/AuthInput/AuthInput";
import PropTypes from "prop-types";

export function LoginForm(props) {

	return (
		<Formik
			initialValues={{
				email: "",
				password: ""
			}}
			validationSchema={loginSchema}
      onSubmit={props.onSubmit}
		>
			{({
				  values,
				  errors,
				  touched ,
				  isSubmitting,
				  isValid
			}) => (

				<Form className="auth-form login">
					<AuthInput
						className={`${touched.email && errors.email ? 'invalid' : ''}`}
						id="login-email-input"
						name="email"
						type="text"
						labelText="Email"
						icon="email"
						errors={touched.email && errors.email}
					/>

					<AuthInput
						className={`${touched.password && errors.password ? 'invalid' : ''}`}
						id="login-password-input"
						name="password"
						type="password"
						labelText="Password"
						icon="lock"
						errors={touched.password && errors.password}
					/>

					{
						props.formError ? (
							<span className="auth-form__error-message"> {props.formError} </span>
						) : null
					}

					<button
						className="btn waves-effect auth-form__submit"
						type="submit"
						disabled={
							values.email.length === 0 ||
							values.password.length === 0 ||
							!isValid ||
							isSubmitting
						}>
						Submit
					</button>

					<Link to="/auth/registration" className="auth-form__link-to-register"> Нет аккаунта? Зарегистрироваться </Link>
				</Form>
			)}
		</Formik>
	);
}


LoginForm.propTypes = {
	onSubmit: PropTypes.func,
	formError: PropTypes.string
}