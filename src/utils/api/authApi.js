import axios from 'axios';

export const registration = async ({login, password, rePassword}) => {
	try {
		const response = await axios({
			method: 'POST',
			url: `http://localhost:3001/api/auth/registration`,
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
			url: `http://localhost:3001/api/auth/login`,
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
		url: "http://localhost:3001/api/auth/logout",
		withCredentials: true
	});
}


export const auth = async () => {
	const response = await axios({
		method: 'GET',
		url: "http://localhost:3001/api/auth/auth",
		withCredentials: true
	});

	return response.data;
}