import React, {useState} from 'react';
import '../AuthForm.scss'


export const RegistrationForm = (props) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [rePassword, setRePassword] = useState("");

	const submitHandler = (e) => {
		e.preventDefault();
		props.tryRegister({email, password, rePassword});
	}

	return (
		<form onSubmit={submitHandler} className="auth-form registration">

			<div className="input-field">
				<i className="material-icons prefix">email</i>
				<input
					id="register-email-input"
					name={'email'}
					type="text"
					value={email}
					onChange={e => setEmail(e.target.value)}
				/>
				<label htmlFor="register-email-input">Email</label>
			</div>

			<div className="input-field">
				<i className="material-icons prefix">lock</i>
				<input
					id="register-password-input"
					name={'password'}
					type="password"
					value={password}
					onChange={e => setPassword(e.target.value)}
				/>
				<label htmlFor="register-password-input">Password</label>
			</div>

			<div className="input-field">
				<i className="material-icons prefix">lock_outline</i>
				<input
					id="register-re-password-input"
					name={'rePassword'}
					type="password"
					value={rePassword}
					onChange={e => setRePassword(e.target.value)}
				/>
				<label htmlFor="register-re-password-input">Confirm password</label>
			</div>

			<button className="btn waves-effect">
				Submit
			</button>

		</form>
	);
}



// export const RegistrationReduxForm =  ({registration}) => {
// 	const handleSubmit = (user) => {
// 		registration(user);
// 	}
//
// 	return withReduxForm(RegistrationForm, 'registration', handleSubmit);
// }