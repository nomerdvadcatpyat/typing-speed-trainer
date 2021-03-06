import React from 'react';
import {Route, Switch} from "react-router-dom";
import LoginContainer from "./LoginComponent/LoginContainer";
import RegistrationContainer from "./RegistrationComponent/RegistrationContainer";
import './AuthPage.scss';

export const AuthPage = ({match})  => {
	return (
		<div className="auth">
			<Switch>
				<Route path={`${match.path}/login`} component={LoginContainer}/>
				<Route path={`${match.path}/registration`} component={RegistrationContainer} />
			</Switch>
		</div>
	);
}