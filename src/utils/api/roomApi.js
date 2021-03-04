import axios from "axios";

export const getSelectTextPageData = async () => {
	try {
		const response = await axios.get(`${process.env.REACT_APP_BACKEND_SERVER_URL}/api/trainingSpeed/selectTextPageData`);
		return response.data;
	} catch (e) {
		console.log(e);
	}
}