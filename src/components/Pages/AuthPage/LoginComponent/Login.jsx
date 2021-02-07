import React, {useState} from 'react';
import {ControlledInput} from "../../../ControlledInput/ControlledInput";
import {Link} from "react-router-dom";
import '../AuthForm.scss'

export const Login = ({ login }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	return (
		<div className="auth-form login">

			<div className="input-field">
				<i className="material-icons prefix">email</i>
				<ControlledInput
					id="login-email-input"
					value={email}
					onChange={setEmail}
					type="text"
				/>
				<label htmlFor="login-email-input">Email</label>
			</div>

			<div className="input-field">
				<i className="material-icons prefix">lock_outline</i>
				<ControlledInput
					id="login-password-input"
					value={password}
					onChange={setPassword}
					type="password"
				/>
				<label htmlFor="login-password-input">Password</label>
			</div>


			<button
				className="btn waves-effect"
				onClick={() => login({email, password})}
			>
				Submit
			</button>

			<Link to="/auth/registration" className="link-to-register"> Нет аккаунта? Зарегистрироваться </Link>
		</div>
	);
}