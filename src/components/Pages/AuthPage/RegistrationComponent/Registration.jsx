import React, {useState} from 'react';
import {ControlledInput} from "../../../ControlledInput/ControlledInput";
import '../AuthForm.scss'

export const Registration = ({ registration }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [rePassword, setRePassword] = useState("");

	return (
		<div className="auth-form registration">

			<div className="input-field">
				<i className="material-icons prefix">email</i>
				<ControlledInput
					id="register-email-input"
					type="text"
					value={email}
					onChange={setEmail}
				/>
				<label htmlFor="register-email-input">Email</label>
			</div>

			<div className="input-field">
				<i className="material-icons prefix">lock</i>
				<ControlledInput
					id="register-password-input"
					type="password"
					value={password}
					onChange={setPassword}
				/>
				<label htmlFor="register-password-input">Password</label>
			</div>

			<div className="input-field">
				<i className="material-icons prefix">lock_outline</i>
				<ControlledInput
					id="register-re-password-input"
					type="password"
					value={rePassword}
					onChange={setRePassword}
				/>
				<label htmlFor="register-re-password-input">Confirm password</label>
			</div>

			<button
				className="btn waves-effect"
				onClick={() => registration(email, password, rePassword)}
			>
				Submit
			</button>

		</div>
	);
}