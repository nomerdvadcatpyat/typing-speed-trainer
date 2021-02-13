import axios from "axios";


export const prepareToTyping = async () => {
	try {
		return await axios.get('http://localhost:3001/api/trainingSpeed/prepare');
	} catch (e) {
		console.log(e);
	}
}