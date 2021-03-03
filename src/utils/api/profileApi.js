import axios from "axios";

export const getProfileData = async login => {
    const response = await axios.get(`${process.env.REACT_APP_BACKEND_SERVER_URL}/api/profile?login=${login}`, {
        params: {
            login: login
        }
    });

    return response.data;
}