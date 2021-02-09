import React from 'react';
import '../AuthForm.scss'
import {Formik, Form} from "formik";
import {registrationSchema} from "../../../../utils/validators/authValidation";
import {AuthInput} from "../../../FormCustomComponents/AuthInput/AuthInput";

export const RegistrationForm = ({isFormValid, onSubmit, formError}) => {

	return (
		<Formik
			initialValues={{
				email: "",
				password: "",
				rePassword: ""
			}}
			validationSchema={registrationSchema}
			onSubmit={onSubmit}
			>
			{({
			  values,
			  touched,
				errors,
				isValid,
				isSubmitting
			}) => (
				<Form className="auth-form registration">

					<AuthInput
						className={`${touched.email && errors.email ? 'invalid' : ''}`}
						icon="email"
						id="register-email-input"
						name="email"
						type="text"
						labelText="Email"
						errors={touched.email && errors.email}
					/>

					<AuthInput
						className={`${touched.password && errors.password ? 'invalid' : ''}`}
						icon="lock"
						id="register-password-input"
						name="password"
						type="password"
						labelText="Password"
						errors={touched.password && errors.password}
					/>

					<AuthInput
						className={`${touched.rePassword && errors.rePassword ? 'invalid' : ''}`}
						icon="lock_outline"
						id="register-re-password-input"
						name={'rePassword'}
						type="password"
						labelText="Confirm password"
						errors={touched.rePassword && errors.rePassword}
					/>

					{
						formError ? (
							<span className="auth-form__error-message"> {formError} </span>
						) : null
					}

					<button
						className="btn waves-effect auth-form__submit"
						disabled={
							values.email.length === 0 ||
							values.password.length === 0 ||
							values.rePassword.length === 0 ||
							!isValid ||
							isSubmitting
						}>
						Submit
					</button>
				</Form>
			)}
		</Formik>

	);
}