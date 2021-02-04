import axios from 'axios';
import {setUser, logoutActionCreator} from "../actionCreators/userActionCreators";
import {setLoadedState, setLoadingState} from "../actionCreators/appActionCreators";

export const registration = (email, password, rePassword) => {
	return async dispatch => {
		try {
			const response = await axios.post(`http://localhost:3001/api/auth/registration`, {
				email,
				password,
				rePassword
			});
			dispatch(setUser(response.data.user));
			localStorage.setItem('token', response.data.token);
			document.location = '/';
		} catch (e) {
			console.log(e);
		}
	}
}


export const login = (email, password) => {
	return async dispatch => {
		try {
			const response = await axios.post(`http://localhost:3001/api/auth/login`, {
				email,
				password
			});
			dispatch(setUser(response.data.user));
			localStorage.setItem('token', response.data.token);
			document.location = '/';
		} catch (e) {
			console.log(e);
		}
	}
}


export const logout = () => {
	return async dispatch => {
		localStorage.removeItem('token');
		dispatch(logoutActionCreator());
	}
}


export const auth = () => {
	return async dispatch => {
		try {
			dispatch(setLoadingState());

			const response = await axios.get(`http://localhost:3001/api/auth/auth`,
				{headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}});
			dispatch(setUser(response.data.user));
			localStorage.setItem('token', response.data.token);
		} catch (e) {
			console.log(e.response.data.message);
			localStorage.removeItem('token');
		}
		finally {
			dispatch(setLoadedState());
		}
	}
}