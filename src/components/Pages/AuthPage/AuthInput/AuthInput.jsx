import {Field} from "formik";
import React from "react";
import {Form} from "react-bootstrap";


export const AuthInput = ({errors, icon, name, labelText, infoText, ...fieldProps}) => {
	return (
		<Form.Group style={{ position: 'relative' }}>
			<Form.Control as={Field} name={name} {...fieldProps} />
			{
				errors ? (
					<span className="auth-input__error-message"> {errors} </span>
				) : null
			}
		</Form.Group>
	);
}