import {Field} from "formik";
import React from "react";
import './AuthInput.scss';


export const AuthInput = ({touched, errors, name, ...otherProps}) => {
	return (
		<div className="auth-input-wrapper auth-form__input ">
			<Field name={name} className={`auth-input ${touched && errors ? 'invalid' : ''}`} {...otherProps} />
			{
				errors ? (
					<span className="auth-input__error-message"> {errors} </span>
				) : null
			}
		</div>
	);
}