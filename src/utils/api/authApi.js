import axios from 'axios';

export const registration = async ({email, password, rePassword}) => {
	try {
		const response = await axios.post(`http://localhost:3001/api/auth/registration`, {
			email,
			password,
			rePassword
		});

		localStorage.setItem('token', response.data.token);
		document.location = '/';

		return response.data.user;

	} catch (e) {
		throw e;
	}
}


export const login = async ({email, password}) => {
	try {
		const response = await axios.post(`http://localhost:3001/api/auth/login`, {
			email,
			password
		});

		localStorage.setItem('token', response.data.token);
		document.location = '/';

		return response.data.user;

	} catch (e) {
		throw e;
	}
}


export const logout = () => {
	localStorage.removeItem('token');
	console.log('logout ls', localStorage);
}


export const auth = async () => {
	try {
		const response = await axios.get(`http://localhost:3001/api/auth/auth`,
			{headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}});

		localStorage.setItem('token', response.data.token);

		console.log('set token')

		return response.data.user;

	} catch (e) {
		console.log(e.response.data.message);
		localStorage.removeItem('token');
	}
}