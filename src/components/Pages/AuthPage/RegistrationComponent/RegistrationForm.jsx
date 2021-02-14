import React from 'react';
import '../AuthForm.scss'
import {Formik, Form} from "formik";
import {registrationSchema} from "../../../../utils/validators/authValidation";
import {AuthInput} from "../../../FormCustomComponents/AuthInput/AuthInput";
import PropTypes from "prop-types";
import {bool} from "yup";


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
					className={`${touched.email && errors.email ? 'invalid' : ''}`}
					icon="email"
					id="register-email-input"
					name="email"
					type="text"
					labelText="Email"
					errors={touched.email && errors.email}
					onChange={handleChange}
					onBlur={handleBlur}
					value={values.email}
				/>

				<AuthInput
					className={`${touched.password && errors.password ? 'invalid' : ''}`}
					icon="lock"
					id="register-password-input"
					name="password"
					type="password"
					labelText="Password"
					errors={touched.password && errors.password}
					onChange={handleChange}
					onBlur={handleBlur}
					value={values.password}
				/>

				<AuthInput
					className={`${touched.rePassword && errors.rePassword ? 'invalid' : ''}`}
					icon="lock_outline"
					id="register-re-password-input"
					name={'rePassword'}
					type="password"
					labelText="Confirm password"
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

				<button
					className="btn waves-effect auth-form__submit"
					disabled={
						values.email.length === 0 ||
						values.password.length === 0 ||
						values.rePassword.length === 0 ||
						(status && !status.success) ||
						isSubmitting
					}
					type="submit"
				>
					Submit
				</button>
			</form>
	);
}

RegistrationForm.propTypes = {
	onSubmit: PropTypes.func,
	formError: PropTypes.string
}