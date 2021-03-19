import axios from "axios";

export const getRating = async () => {
    const response = await axios.get(`${process.env.REACT_APP_BACKEND_SERVER_URL}/api/rating`);
    return response.data;
}