import axios from 'axios';

export const registration = async ({login, password, rePassword}) => {
	try {
		const response = await axios({
			method: 'POST',
			url: `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/auth/registration`,
			data: {
				login,
				password,
				rePassword
			},
			withCredentials: true
		});
		return response.data.user;
	} catch (e) {
		throw e;
	}
}


export const login = async ({login, password}) => {
	try {
		const response = await axios({
			method: 'POST',
			url: `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/auth/login`,
			data: {
				login,
				password
			},
			withCredentials: true
		});
		return response.data.user;
	} catch (e) {
		throw e;
	}
}


export const logout = async () => {
	await axios({
		method: 'GET',
		url: `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/auth/logout`,
		withCredentials: true
	});
}


export const auth = async () => {
	const response = await axios({
		method: 'GET',
		url: `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/auth/auth`,
		withCredentials: true
	});

	return response.data;
}