import axios from "axios";

export const getSelectTextPageData = async () => {
	try {
		const response = await axios.get(`${process.env.REACT_APP_BACKEND_SERVER_URL}/api/trainingSpeed/selectTextPageData`);
		return response.data;
	} catch (e) {
		console.log(e);
	}
}

export const getSelectedTextData = async data => {
	try {
		const response = await axios.get(`${process.env.REACT_APP_BACKEND_SERVER_URL}/api/trainingSpeed/selectedTextData`, {
			params: {...data}
		});
		return response.data;
	} catch (e) {
		console.log(e);
	}
}

export const prepareToTyping = async () => {
	try {
		return await axios.get(`${process.env.REACT_APP_BACKEND_SERVER_URL}/api/trainingSpeed/prepare`);
	} catch (e) {
		console.log(e);
	}
}